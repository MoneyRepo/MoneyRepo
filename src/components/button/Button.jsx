import * as Styled from './Button.style'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Tooltip from '../tooltip/Tooltip'

class Button extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tooltipVisibility: false
    }
  }

  updateTooltipVisibility(visibilityState) {
    this.setState({
      tooltipVisibility: visibilityState
    })
  }

  render() {
    const {
      children,
      width,
      isActive,
      onClick,
      tooltipData,
      noBorder,
      className
    } = this.props
    const { tooltipVisibility } = this.state

    let tooltipElm
    if (tooltipData) {
      const { text, title, shortcut } = tooltipData
      tooltipElm = <Tooltip text={text} title={title} shortcut={shortcut} />
    }

    return (
      <Styled.ButtonLayout className={className}>
        <Styled.ButtonElm
          noBorder={noBorder}
          width={width}
          isActive={isActive}
          onClick={e => onClick()}
          onMouseDown={e => this.updateTooltipVisibility(false)}
          onMouseEnter={e => this.updateTooltipVisibility(true)}
          onMouseLeave={e => this.updateTooltipVisibility(false)}
        >
          {children}
        </Styled.ButtonElm>

        {tooltipData && tooltipVisibility && tooltipElm}
      </Styled.ButtonLayout>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  noHoverBorder: PropTypes.bool,
  isActive: PropTypes.bool,
  width: PropTypes.number,
  tooltipData: PropTypes.shape({
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
    shortcut: PropTypes.string
  })
}

Button.defaultProps = {
  isActive: false
}

export default Button
