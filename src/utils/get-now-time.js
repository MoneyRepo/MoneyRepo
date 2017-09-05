/**
 * get now time info
 * @return {Object} {date, timestamp}
 */
export function getNowTime() {
  const date = new Date()
  const timestamp = date.getTime()
  return {
    date,
    timestamp
  }
}
