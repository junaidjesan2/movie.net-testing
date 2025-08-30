export default class ClickOnNumber {
  constructor(page) {
    this.page = page;
  }

  number(index) {
    return this.page.locator(`//a[normalize-space(.)='${index}']`);
  }
}
