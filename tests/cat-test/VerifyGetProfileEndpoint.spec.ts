import {expect} from "@playwright/test";
import {test} from "../../cat/BaseCatTest";
import CatApiConstants from "../../cat/CatApiConstant";

test.describe("Get User Profile", () => {

  test("Verify get user profile endpoint", async ({apiService, apiRequest}) => {
    const validUser = {email: "test14@test.com", password: "Tesjng#@090111"}
    const token = await apiService.loginAndGetToken(validUser)
    const response = await apiRequest.get(CatApiConstants.userProfilePath, {
      headers: {Authorization: "Bearer " + token}
    })
    expect(response.ok()).toBe(true)
    console.log("Response" + await response.body())
  })
})