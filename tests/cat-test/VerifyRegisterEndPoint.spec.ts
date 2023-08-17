import { expect } from '@playwright/test'
import { test } from '../../cat/BaseCatTest'
import { faker } from '@faker-js/faker'

const registerEndpoint = "/auth/register"

test.describe("Register endpoint test", () => {

  test("Verify register user ", async ({ apiService }) => {
    const user = { email: faker.internet.email(), password: "123456789" }
    const newUser = await apiService.registerUser(user)
    console.log("Technologies: " + newUser)
  })

  test("Verify register with existing user", async ({ apiService, apiRequest }) => {
    const user = { email: faker.internet.email(), password: "123456789" }
    await apiService.registerUser(user)
    let duplicateUser = user
    const response = await apiRequest.post(registerEndpoint, { data: duplicateUser })
    expect(response.status()).toBe(400)
    console.log("Response: " + await response.body())
  })
})