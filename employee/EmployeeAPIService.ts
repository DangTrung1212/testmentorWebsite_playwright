import {APIRequestContext, expect} from "@playwright/test";

export default class EmployeeAPIService {
  private apiRequest: APIRequestContext
  private readonly headers = {
    "Authorization": "Basic d2ViX2FwcDpjaGFuZ2VpdA==",
    "Content-Type": "application/json"
  }

  constructor(apiRequest: APIRequestContext) {
    this.apiRequest = apiRequest;
  }

  async getEmployees(): Promise<Object[]> {
    const response = await this.apiRequest.get("/api/employees", {
      headers: this.headers
    })
    expect(response.status()).toEqual(200)
    return await response.json()
  }

  async createNewEmployee(employeeData: any): Promise<void> {
    const response = await this.apiRequest.post("/api/employees", {
      headers: this.headers,
      data: employeeData
    })
    expect(response.status()).toBe(200)
  }

  async updateEmployee(id: string, employeeData: any): Promise<void> {
    const response = await this.apiRequest.post(`/api/employees/${id}`, {
      headers: this.headers,
      data: {id, ...employeeData}
    })
    expect(response.status()).toBe(200)
  }


}