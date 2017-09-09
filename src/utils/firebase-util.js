import { APP_AUTH_KEY } from '../constants'
import { assertParams } from 'utils/assertion'
import { isArray } from 'lodash'
import { tryParseToNumber } from 'utils/try-parse-to-number'

// TODO:
// - Remove this util module if necessary

export const isAuthed = () => {
  return APP_AUTH_KEY in localStorage
}

export const getAuthInfo = () => {
  const authInfoStr = localStorage[APP_AUTH_KEY]

  if (authInfoStr === undefined) {
    return undefined
  }

  return JSON.parse(authInfoStr)
}

/**
 * Get a key for push a new data
 * https://firebase.google.com/docs/database/web/read-and-write#updating_or_deleting_data
 * @param {Object} firebase
 * @param {String} path
 */
export function getPushKey(firebase, path) {
  assertParams({
    firebase,
    path
  })
  return firebase
    .ref()
    .child(path)
    .push().key
}

/**
 * Query data with path from firebase
 * @param {FirebaseObject} firebase 
 * @param {String} path 
 * @param {Array} queryParams 
 * @return {Promise}
 */
export function queryData(firebase, path, queryParams) {
  assertParams({
    firebase,
    path
  })
  let query = firebase.ref().child(path)
  if (queryParams && isArray(queryParams)) {
    query = applyParamsToQuery(queryParams, query)
  }
  return query.once('value')
}

/**
 * Modify query to include methods based on query parameters (such as orderByChild)
 * https://github.com/prescottprue/react-redux-firebase/blob/7b8739a2894964ec74a9d4ba82a5aa39d1f0fe08/src/utils/query.js#L120
 * @param {Array} queryParams - Array of query parameters to apply to query
 * @param {Object} query - Query object on which to apply query parameters
 * @return {FirebaseQuery}
 */
export function applyParamsToQuery(queryParams, query) {
  let doNotParse = false
  if (queryParams) {
    queryParams.forEach(param => {
      param = param.split('=')
      switch (param[0]) {
        case 'orderByValue':
          query = query.orderByValue()
          doNotParse = true
          break
        case 'orderByPriority':
          query = query.orderByPriority()
          doNotParse = true
          break
        case 'orderByKey':
          query = query.orderByKey()
          doNotParse = true
          break
        case 'orderByChild':
          query = query.orderByChild(param[1])
          break
        case 'limitToFirst':
          query = query.limitToFirst(parseInt(param[1], 10))
          break
        case 'limitToLast':
          query = query.limitToLast(parseInt(param[1], 10))
          break
        case 'notParsed':
          doNotParse = true
          break
        case 'equalTo':
          let equalToParam = !doNotParse ? tryParseToNumber(param[1]) : param[1]
          equalToParam = equalToParam === 'null' ? null : equalToParam
          equalToParam = equalToParam === 'false' ? false : equalToParam
          equalToParam = equalToParam === 'true' ? true : equalToParam
          query =
            param.length === 3
              ? query.equalTo(equalToParam, param[2])
              : query.equalTo(equalToParam)
          break
        case 'startAt':
          let startAtParam = !doNotParse ? tryParseToNumber(param[1]) : param[1]
          startAtParam = startAtParam === 'null' ? null : startAtParam
          query =
            param.length === 3
              ? query.startAt(startAtParam, param[2])
              : query.startAt(startAtParam)
          break
        case 'endAt':
          let endAtParam = !doNotParse ? tryParseToNumber(param[1]) : param[1]
          endAtParam = endAtParam === 'null' ? null : endAtParam
          query =
            param.length === 3
              ? query.endAt(endAtParam, param[2])
              : query.endAt(endAtParam)
          break
        default:
      }
    })
  }

  return query
}
