import {test} from "../../testmentor/testmentor-fixture/BaseTestmentorTest";
import WebStep from "../../testmentor/testmentor_step/WebStep";
import user from "../../test-data/user-data.json"
import {expect} from "@playwright/test";

const devUser = user["dev-user"]
test.describe("Verify Update Password", () => {
  test.beforeEach(async ({page, webStep, profilePage}) => {
    await page.goto("/wp-login.php")
    await webStep.login(devUser)
    expect(await profilePage.getAccountTitle()).toContain(devUser.username)
  })

  test("Verify Update Password with generate password button", async ({page, profilePage, webStep}) => {

    await test.step("Scroll and click to generate new password", async () => {
      devUser.updatedPassword = await profilePage.generateNewPassword()
      console.log(devUser);

    })

    await test.step("Write File to backup user data", async () => {
      await profilePage.backupUserDataFile(user)
    })

    await test.step("Click update Profile and log out", async () => {
      await profilePage.submitUpdateProfile()
    })

    await test.step("Click update Profile and log out", async () => {
      await profilePage.logout()
    })

    await test.step("Login with new password and verify login successfully", async () => {
      const {username, updatedPassword: password} = devUser
      await webStep.login({username, password})
      expect(await profilePage.getAccountTitle()).toContain(devUser.username)
    })

    await test.step("Reset to old password", async () => {
      await profilePage.inputNewPassword(devUser.password)
      await profilePage.submitUpdateProfile()
    })
  })
})