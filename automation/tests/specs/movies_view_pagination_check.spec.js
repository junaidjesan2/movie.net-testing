import { test } from "@playwright/test";
import HeaderPaths from "../pages/navigation";

test.describe.serial("Movies View Pagination Check", () => {
  let header;
  test.beforeEach(async ({ page }) => {
    header = new HeaderPaths(page);
    await page.goto("/");
  });
  test("Go to the all movies Page", async ({page}) => {
    await header.AllMovies();
    await  page.pause(3000);
  });
});
