import {expect} from "@playwright/test";
import {test} from "../../testmentor/testmentor-fixture/BaseTestmentorTest";
import BasePage from "../../testmentor/testmentor-pages/BasePage";

test.describe("Verify working of Header Menu", () => {

  test("Verify header menu redirect successfully when click on navigation",
    async ({
             page
             , homePage}) => {
      const expectedTitles: string[] = ["Trang chủ", "Giới thiệu", "Khoá học", "Dịch vụ", "Bài viết", "Tài nguyên"]
      let actualTitles: string[] = []

      await test.step("Navigate to home page", async () => {
        await page.goto("/")
      })

      await test.step("Click and collect title", async () => {
        const control = homePage.getHeaderMenu().controlNavigate()
        for (let func of control) {
          let title = await func()
          actualTitles.push(title)
        }
      })

      for (let i = 0; i < actualTitles.length; i++) {
        let isMatched = actualTitles[i].includes(expectedTitles[i])
        expect(isMatched, `Expected results ${expectedTitles} does not contain ${actualTitles}`).toBe(true)
      }
    })
})
