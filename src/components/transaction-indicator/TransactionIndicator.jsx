import { TransactionType } from '../../constants/data-type.js'
import * as Styled from './TransactionIndicator.style'
import onClickOutside from 'react-onclickoutside'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Tooltip from '../tooltip/Tooltip'

class TransactionIndicator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      typeSelectorVisibility: false,
      tooltipVisibility: false
    }
  }

  updateTooltipVisibility(visibilityState) {
    this.setState((prevState, props) => {
      return {
        tooltipVisibility: visibilityState
      }
    })
  }

  updateTypeSelectorVisibility(visibilityState) {
    this.setState((prevState, props) => {
      return {
        typeSelectorVisibility: visibilityState
      }
    })
  }

  handleTypeIndicatorClick(transactionType) {
    const { typeSelectorVisibility } = this.state

    this.updateTypeSelectorVisibility(!typeSelectorVisibility)
    this.updateTooltipVisibility(false)
  }

  handleTypeChange(transactionType) {
    const { onTypeChange } = this.props

    this.updateTypeSelectorVisibility(false)
    onTypeChange && onTypeChange(transactionType)
  }

  handleClickOutside(event) {
    this.updateTypeSelectorVisibility(false)
    this.updateTooltipVisibility(false)
  }

  render() {
    const { typeSelectorVisibility, tooltipVisibility } = this.state
    const { type, onTypeChange } = this.props

    const typesElm = Object.keys(TransactionType).map(key => {
      return (
        <Styled.Type
          key={key}
          onClick={() => this.handleTypeChange(key)}
        >
          <Styled.Indicator type={key} /> {TransactionType[key].name}
        </Styled.Type>
      )
    })

    const typeSelectorElm = (
      <Styled.TypeSelector>{typesElm}</Styled.TypeSelector>
    )

    return (
      <Styled.IndicatorLayout>
        <Styled.Indicator
          type={type}
          onClick={
            onTypeChange &&
            (e => {
              this.handleTypeIndicatorClick(type)
            })
          }
          onMouseEnter={e => this.updateTooltipVisibility(true)}
          onMouseLeave={e => this.updateTooltipVisibility(false)}
        />

        {typeSelectorVisibility && typeSelectorElm}
        {tooltipVisibility && <Tooltip text={type} />}
      </Styled.IndicatorLayout>
    )
  }
}

TransactionIndicator.propTypes = {
  type: PropTypes.string.isRequired,

  onTypeChange: PropTypes.func
}

export default onClickOutside(TransactionIndicator)
