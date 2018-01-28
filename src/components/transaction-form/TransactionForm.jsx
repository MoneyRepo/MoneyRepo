import * as Styled from './TransactionForm.style'
import DateInput from '../date-input/DateInput'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TransactionIndicator from '../transaction-indicator/TransactionIndicator'
import { TransactionType } from '../../constants/data-type'
import onClickOutside from 'react-onclickoutside'

class TransactionForm extends Component {
  static PropTypes = {
    transactionData: PropTypes.object.isRequired,
    onTypeChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    const { transactionData } = props

    this.state = {
      transactionData
    }
  }

  componentWillReceiveProps(nextProps) {
    const { transactionData } = this.state

    this.setState({
      transactionData: {
        ...transactionData,
        ...nextProps.transactionData
      }
    })
  }

  handleDatetimePickerChange = (date, hasUserManuallySelectedDate) => {
    if (hasUserManuallySelectedDate) {
      const { transactionData } = this.state
      this.setState({
        transactionData: {
          ...transactionData,
          date: date.getTime()
        }
      })
    }
  }

  handleTransactionTypeChange = transactionType => {
    const { onTypeChange } = this.props
    const { transactionData } = this.state

    this.setState({
      transactionData: {
        ...transactionData,
        type: transactionType
      }
    })
    onTypeChange && onTypeChange(transactionType)
  }

  handleInputChange = (key, value) => {
    const { transactionData } = this.state
    this.setState({
      transactionData: {
        ...transactionData,
        [key]: value
      }
    })
  }

  handleClickOutside = () => {
    this.saveTransactionData()
  }

  saveTransactionData = () => {
    const { transactionData } = this.state
    const { handleUpdateTransaction, transactionId } = this.props
    const { type } = transactionData
    if (!TransactionType[type]) {
      window.alert('Error occurred while creating transaction')
    }
    let valueRule = [
      {
        name: 'amount',
        isRequired: true
      },
      ...TransactionType[type].inputGroup
    ]
    for (let i in valueRule) {
      const { name, isRequired } = valueRule[i]
      if (isRequired && transactionData[name] === '') {
        return
      }
    }
    handleUpdateTransaction &&
      handleUpdateTransaction(transactionData, transactionId)
  }

  render() {
    const { transactionData } = this.state
    const { type, date, amount } = transactionData

    const groupElm = TransactionType[type]
      ? TransactionType[type].inputGroup.map((inputInfo, idx) => {
          const { name, placeholder, isRequired } = inputInfo
          return (
            <Styled.Row key={idx}>
              <Styled.TextInput
                name={name}
                isRequired={isRequired}
                placeholder={placeholder}
                value={transactionData[name]}
                onChange={this.handleInputChange}
              />
            </Styled.Row>
          )
        })
      : null

    return (
      <Styled.TransactionFormLayout>
        <Styled.Row>
          <TransactionIndicator
            type={type}
            onTypeChange={this.handleTransactionTypeChange}
          />
          <Styled.TextInput
            style={{ margin: '0 0 10px 20px' }}
            placeholder="Amount＊"
            value={amount}
            name={'amount'}
            isRequired={true}
            onChange={this.handleInputChange}
          />
        </Styled.Row>

        {groupElm}

        <Styled.Row>
          <Styled.DateTimeWrap>
            <DateInput
              value={date}
              dateFormatRule="MMMM Do YYYY"
              onChange={this.handleDatetimePickerChange}
            />
          </Styled.DateTimeWrap>
        </Styled.Row>
      </Styled.TransactionFormLayout>
    )
  }
}

export default onClickOutside(TransactionForm)
