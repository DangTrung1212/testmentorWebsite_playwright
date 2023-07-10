import {expect} from "@playwright/test";
import {test} from "../../testmentor/testmentor-fixture/BaseTestmentorTest";
import * as user from "../../test-data/user-data.json"

const devUser = user["dev-user"]

test.describe("Verify login functionality", () => {

  test("Verify login as dev", async ({page, loginPage, profilePage}) => {

    await test.step("Navigate to login page", async () => {
      await page.goto("/wp-login.php")
    })

    await test.step("Input username and password", async () => {
      await loginPage.inputUsername(devUser.username)
      await loginPage.inputPassword(devUser.password)
    })

    await test.step("Calculate captcha and click Login button", async () => {
      const captchaResult = await loginPage.calculateCaptcha()
      await loginPage.inputCaptcha(captchaResult)
      await loginPage.clickOnLoginButton()
    })

    await test.step("Assert that login successfully completed", async () => {
      expect(await profilePage.getAccountTitle()).toContain(devUser.username)
    })
  })
})