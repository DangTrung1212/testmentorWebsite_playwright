import {test} from "../../employee/BaseEmployyeTest";
import {expect} from "@playwright/test";
import {faker} from "@faker-js/faker";

const header = {
  "Authorization": "Basic d2ViX2FwcDpjaGFuZ2VpdA==",
  "Content-Type": "application/json"
}
const employeeData = {
  employee_name: faker.person.fullName(),
  employee_salary: faker.number.int({max: 10000}).toString(),
  employee_age: faker.number.int({max: 10000}).toString()
}

const updateEmployeeData = {
  employee_name: faker.person.fullName(),
  employee_salary: faker.number.int({max: 10000}).toString(),
  employee_age: faker.number.int({max: 10000}).toString()
}

test.describe("Verify CRUD employee", () => {
  test("Verify create employee", async ({apiRequest}) => {
    let id: string
    await test.step("Create employee data", async () => {
      const response = await apiRequest.post("/api/v1/employees", {
        data: employeeData,
        headers: header
      })
      const employee = await response.json()
      console.log("employee ", employee)
    })

    await test.step("Get all employees data", async () => {
      const response = await apiRequest.get("/api/v1/employees", {
        headers: header
      })
      const employees = await response.json()
      console.log("employee list: ", JSON.stringify(employees, null, 2))

      let indexOfLast: number
      if (employees && employees.length) {
        indexOfLast = employees.length - 1
        expect(employees[indexOfLast].employee_name).toBe(employeeData.employee_name)
        id = employees[indexOfLast].id
      }
    })

    await test.step("Update employee", async  () => {
      const updateEmployee = {
        id, ...updateEmployeeData
      }
      const response = await apiRequest.put("/api/v1/employees", {
        data: updateEmployee,
        headers: header
      })
      console.log(await response.json())
    })

  })
})
// Todo: need to create employee object
