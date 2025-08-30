import { test } from "@playwright/test";
import HeaderPaths from "../pages/navigation";
import ClickProduct from "../pages/click_on_product";

test.describe.serial("Movies View Pagination Check", () => {
  let header, pagin;
  test.beforeEach(async ({ page }) => {
    header = new HeaderPaths(page);
    pagin = new ClickProduct(page);
    await page.goto("/");
  });
  test("Go to the all movies Page", async ({ page }) => {
    await header.AllMovies();
    await page.pause(3000);
  });
  test("Redirect to different product pages using paginatin", async ({
    page,
  }) => {
    await header.AllMovies();
    await pagin.moreProduct(2);
    await page.pause(3000);
    await pagin.moreProduct(4);
    await page.pause(3000);
    await pagin.moreProduct(5);
  });
});
