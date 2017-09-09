export function tryParseToNumber(value) {
  const result = Number(value)
  if (isNaN(result)) {
    return value
  }
  return result
}
