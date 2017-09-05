import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import PopupRepository from './PopupRepository'
import React from 'react'

storiesOf('PopupRepository', module).add('default', () => {
  return <PopupRepository onNewAccountClick={action('onNewAccountClick')} />
})
