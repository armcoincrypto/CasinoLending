import { assertProgrammaticRoutesValid, validateProgrammaticRoutes } from "../../src/lib/seo/programmatic-validation";

function main(): void {
  const issues = validateProgrammaticRoutes();

  if (issues.length > 0) {
    console.error("Generated route validation failed:");
    for (const issue of issues) {
      console.error(`- [${issue.code}] ${issue.message}`);
    }
    process.exit(1);
  }

  assertProgrammaticRoutesValid();
  console.log("Generated route validation passed.");
}

main();
