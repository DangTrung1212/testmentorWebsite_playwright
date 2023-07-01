import {test as baseTest} from "@playwright/test"
import LoginPage from "./login_page/LoginPage";
import ResourcePage from "./resourse_page/ResourcePage";
import ServicePage from "./service-page/ServicePage";
import IntroductionPage from "./introduction_page/IntroductionPage";
import HomePage from "./home_page/HomePage";
import CoursePage from "./course_page/CoursePage";
import BlogPage from "./blog_page/BlogPage";

type Pages = {
  loginPage: LoginPage,
  resourcesPage: ResourcePage,
  servicePage: ServicePage,
  introductionPage: IntroductionPage;
  homePage: HomePage,
  coursePage: CoursePage,
  blogPage: BlogPage
}

export const test = baseTest.extend<Pages>({
  loginPage: async ({page}, use) => {
    const loginPage = new LoginPage(page)
    await use(loginPage)
  },

  resourcesPage: async ({page}, use) => {
    const resourcesPage = new ResourcePage(page)
    await use(resourcesPage)
  },

  servicePage: async ({page}, use) => {
    const servicePage = new ServicePage(page)
    await use(servicePage)
  },

  introductionPage: async ({page}, use) => {
    const introductionPage = new IntroductionPage(page)
    await use(introductionPage)
  },

  homePage: async ({page}, use) => {
    const homePage = new HomePage(page)
    await use(homePage)
  },

  coursePage: async ({page}, use) => {
    const coursePage = new CoursePage(page)
    await use(coursePage)
  },

  blogPage: async ({page}, use) => {
    const blogPage = new BlogPage(page)
    await use(blogPage)
  }
})