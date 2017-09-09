import { toMoneyFormat } from '../../utils/money-format.js'
import * as Styled from './Transaction.style'
import moment from 'moment'
// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TransactionIndicator from '../transaction-indicator/TransactionIndicator'
import { Hotkey, Hotkeys, HotkeysTarget } from '@blueprintjs/core'

// const DOUBLE_CLICK_DELAY = 200

class Transaction extends Component {
  handleClick = () => {
    const { handleClick, transactionId } = this.props
    handleClick && handleClick(transactionId)
  }

  handleDoubleClick = () => {
    const { handleDoubleClick, transactionId } = this.props
    handleDoubleClick && handleDoubleClick(transactionId)
  }

  handleDelete = e => {
    const { active, handleDeleteTransaction, transactionId } = this.props
    if (active && handleDeleteTransaction) {
      handleDeleteTransaction(transactionId)
    }
  }

  render() {
    const {
      transactionData: { type, date, description, amount, balance },
      active,
      className
    } = this.props

    const datetimeValue = moment(date).format('DD MMM')
    return (
      <Styled.TransactionLayout
        active={active}
        onClick={this.handleClick}
        className={className}
        onDoubleClick={this.handleDoubleClick}
      >
        <TransactionIndicator type={type} />

        {/* Hover to show detailed DateTime in UTC format */}
        <Styled.DateTime>{datetimeValue}</Styled.DateTime>

        {/* Description has a length limit */}
        <Styled.Description>{description}</Styled.Description>

        <Styled.FigureContainer>
          <Styled.Amount>{toMoneyFormat(amount)}</Styled.Amount>

          <Styled.Balance>{toMoneyFormat(balance)}</Styled.Balance>
        </Styled.FigureContainer>
      </Styled.TransactionLayout>
    )
  }

  renderHotkeys() {
    const { transactionId } = this.props
    return (
      <Hotkeys>
        <Hotkey
          group="delete"
          combo="del"
          label={`${transactionId}-del`}
          onKeyDown={this.handleDelete}
        />
        <Hotkey
          group="delete"
          combo="esc"
          label={`${transactionId}-esc`}
          onKeyDown={this.handleDelete}
        />
      </Hotkeys>
    )
  }
}

export default HotkeysTarget(Transaction)
