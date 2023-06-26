import BasePage from "../BasePage";
import HeaderMenu from "../components/HeaderMenu";

export default class ResourcesPage extends BasePage{
  private readonly headerMenu: HeaderMenu

  constructor(page) {
    super(page);
    this.headerMenu = new HeaderMenu(page);
  }

  public getHeaderMenu(): HeaderMenu {
    return this.headerMenu
  }

}