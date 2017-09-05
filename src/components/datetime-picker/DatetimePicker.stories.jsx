import React from 'react'
import { storiesOf } from '@storybook/react'

import DateTimePicker from './DatetimePicker'

storiesOf('DatetimePicker', module).add('default', () => {
  return (
    <div style={{ width: '230px' }} className="pt-dark">
      <DateTimePicker />
    </div>
  )
})
