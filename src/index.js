import { injectGlobal } from 'styled-components'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

/*eslint-disable no-unused-expressions */
injectGlobal`
@import url(https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Material+Icons);

html,
body {
  margin: 0;
  padding: 0;
  min-width: 1000px;
  font-family: 'Roboto Mono', monospace;
  box-sizing: border-box;
  font-size: 12px;
  user-select: none;
  overflow-y: hidden;
  cursor: default;
}
`

ReactDOM.render(<App />, document.getElementById('root'))
