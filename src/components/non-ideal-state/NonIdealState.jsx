import { NonIdealState } from '@blueprintjs/core'
import { injectGlobal } from 'styled-components'

injectGlobal`
.pt-non-ideal-state-title,
.pt-non-ideal-state-description {
  color: #bdbdbd;
}
`

// Find available props at link below,
// http://blueprintjs.com/docs/#core/components/non-ideal-state

export default NonIdealState
