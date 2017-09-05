import { storiesOf } from '@storybook/react'
// import { TransactionType } from '../../constants/data-type.js'
import React from 'react'
import Transaction from './Transaction'

storiesOf('Transaction', module).add('default', () => {
  const transactionData = {
    type: 'Income',
    date: new Date(),
    description: 'Sample transaction description',
    amount: 99999999.99,
    balance: 99999999.99
  }

  return (
    <div>
      <Transaction transactionData={transactionData} />
      <Transaction transactionData={transactionData} active={true} />
    </div>
  )
})
