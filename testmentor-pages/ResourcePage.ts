import BasePage from "./BasePage";
import HeaderMenu from "./components/HeaderMenu";
import {Page} from "@playwright/test";

export default class ResourcePage extends BasePage{
  private readonly headerMenu: HeaderMenu

  constructor(page: Page) {
    super(page);
    this.headerMenu = new HeaderMenu(page);
  }

  public getHeaderMenu(): HeaderMenu {
    return this.headerMenu
  }

}