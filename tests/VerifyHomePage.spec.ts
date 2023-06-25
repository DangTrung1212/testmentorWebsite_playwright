import {expect, test} from "@playwright/test"
import HomePage from "../pages/HomePage";


test("Verify Zalo icon in home page", async ({page}) => {
  const homePage: HomePage = new HomePage(page)
  const expectedZaloURL: string = "https://zalo.me/0915333030"

  await test.step("Navigate to home page and verify page and zalo icon", async () => {
    await page.goto("/")
    await expect(homePage.isTitleImgDisplayed()).resolves.toBe(true)
    await expect(homePage.isZaloIconDisplayed()).resolves.toBe(true)
  })

  await test.step("Click on Zalo and verify redirecting of the page", async () => {
    await homePage.clickOnZaloIcon()
    await expect(page).toHaveURL(expectedZaloURL)
  })
})

test("Verify Search Functionality works correctly", async ({page}) => {
  const keySearch = "Căn bản về Database"
  const expectedTitle = "Trang chủ - Test Mentor"
  const homePage: HomePage = new HomePage(page)

  await test.step("Navigate to home page then verify it is loaded by title", async () => {
    await page.goto("/")
    await expect(homePage.getTitleOfHomePage()).resolves.toBe(expectedTitle)
  })

  await test.step("Click on Search button and verify visibility by search box", async () => {
    await expect(homePage.clickSearchAndCheckSearchBox()).resolves.toBe(true)
  })

  await test.step("Input search keywords and check search results", async () => {
    await homePage.inputSearchContent(keySearch)
    await homePage.clickOnSearchSubmitButton()
    await expect(homePage.verifySearchResultIsDisplayedSuccess()).resolves.toBe(true)
  })
})

test("Verify scrollbar work correctly in home page", async ({page}) =>{
  const homePage = new HomePage(page)
  await test.step("Navigate to home page", async () => {
    await page.goto("/")
  })

  await test.step("Verify scroll up button is hide", async () => {
    await expect(homePage.isScrollUpButtonDisplayed()).resolves.toBe(false)
  })

  await test.step("Verify scroll up button is display when scroll below", async () => {
    await homePage.scrollToBelowElement()
    await expect(homePage.isScrollUpButtonDisplayed()).resolves.toBe(true)
  })

  await test.step("Verify scroll up button work properly", async () => {
    await homePage.clickOnScrollToTopButton()
    await expect(homePage.isScrollUpButtonDisplayed()).resolves.toBe(true)
  })
})

