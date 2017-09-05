import { Spinner } from '@blueprintjs/core'
import React from 'react'

const MRSpinner = props => {
  const intent = 0
  // All available value for `intent`
  // https://github.com/palantir/blueprint/blob/master/packages/core/src/common/intent.ts

  return <Spinner className="pt-small" intent={intent} />
}

export default MRSpinner
