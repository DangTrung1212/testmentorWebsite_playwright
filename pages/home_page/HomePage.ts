import {Locator, Page} from "@playwright/test";
import BasePage from "../BasePage";
import HeaderMenu from "../components/HeaderMenu";

export default class HomePage extends BasePage {

  private readonly headerMenu: HeaderMenu
  private readonly btnSearch: Locator
  private readonly boxSearch: Locator
  private readonly txtSearch: Locator
  private readonly btnSubmitSearch: Locator
  private readonly lblSearchResult: Locator
  private readonly lblTitleResult: Locator
  private readonly iconZalo: Locator
  private readonly imgPageTitle: Locator
  private readonly iconScrollUp: Locator
  private readonly checkedMoveEle: Locator

  constructor(page: Page) {

    super(page)
    this.headerMenu = new HeaderMenu(page)

    this.btnSearch = page.locator("//div[@class='swm-header-search']");
    this.boxSearch = page.locator("//div[@class='swm_overlay_search_box']")
    this.txtSearch = page.locator("[name='s']")
    this.btnSubmitSearch = page.locator("//button[@type='submit']")
    this.lblSearchResult = page.locator("//div[@class='swm-search-page-text']")
    this.lblTitleResult = page.locator("//a[contains(text(),'Căn bản về Database')]")
    this.iconZalo = page.locator(".call-now-button")
    this.imgPageTitle = page.locator("a[title='Test Mentor']")
    this.iconScrollUp = page.locator(".swm-go-top-scroll-btn-wrap")
    this.checkedMoveEle = page.locator("//span[.='Điện thoại tư vấn lớp học']")
  }

  public async clickSearchAndCheckSearchBox(): Promise<boolean> {
    await this.btnSearch.click()
    return await this.boxSearch.isVisible()
  }

  public async inputSearchContent(keySearch: string): Promise<void> {
    await this.txtSearch.type(keySearch)
  }

  public async clickOnSearchSubmitButton(): Promise<void> {
    await this.btnSubmitSearch.click()
    await this.page.waitForLoadState()
  }

  public async verifySearchResultIsDisplayedSuccess(): Promise<boolean> {
    return await this.lblTitleResult.isVisible()
  }

  public async isTitleImgDisplayed(): Promise<boolean> {
    return await this.imgPageTitle.isVisible()
  }

  public async clickOnZaloIcon(): Promise<void> {
    await this.iconZalo.click()
  }

  public async isZaloIconDisplayed(): Promise<boolean> {
    return await this.iconZalo.isVisible()
  }

  public async scrollToBelowElement(): Promise<void> {
    await Promise.all([
      await this.checkedMoveEle.scrollIntoViewIfNeeded(),
      await this.iconScrollUp.waitFor()])
  }

  public async isScrollUpButtonDisplayed(): Promise<boolean> {
    return await this.iconScrollUp.isVisible()
  }

  public async clickOnScrollToTopButton(): Promise<void> {
    await this.iconScrollUp.click()
  }

  public async getTitleOfHomePage(): Promise<string> {
    return this.page.title()
  }

  public getHeaderMenu(): HeaderMenu {
    return this.headerMenu
  }
}