import BasePage from "./BasePage";
import HeaderMenu from "./components/HeaderMenu";
import {expect, Locator, Page, selectors} from "@playwright/test";
import DataHelper from "../../helpers/DataHelper";

export default class ProfilePage extends BasePage {

  private readonly ttlAccountName: Locator
  private readonly btnGenerateNewPassword: Locator
  private readonly tbxNewPassword: Locator
  private readonly btnSubmitProfile: Locator
  private readonly btnLogout: Locator
  private readonly txtMessage: Locator

  constructor(page: Page) {
    super(page)
    this.ttlAccountName = page.locator("//li[@id='wp-admin-bar-my-account']/a")
    this.btnGenerateNewPassword = page.locator("//button[contains(@class,'wp-generate-pw')]")
    this.tbxNewPassword = page.locator("#pass1")
    this.btnSubmitProfile = page.locator("#submit")
    this.btnLogout = page.locator("//li[contains(@id,'logout')]/a[contains(@href,'logout')]")
    this.txtMessage = page.locator("#message")
  }

  public async getAccountTitle(): Promise<string | null> {
    return await this.ttlAccountName.textContent()
  }

  public async generateNewPassword(): Promise<any> {
    await this.btnGenerateNewPassword.scrollIntoViewIfNeeded()
    await this.page.waitForLoadState("domcontentloaded")
    await this.btnGenerateNewPassword.click()
    await expect(this.tbxNewPassword).toBeFocused()
    const newPassword = await this.tbxNewPassword.getAttribute("data-pw")
    return newPassword
  }

  public async backupUserDataFile(user: any): Promise<void> {
    DataHelper.writeJsonfileFromObj("./test-data/user-data.json", user)
  }

  public async submitUpdateProfile(): Promise<void> {
    await Promise.all(
      [
        this.btnSubmitProfile.click(),
        this.page.waitForLoadState("domcontentloaded")
      ])
  }

  public async logout(): Promise<void> {
    await this.ttlAccountName.hover()
    await this.btnLogout.click()
  }

  public async inputNewPassword(password: string): Promise<void> {
    await this.btnGenerateNewPassword.scrollIntoViewIfNeeded()
    await this.page.waitForLoadState("domcontentloaded")
    await this.btnGenerateNewPassword.click()
    await this.tbxNewPassword.fill(password)
  }

}