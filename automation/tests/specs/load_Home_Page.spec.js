import { expect, test } from "@playwright/test";
import ClickProduct from "../pages/click_on_product";

let product;

test.describe("Load Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://movie-dot-net.netlify.app/");
    product = new ClickProduct(page);
  });

  test("Visit 10th product", async () => {
    await product.clickOnProduct(10);
  });

  test("Visit 20th product", async () => {
    await product.clickOnProduct(20);
  });

  // test("Visit 30th product", async () => {
  //   await expect(async () => {
  //     await product.clickOnProduct(30).click();
  //   }).rejects.toThrow();
  // });
});
