import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Main from '../src/pages/main/main'
import React from 'react'

const initialState = {}
const store = configureStore(initialState)

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  )
}
