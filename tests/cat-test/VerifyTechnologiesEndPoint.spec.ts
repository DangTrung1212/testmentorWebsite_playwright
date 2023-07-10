import {expect} from '@playwright/test'
import {test} from '../../cat/BaseCatTest'

const technologiesEndpoint = "/technologies/sangbui.com"

test.describe("Technologies endpoint test", () => {

  test("Verify get technologies data", async ({apiRequest}) => {
    const response = await apiRequest.get(technologiesEndpoint)
    expect(response.status()).toBe(200)
    const technologies = await response.json()
    console.log("Technologies: " + JSON.stringify(technologies, null, 2))
  })
})