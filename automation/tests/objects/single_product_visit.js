export default class ViewSingleProduct {
  constructor(page) {
    this.page = page;
  }
  clickOnProduct(index) {
    return this.page.locator(`(//a[@href="/movies/${index}"])`);
  }
}
