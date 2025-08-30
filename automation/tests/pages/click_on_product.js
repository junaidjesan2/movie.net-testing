import ClickOnNumber from "../objects/click_on_numbers";
import ViewSingleProduct from "../objects/single_product_visit";

export default class ClickProduct {
  constructor(page) {
    this.page = page;
    this.locate = new ViewSingleProduct(page);
    this.pagination = new ClickOnNumber(page);
  }
  async clickOnProduct(index) {
    await this.locate.clickOnProduct(index).click();
  }
  async moreProduct(index) {
    const paginationButton = await this.pagination.number(index);
    if (paginationButton) {
      await paginationButton.click();
    } else {
      throw new Error(`Pagination button at index ${index} not found`);
    }
  }
}
