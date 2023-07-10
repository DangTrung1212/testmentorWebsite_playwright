import { expect } from '@playwright/test'
import { test } from '../../cat/BaseCatTest'
import { faker } from '@faker-js/faker'

const registerEndpoint = "/auth/register"

test.describe("Register endpoint test", () => {
  const user = {
    email: faker.internet.email(),
    password: "123456789"
  }

  test("Verify register user ", async ({ apiRequest }) => {
    const user = {
      email: faker.internet.email(),
      password: "123456789"
    }

    const response = await apiRequest.post(registerEndpoint, {
      data: user
    })

    expect(response.status()).toBe(201)
    const newUser = await response.json()
    console.log("Technologies: " + JSON.stringify(newUser, null, 2))
  })

  test("Verify regisger with existing user", async ({ apiRequest }) => {
    const user = {
      email: faker.internet.email(),
      password: "123456789"
    }
    
    await apiRequest.post(registerEndpoint, {
      data: user
    })

    const response = await apiRequest.post(registerEndpoint, {
      data: user
    })

    expect(response.status()).toBe(500)

  })
})