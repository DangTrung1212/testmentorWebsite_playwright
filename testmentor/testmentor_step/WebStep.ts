import LoginPage from "../testmentor-pages/LoginPage";
import {Pages} from "../testmentor-fixture/BaseTestmentorTest";
import ProfilePage from "../testmentor-pages/ProfilePage";

export default class WebStep {
  private loginPage: LoginPage
  private profilePage: ProfilePage

  constructor(pages: Pages) {
    this.loginPage = pages.loginPage;
    this.profilePage = pages.profilePage
  }

  public async login(user: any) {
    await this.loginPage.inputUsername(user.username)
    await this.loginPage.inputPassword(user.password)
    const captchaResult = await this.loginPage.calculateCaptcha()
    await this.loginPage.inputCaptcha(captchaResult)
    await this.loginPage.clickOnLoginButton()
  }

  public async logout() {
    await this.profilePage.logout()
  }
}