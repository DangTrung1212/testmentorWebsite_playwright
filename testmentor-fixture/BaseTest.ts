import {test as baseTest} from "@playwright/test"
import LoginPage from "../testmentor-pages/LoginPage";
import ResourcePage from "../testmentor-pages/ResourcePage";
import ServicePage from "../testmentor-pages/ServicePage";
import IntroductionPage from "../testmentor-pages/IntroductionPage";
import HomePage from "../testmentor-pages/HomePage";
import CoursePage from "../testmentor-pages/CoursePage";
import BlogPage from "../testmentor-pages/BlogPage";
import ProfilePage from "../testmentor-pages/ProfilePage";
import WebStep from "../testmentor_step/WebStep";

export type Pages = {
  loginPage: LoginPage,
  resourcesPage: ResourcePage,
  servicePage: ServicePage,
  introductionPage: IntroductionPage;
  homePage: HomePage,
  coursePage: CoursePage,
  blogPage: BlogPage,
  profilePage: ProfilePage
}

export const test = baseTest.extend<Pages & { pages: Pages, webStep: WebStep }>({
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
    },

    profilePage: async ({page}, use) => {
      const profilePage = new ProfilePage(page)
      await use(profilePage)
    },
    pages: async (
      {
        homePage,
        loginPage,
        profilePage,
        resourcesPage,
        servicePage,
        introductionPage,
        coursePage,
        blogPage
      }, use) => {
      const pages = {
        homePage,
        loginPage,
        profilePage,
        resourcesPage,
        servicePage,
        introductionPage,
        coursePage,
        blogPage
      }
      await use(pages)
    },
    webStep : async ({pages}, use) => {
      const webStep = new WebStep(pages)
      use(webStep)
     }
  }
)
