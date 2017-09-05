import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { TransactionType } from '../../constants/data-type.js'
import React from 'react'
import TransactionIndicator from './TransactionIndicator'

storiesOf('TransactionIndicator', module)
  .add('default', () => (
    <div>
      <p>
        Static transaction indicator which only shows the current transaction
        type and do nothing.
      </p>
      {Object.keys(TransactionType).map(key => (
        <TransactionIndicator key={key} type={key} />
      ))}
    </div>
  ))
  .add('with interaction', () => {
    return (
      <div>
        <p>
          Interactive transaction indicator which update the current transaction
          type and invoke the callback function to pass the new transaction type
          to the parent component.
        </p>
        <p>See action logger for details.</p>

        {Object.keys(TransactionType).map(key => (
          <TransactionIndicator
            key={key}
            type={key}
            onTypeChange={action('onTypeChange')}
          />
        ))}
      </div>
    )
  })
