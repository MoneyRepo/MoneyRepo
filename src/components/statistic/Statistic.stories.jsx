import { storiesOf } from '@storybook/react'
import React from 'react'
import Statistic from './Statistic'

storiesOf('Statistics', module).add('default', () => {
  const statisticData = [
    {
      name: 'Net Worth',
      amount: 1000
    },
    {
      name: 'Budgeted',
      amount: 100
    },
    {
      name: 'Used',
      amount: 100
    },
    {
      name: 'Remaining',
      amount: 0
    }
  ]

  return (
    <div>
      <pre>{JSON.stringify(statisticData, null, 2)}</pre>
      <Statistic data={statisticData} />
    </div>
  )
})
