import fs from "fs"

export default class DataHelper {
  public static writeJsonfileFromObj(path: string, obj: object) {
    try {
      fs.writeFileSync(path, JSON.stringify(obj))
    } catch (e) {
      console.error("ERR when write file", e)
    }
  }
}