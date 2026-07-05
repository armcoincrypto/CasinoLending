import fs from "fs";
import path from "path";
import { siteConfig } from "../../src/config/site";

const ROOT = path.join(__dirname, "../..");
const FORBIDDEN_PATTERNS = [
  "casinojournalbd",
  "Casino Journal BD",
  "CasinoPulse India",
] as const;
const SCAN_DIRS = ["src/app", "src/components", "src/config", "src/lib", "src/data", "public"] as const;
const ALLOWLIST = new Set(["BRAND_ENTITY_AUDIT.md"]);

interface ValidationIssue {
  code: string;
  message: string;
}

function collectFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(fullPath));
      continue;
    }

    if (/\.(ts|tsx|js|jsx|json|md|html|webmanifest|txt|xml)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function validateForbiddenBrandStrings(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  for (const relativeDir of SCAN_DIRS) {
    const absoluteDir = path.join(ROOT, relativeDir);
    for (const filePath of collectFiles(absoluteDir)) {
      const relativePath = path.relative(ROOT, filePath);
      if (ALLOWLIST.has(relativePath)) {
        continue;
      }

      const content = fs.readFileSync(filePath, "utf-8");
      for (const pattern of FORBIDDEN_PATTERNS) {
        if (content.includes(pattern)) {
          issues.push({
            code: "FORBIDDEN_BRAND_STRING",
            message: `${relativePath} contains forbidden brand string: ${pattern}`,
          });
        }
      }
    }
  }

  return issues;
}

function validateCanonicalBrandConfig(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (siteConfig.name !== "CasinoPulse") {
    issues.push({
      code: "SITE_CONFIG_NAME",
      message: `siteConfig.name must be "CasinoPulse" (found "${siteConfig.name}")`,
    });
  }

  if (siteConfig.codename !== "CasinoPulse") {
    issues.push({
      code: "SITE_CONFIG_CODENAME",
      message: `siteConfig.codename must be "CasinoPulse" (found "${siteConfig.codename}")`,
    });
  }

  const manifestPath = path.join(ROOT, "src/app/manifest.ts");
  if (!fs.existsSync(manifestPath)) {
    issues.push({
      code: "MANIFEST_MISSING",
      message: "src/app/manifest.ts is missing",
    });
  } else {
    const manifestSource = fs.readFileSync(manifestPath, "utf-8");
    if (!manifestSource.includes('name: siteConfig.name') || !manifestSource.includes('short_name: siteConfig.name')) {
      issues.push({
        code: "MANIFEST_BRAND",
        message: "manifest.ts must set name and short_name from siteConfig.name",
      });
    }
  }

  const schemaPath = path.join(ROOT, "src/lib/seo/schema.ts");
  const schemaSource = fs.readFileSync(schemaPath, "utf-8");
  if (!schemaSource.includes("websiteSchema") || !schemaSource.includes("name: siteConfig.name")) {
    issues.push({
      code: "SCHEMA_BRAND",
      message: "schema.ts must expose organization/website schemas using siteConfig.name",
    });
  }

  const metadataPath = path.join(ROOT, "src/lib/seo/metadata.ts");
  const metadataSource = fs.readFileSync(metadataPath, "utf-8");
  if (!metadataSource.includes("siteConfig.name")) {
    issues.push({
      code: "METADATA_BRAND",
      message: "metadata.ts must use siteConfig.name for titles and OpenGraph siteName",
    });
  }

  return issues;
}

function main(): void {
  const issues = [...validateForbiddenBrandStrings(), ...validateCanonicalBrandConfig()];

  if (issues.length > 0) {
    console.error("Brand entity validation failed:");
    for (const issue of issues) {
      console.error(`- [${issue.code}] ${issue.message}`);
    }
    process.exit(1);
  }

  console.log('Brand entity validation passed (canonical brand: "CasinoPulse").');
}

main();
