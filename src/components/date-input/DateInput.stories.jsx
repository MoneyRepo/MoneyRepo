import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import DateInput from './DateInput'
import React from 'react'

storiesOf('DateInput', module).add('default', () => {
  return (
    <div>
      <p>default dateFormatRule prop is "MMMM Do YYYY, h:mm:ss a"</p>
      <DateInput value={new Date()} onChange={action('datetime change')} />
      <br />
      <br />
      <br />
      <p>dateFormatRule="YYYY MM DD"</p>
      <DateInput
        value={new Date()}
        dateFormatRule="YYYY MMMM DD"
        onChange={action('datetime change')}
      />
    </div>
  )
})
