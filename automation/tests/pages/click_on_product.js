
import ViewSingleProduct from "../objects/single_product_visit";

export default class ClickProduct {
  constructor(page) {
    this.page = page;
    this.locate = new ViewSingleProduct(page);
  }
  async clickOnProduct(index) {
    await this.locate.clickOnProduct(index).click();
  }
}
