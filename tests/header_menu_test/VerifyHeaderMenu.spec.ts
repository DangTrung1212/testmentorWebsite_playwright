import {expect, test} from "@playwright/test";
import HomePage from "../../pages/home_page/HomePage";
import IntroductionPage from "../../pages/introduction_page/IntroductionPage";
import CoursePage from "../../pages/course_page/CoursePage";
import ServicePage from "../../pages/service-page/ServicePage";

test.describe("Verify working of Header Menu", () => {

  test("Verify header menu redirect successfully when click on navigation", async ({page}) => {
    const expectedTitles: string[] = ["Trang chủ", "Giới thiệu", "Khoá học", "Dịch vụ", "Bài viết", "Tài nguyên"]
    const actualTitles: string[] = []

    await test.step("Navigate to home page", async () => {
      await page.goto("/")
    })

    await test.step("Click on home page navigator and collect title", async () => {
      await new HomePage(page).getHeaderMenu().clickHomePageNav()
      actualTitles.push(await page.title())
    })

    await test.step("Click on introduction navigator and collect title", async () => {
      await new HomePage(page).getHeaderMenu().clickIntroductionNav()
      actualTitles.push(await page.title())
    })

    await test.step("Click on course navigator and collect title", async () => {
      await new IntroductionPage(page).getHeaderMenu().clickCoursesNav()
      actualTitles.push(await page.title())
    })

    await test.step("Click on service navigator and collect title", async () => {
      await new CoursePage(page).getHeaderMenu().clickServiceNav()
      actualTitles.push(await page.title())
    })

    await test.step("Click on Blog navigator and collect title", async () => {
      await new ServicePage(page).getHeaderMenu().clickBlogsNav()
      actualTitles.push(await page.title())
    })

    await test.step("Click on Blog navigator and collect title", async () => {
      await new HomePage(page).getHeaderMenu().clickResourcesNav()
      actualTitles.push(await page.title())
    })

    for (let i = 0; i < actualTitles.length; i++) {
      let isMatched = actualTitles[i].includes(actualTitles[i])
      expect(isMatched, `Expected ${actualTitles} does not contain ${actualTitles}`).toBe(true)
    }
  })
})