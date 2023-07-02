import BasePage from "./BasePage";
import HeaderMenu from "./components/HeaderMenu";
import {Locator, Page} from "@playwright/test";

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

  public async generateNewPassword(): Promise<string | null> {
    await this.btnGenerateNewPassword
    return await this.tbxNewPassword.textContent()
  }

  public async backupChangedPassword(changedPassword: string): Promise<string | null> {
    // Todo
    return null
  }

  public async submitUpdateProfile(): Promise<void> {
    await this.btnSubmitProfile.click()
  }

  public async logout(): Promise<void> {
    await this.btnLogout.click()
  }

  public async inputNewPassword(password: string): Promise<void> {
    await this.tbxNewPassword.fill(password)
  }

}