import {APIRequestContext, test as baseTest, request} from "@playwright/test"
import CatApiConstants from "./CatApiConstant"
import CatApiService from "./CatApiService"

export type ApiRequest = {
    apiRequest: APIRequestContext
  }

const test = baseTest.extend<ApiRequest & {apiService: CatApiService}> ({
    apiRequest: async ({}, use) => {
        const apiRequest = await request.newContext({
            baseURL: CatApiConstants.baseURL
        })
        await use(apiRequest)
        await apiRequest.dispose()
    },
    
    apiService: async ({apiRequest}, use) => { 
        const apiService = new CatApiService(apiRequest)
        await use(apiService)
    }
})

export {test}