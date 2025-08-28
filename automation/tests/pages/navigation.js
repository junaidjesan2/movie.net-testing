import Navigation from "../objects/navigation";

export default class HeaderPaths {
  constructor(page) {
    this.page = page;
    this.objects=new Navigation(page);
  }

  async AllMovies(){
    await this.objects.movies.click();
  }
}