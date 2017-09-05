export function toMoneyFormat(num) {
  return parseFloat(Math.round(num * 100) / 100).toFixed(2)
}
