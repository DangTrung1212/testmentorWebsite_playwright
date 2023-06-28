import {expect, test} from "@playwright/test";
import LoginPage from "../../pages/login_page/LoginPage";

test.describe("Verify login functionality",() => {
  
  test("Verify login as dev", async ({page}) => {
    const loginPage: LoginPage = new LoginPage(page)

    await test.step("Navigate to login page", async () => {
      await page.goto("/wp-login.php")
    })

    await test.step("Input username and password", async () => {
      await loginPage.inputUserName("Dev")
      await loginPage.inputPassword("x7(I7NjTtcJSW1^ISjCbu(^k")
    })
    
    await test.step("Calculate captcha and click Login button", async () => {
      const captchaResult = await loginPage.calculateCaptcha()
      await loginPage.inputCaptcha(captchaResult)
      await loginPage.clickOnLoginButton()
    })

    await test.step("Assert that login successfully completed", async () => {
      expect(await page.locator("//li[@id='wp-admin-bar-my-account']/a").textContent()).toContain("Dev")
    })
  })
})