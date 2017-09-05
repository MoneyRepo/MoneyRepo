import { toMoneyFormat } from '../../utils/money-format'
import * as Styled from './Statistic.style'
import PropTypes from 'prop-types'
import React from 'react'

const Statistic = props => {
  const { data } = props

  const rows = data.map(row => {
    const { name, amount } = row

    return (
      <Styled.Row key={name}>
        <Styled.ColumnText>{name}</Styled.ColumnText>
        <Styled.ColumnFigure>{toMoneyFormat(amount)}</Styled.ColumnFigure>
      </Styled.Row>
    )
  })

  return <Styled.StatisticLayout>{rows}</Styled.StatisticLayout>
}

Statistic.propTypes = {
  data: PropTypes.array.isRequired
}

export default Statistic
