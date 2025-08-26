import { test, expect, Locator, Page } from "@playwright/test";

test.describe("Homepage Link Navigation Tests", (): void => {
  test.beforeEach(async ({ page }: { page: Page }): Promise<void> => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("Verify all subject links exist and have correct href", async ({ page }: { page: Page }): Promise<void> => {
    const courses: string[] = [
      "algebra",
      "discrete-math",
      "calculus",
      "engineering-math",
      "physics",
      "chemistry",
      "electrodynamics",
      "electrical-circuits",
      "logical-circuits",
      "javascript",
      "typescript",
      "html",
      "svg",
      "css",
      "react",
      "next",
      "network",
      "design",
      "c",
      "c++",
      "java",
      "sql",
      "algorithms",
      "artificial-intelligence",
      "machine-learning",
    ];

    for (const course of courses) {
      const link: Locator = page.locator(`a[href="/${course}"]`);
      await expect(link).toBeVisible();
    }
  });
});
