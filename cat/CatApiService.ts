import { APIRequestContext, expect } from "@playwright/test"
import CatApiConstants from "./CatApiConstant"

export default class CatApiService {
    private apiRequest: APIRequestContext

    constructor(apiRequest: APIRequestContext) {
        this.apiRequest = apiRequest
    }

    public async registerUser(user: Object): Promise<any> {
        const response = await this.apiRequest.post(CatApiConstants.registerPath, {
            data: user
        })
        expect(response.status()).toBe(201)
        return await response.body()
    }

    public async loginAndGetToken(user: { email: string, password: string }): Promise<string> {
        const response = await this.apiRequest.post(CatApiConstants.loginPath, {
            data: user
        })

        expect(response.status()).toBe(201)

        return response.json().then(body => body.token)
    }
}