import React from 'react'
import { storiesOf } from '@storybook/react'

import NonIdealState from './NonIdealState'

storiesOf('NonIdealState', module).add('default', () => {
  return (
    <NonIdealState
      description="Create a new transaction to populate the repository"
      title="No Transaction"
    />
  )
})
