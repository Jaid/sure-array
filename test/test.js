import {expect, it} from "@jest/globals"
import path from "path"

const indexModule = require(process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src"))

/**
 * @type { import("../src") }
 */
const {default: sureArray} = indexModule

it("should run", () => {
  expect(sureArray()).toStrictEqual([])
  expect(sureArray(null)).toStrictEqual([null])
  expect(sureArray(0)).toStrictEqual([0])
  expect(sureArray([0])).toStrictEqual([0])
})