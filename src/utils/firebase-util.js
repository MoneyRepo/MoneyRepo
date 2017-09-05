import { APP_AUTH_KEY } from '../constants'

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
