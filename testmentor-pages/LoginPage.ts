import {Locator, Page} from "@playwright/test";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
  private readonly txtUserName: Locator
  private readonly txtPassword: Locator
  private readonly chkRememberMe: Locator
  private readonly btnLogin: Locator
  private readonly lnkForgotPassword: Locator
  private readonly lnkReturnToHomepage: Locator
  private readonly captchaField: Locator
  private readonly iconVisualizePassword: Locator
  private readonly txtMathCaptcha: Locator
  private readonly messageLogoutField: Locator


  constructor(page: Page) {
    super(page);
    this.txtUserName = page.locator("#user_login");
    this.txtPassword = page.locator("#user_pass");
    this.chkRememberMe = page.locator("#rememberme");
    this.btnLogin = page.locator("#wp-submit");
    this.lnkForgotPassword = page.locator("#nav");
    this.lnkReturnToHomepage = page.locator("#backtoblog");
    this.captchaField = page.locator("//strong/parent::div");
    this.iconVisualizePassword = page.locator(".dashicons");
    this.txtMathCaptcha = page.locator("//input[@name='brute_num']");
    this.messageLogoutField = page.locator("#login-message");
  }

  public async calculateCaptcha(): Promise<string> {

    let captchaText = await this.captchaField.textContent()
    const pattern = new RegExp('(\\d+)\\s*\\+\\s*(\\d+)')
    let match = captchaText? pattern.exec(captchaText) : []
    if (match && match.length) {
      return (parseInt(match[1]) + parseInt(match[2])).toString()

    } else throw new Error("Captcha pattern is not matched")
  }

  public async inputUserName(username: string): Promise<void> {
    await this.txtUserName.fill(username)
  }

  public async inputPassword(password: string): Promise<void> {
    await this.txtPassword.fill(password)
  }

  public async clickOnLoginButton(): Promise<void> {
    await this.btnLogin.click();
  }

  public async inputCaptcha(captcha: string): Promise<void> {
    await this.txtMathCaptcha.fill(captcha);
  }

  public async messageLogOut(): Promise<string | null> {
    return this.messageLogoutField.textContent()
  }
}