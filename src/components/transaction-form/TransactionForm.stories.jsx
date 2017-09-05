import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
// import { TransactionType } from '../../constants/data-type'
import React from 'react'
import TransactionForm from './TransactionForm'

storiesOf('TransactionForm', module).add('default', () => {
  const dataIncome = {
    type: 'Income',
    date: new Date(),
    description: '',
    amount: '',
    balance: '',
    account: '',
    payer: ''
  }

  const dataExpense = {
    type: 'Expense',
    date: new Date(),
    description: '',
    amount: '',
    balance: '',
    account: '',
    payee: ''
  }

  const dataTransfer = {
    type: 'Transfer',
    date: new Date(),
    description: '',
    amount: '',
    balance: '',
    accountFrom: '',
    accountTo: ''
  }

  return (
    <div>
      <TransactionForm
        transactionData={dataExpense}
        onTypeChange={action('handleTypeChange')}
      />

      <TransactionForm
        transactionData={dataIncome}
        onTypeChange={action('handleTypeChange')}
      />

      <TransactionForm
        transactionData={dataTransfer}
        onTypeChange={action('handleTypeChange')}
      />
    </div>
  )
})
