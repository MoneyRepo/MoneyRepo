import * as Styled from './TransactionInput.style'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class TransactionInput extends Component {
  static PropTypes = {
    name: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
  }

  state = {
    isFocus: false
  }

  handleBlur = () => {
    this.setState({
      isFocus: false
    })
  }

  handleFocus = () => {
    this.setState({
      isFocus: true
    })
  }

  handleChange = e => {
    const { onChange, name } = this.props
    const { value } = e.currentTarget
    onChange && onChange(name, value)
  }

  render() {
    const { isFocus } = this.state
    const { name, placeholder, isRequired, value, style } = this.props
    const shouldWarm = isRequired && !value && !isFocus

    return (
      <Styled.TextInput
        style={style}
        name={name}
        value={value}
        warm={shouldWarm}
        placeholder={placeholder}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onChange={this.handleChange}
      />
    )
  }
}
