import {APIRequestContext, request} from "@playwright/test";
import {test as baseTest} from "@playwright/test";
import EmployeeConstant from "./EmployeeConstant";

type ApiRequest = {
  apiRequest: APIRequestContext
}

const test = baseTest.extend<ApiRequest>({
  apiRequest: async ({}, use) => {
    const apiRequest = await request.newContext({
      baseURL: EmployeeConstant.baseURl
    })
    await use(apiRequest)
    await apiRequest.dispose()
  }
})

export {test}