/** @module sure-array */

/**
 * @param {any} input
 * @return {any[]} An array, converted from the input if needed
 */
export default function (input) {
  if (Array.isArray(input)) {
    return input
  }
  if (input === undefined) {
    return []
  }
  return [input]
}