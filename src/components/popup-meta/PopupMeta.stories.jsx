import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import PopupMeta from './PopupMeta'
import React from 'react'

storiesOf('PopupMeta', module).add('default', () => {
  return <PopupMeta onDeleteClick={action('onDeleteClick')} />
})
