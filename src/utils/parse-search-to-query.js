/**
 * Parse query string to query object
 * @param {String} - full URL with query string
 */
export function parseSearchToQuery(search) {
  // Throw an error if `search` does NOT contains a `?` in it
  if (search && !/^\?/.test(search)) {
    throw Error(`Argument ${search} is not a proper url search string`)
  }

  const queryObj = {}
  const queryString = (search || window.location.search).replace('?', '')
  const queryArr = queryString.split('&')

  queryArr.forEach(keyValuePair => {
    const strArr = keyValuePair.split('=')
    queryObj[strArr[0]] = strArr[1]
  })

  return queryObj
}
