import {expect} from "@playwright/test";
import {test} from "../../testmentor/testmentor-fixture/BaseTestmentorTest";

test.describe("Verify working of Header Menu", () => {

  test("Verify header menu redirect successfully when click on navigation",
    async ({
             page
             , homePage
             , introductionPage
             , coursePage
             , servicePage
             , blogPage}) => {
      const expectedTitles: string[] = ["Trang chủ", "Giới thiệu", "Khoá học", "Dịch vụ", "Bài viết", "Tài nguyên"]
      const actualTitles: string[] = []

      await test.step("Navigate to home page", async () => {
        await page.goto("/")
      })

      await test.step("Click on home page navigator and collect title", async () => {
        await homePage.getHeaderMenu().clickHomePageNav()
        actualTitles.push(await page.title())
      })

      await test.step("Click on introduction navigator and collect title", async () => {
        await homePage.getHeaderMenu().clickIntroductionNav()
        actualTitles.push(await page.title())
      })

      await test.step("Click on course navigator and collect title", async () => {
        await introductionPage.getHeaderMenu().clickCoursesNav()
        actualTitles.push(await page.title())
      })

      await test.step("Click on service navigator and collect title", async () => {
        await coursePage.getHeaderMenu().clickServiceNav()
        actualTitles.push(await page.title())
      })

      await test.step("Click on Blog navigator and collect title", async () => {
        await servicePage.getHeaderMenu().clickBlogsNav()
        actualTitles.push(await page.title())
      })

      await test.step("Click on Resource navigator and collect title", async () => {
        await blogPage.getHeaderMenu().clickResourcesNav()
        actualTitles.push(await page.title())
      })

      for (let i = 0; i < actualTitles.length; i++) {
        let isMatched = actualTitles[i].includes(expectedTitles[i])
        expect(isMatched, `Expected results ${expectedTitles} does not contain ${actualTitles}`).toBe(true)
      }
    })
})