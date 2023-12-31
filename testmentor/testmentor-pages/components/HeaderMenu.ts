import BasePage from "../BasePage";
import {Locator, Page, request} from "@playwright/test";

export default class HeaderMenu extends BasePage {

  private readonly navHomePage
  private readonly navIntroduction
  private readonly navCourses
  private readonly navService
  private readonly navBlog
  private readonly navResources

  constructor(page: Page) {
    super(page);
    this.navHomePage = page.locator("//div[@class='swm-main-nav']//descendant::span[contains(text(), 'Trang chủ')]")
    this.navIntroduction = page.locator("//div[@class='swm-main-nav']//descendant::span[contains(text(), 'Giới thiệu')]")
    this.navCourses = page.locator("//div[@class='swm-main-nav']//descendant::span[contains(text(), 'Khoá học')]")
    this.navService = page.locator("//div[@class='swm-main-nav']//descendant::span[contains(text(), 'Dịch vụ')]")
    this.navBlog = page.locator("//div[@class='swm-main-nav']//descendant::span[contains(text(), 'Bài viết')]")
    this.navResources = page.locator("//div[@class='swm-main-nav']//descendant::span[contains(text(), 'Tài nguyên')]")
  }

  public async clickHomePageNav(): Promise<void> {
    await Promise.all([
      await this.navHomePage.click(),
      await this.page.waitForLoadState()
    ])
  }

  public async clickIntroductionNav(): Promise<void> {
    await Promise.all([
      await this.navIntroduction.click(),
      await this.page.waitForLoadState()
    ])
  }

  public async clickCoursesNav(): Promise<void> {
    await Promise.all([
      await this.navCourses.click(),
      await this.page.waitForLoadState()
    ])
  }

  public async clickServiceNav(): Promise<void> {
    await Promise.all([
      await this.navService.click(),
      await this.page.waitForLoadState()
    ])
  }

  public async clickBlogsNav(): Promise<void> {
    await Promise.all([
      await this.navBlog.click(),
      await this.page.waitForLoadState()
    ])
  }

  public async clickResourcesNav(): Promise<void> {
    await Promise.all([
      await this.navResources.click(),
      await this.page.waitForLoadState()
    ])
  }

  public clickAndGetTitle(locator: Locator): () => Promise<string> {
    return async () => {
      await Promise.all([
        await locator.click(),
        await this.page.waitForLoadState()
      ])
      const title = await this.page.title()
      return title
    }
  }

  public controlNavigate() {
    return [
       this.clickAndGetTitle(this.navHomePage),
       this.clickAndGetTitle(this.navIntroduction),
       this.clickAndGetTitle(this.navCourses),
       this.clickAndGetTitle(this.navService),
       this.clickAndGetTitle(this.navBlog),
       this.clickAndGetTitle(this.navResources),
    ]
  }
  // public async clickAndGetTitle(page: BasePage) {
  //   const map = {
  //
  //   }
  // }

}