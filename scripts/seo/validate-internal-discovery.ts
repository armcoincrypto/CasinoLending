import fs from "fs";
import path from "path";
import { internalSeoLinks } from "../../src/data/programmatic/internal-seo-links";
import { getRegistryRouteByPath, hasBackingData } from "../../src/lib/seo/route-registry";

const ROOT = path.join(__dirname, "../..");

interface ValidationIssue {
  code: string;
  message: string;
}

function readSource(relativePath: string): string {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf-8");
}

function validateInternalSeoLinksRegistry(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const hrefs = internalSeoLinks.map((link) => link.href);
  const uniqueHrefs = new Set(hrefs);

  if (uniqueHrefs.size !== hrefs.length) {
    issues.push({
      code: "DUPLICATE_HREF",
      message: "internalSeoLinks contains duplicate href values",
    });
  }

  for (const link of internalSeoLinks) {
    if (!link.href.startsWith("/")) {
      issues.push({
        code: "INVALID_HREF",
        message: `Href must start with /: ${link.href}`,
      });
    }

    const registryEntry = getRegistryRouteByPath(link.href);
    if (!registryEntry) {
      issues.push({
        code: "REGISTRY_MISSING",
        message: `No route registry entry for ${link.href}`,
      });
      continue;
    }

    if (!hasBackingData(registryEntry)) {
      issues.push({
        code: "BACKING_DATA_MISSING",
        message: `No programmatic backing data for ${link.href}`,
      });
    }
  }

  return issues;
}

function validateHomepageDiscovery(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const homepageSource = readSource("src/app/page.tsx");
  const sectionSource = readSource("src/components/home/InternalSeoGuidesSection.tsx");

  if (!homepageSource.includes("InternalSeoGuidesSection")) {
    issues.push({
      code: "HOMEPAGE_SECTION_MISSING",
      message: "Homepage does not render InternalSeoGuidesSection",
    });
  }

  if (
    !sectionSource.includes("internalSeoLinks") ||
    !sectionSource.includes("internalSeoLinks.map") ||
    !sectionSource.includes("href={link.href}")
  ) {
    issues.push({
      code: "HOMEPAGE_LINKS_SOURCE_MISSING",
      message: "InternalSeoGuidesSection must map internalSeoLinks to crawlable href links",
    });
  }

  return issues;
}

function validateFooterDiscovery(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const footerSource = readSource("src/components/Footer.tsx");

  if (
    !footerSource.includes("internalSeoLinks") ||
    !footerSource.includes("internalSeoLinks.map") ||
    !footerSource.includes("href={link.href}")
  ) {
    issues.push({
      code: "FOOTER_LINKS_SOURCE_MISSING",
      message: "Footer must map internalSeoLinks to crawlable href links",
    });
  }

  if (!footerSource.includes("Guides")) {
    issues.push({
      code: "FOOTER_GUIDES_COLUMN_MISSING",
      message: 'Footer is missing the "Guides" navigation column',
    });
  }

  return issues;
}

function main(): void {
  const issues = [
    ...validateInternalSeoLinksRegistry(),
    ...validateHomepageDiscovery(),
    ...validateFooterDiscovery(),
  ];

  if (issues.length > 0) {
    console.error("Internal discovery validation failed:");
    for (const issue of issues) {
      console.error(`- [${issue.code}] ${issue.message}`);
    }
    process.exit(1);
  }

  console.log(`Internal discovery validation passed (${internalSeoLinks.length} priority links).`);
}

main();
