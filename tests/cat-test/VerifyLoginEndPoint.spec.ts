import { expect } from '@playwright/test'
import { test } from '../../cat/BaseCatTest'
import CatApiConstant from '../../cat/CatApiConstant'


test.describe("Login endpoint test", () => {

  test("Verify login with valid user", async ({ apiRequest }) => {
    const user = { email: "test14@test.com", password: "Tesjng#@090111" }
    const response = await apiRequest.post(CatApiConstant.loginPath, { data: user })
    expect(response.status()).toBe(201)
    console.log("Response: " + await response.body())
  })

  test("Verify login with wrong password", async ({ apiRequest }) => {
    const user = { email: "test14@test.com", password: "wrong_password" }
    const response = await apiRequest.post(CatApiConstant.loginPath, { data: user })
    expect(response.status()).toBe(400)
    console.log("Response: " + await response.body())
  })

  test("Verify login with wrong email", async ({ apiRequest }) => {
    const user = { email: "wrongemail@gmail.com", password: "Tesjng#@090111" }
    const response = await apiRequest.post(CatApiConstant.loginPath, { data: user })
    expect(response.status()).toBe(400)
    console.log("Response: " + await response.body())
  })
})

