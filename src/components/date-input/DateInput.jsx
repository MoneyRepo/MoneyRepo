import * as Styled from './DateInput.style'
import moment from 'moment'
import onClickOutside from 'react-onclickoutside'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class DateInput extends Component {
  static PropTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
      .isRequired,
    // Moment dates format string can be fount at,
    // https://momentjs.com/docs/#/parsing/string-format/
    dateFormatRule: PropTypes.string
  }

  static defaultProps = {
    dateFormatRule: 'MMMM DD YYYY'
  }

  constructor(props) {
    super(props)
    this.state = {
      pickerVisibility: false
    }
  }

  handleClickOutside = () => {
    this.updatePickerVisibility(false)
  }

  togglePickerVisibility = () => {
    const { pickerVisibility } = this.state

    this.updatePickerVisibility(!pickerVisibility)
  }

  updatePickerVisibility = pickerVisibility => {
    this.setState({ pickerVisibility })
  }

  render() {
    const { pickerVisibility } = this.state
    const { value, dateFormatRule } = this.props

    const datetimeValue = moment(value).format(dateFormatRule)

    return (
      <Styled.DateInputLayout className="pt-dark">
        <Styled.StyledDatetimePicker
          {...this.props}
          value={new Date(value)}
          pickerVisibility={pickerVisibility}
          canClearSelection={false}
        />
        <Styled.DateTime onClick={this.togglePickerVisibility}>
          {datetimeValue}
        </Styled.DateTime>
      </Styled.DateInputLayout>
    )
  }
}

export default onClickOutside(DateInput)
