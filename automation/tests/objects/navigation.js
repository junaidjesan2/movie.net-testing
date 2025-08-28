export default class Navigation {
  constructor(page) {
    this.page = page;
    this.movies = page.locator("//a[@href='/movies']");
  }
}

