import {APIRequestContext, test as baseTest, request} from "@playwright/test"
import CatApiConstants from "./CatApiConstant"

type ApiRequest = {
    apiRequest: APIRequestContext
  }

const test = baseTest.extend<ApiRequest> ({
    apiRequest: async ({}, use) => {
        const apiRequest = await request.newContext({
            baseURL: CatApiConstants.baseURL
        })
        await use(apiRequest)
        await apiRequest.dispose()
    }
})

export {test}