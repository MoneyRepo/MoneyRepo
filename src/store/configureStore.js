// Reference
// [DEPRECATED] https://github.com/prescottprue/react-redux-firebase/blob/master/examples/complete/simple/src/store.js~
// https://github.com/prescottprue/react-redux-firebase/blob/v2.0.0-beta.5/examples/complete/material/src/store/createStore.js
import { createStore, compose, applyMiddleware } from 'redux'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import Config from '../constants/config' // includes Firebase and App config.
import firebase from 'firebase'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(initialState = {}, history) {
  // Middleware configuration
  const middleware = [thunk.withExtraArgument(getFirebase)]

  // Store enhancers is skipped for here for now
  const enhancers = []

  firebase.initializeApp(Config.firebase)

  // Store initialization
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      reactReduxFirebase(firebase, Config.reduxFirebase),
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  // Next few lines are not necessary for now
  // https://github.com/prescottprue/react-redux-firebase/blob/v2.0.0-beta.5/examples/complete/material/src/store/createStore.js#L48

  return store
}
