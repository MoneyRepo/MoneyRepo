import { TooltipLayout, Text } from './Tooltip.style'
import * as Styled from './Tooltip.style'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const GAP_SIZE_BETWEEN_BORDERS = 12 // in pixel

class Tooltip extends Component {
  constructor(props) {
    super(props)

    this.state = {
      renderPosition: {
        top: 0,
        left: 0
      }
    }
  }

  calculateTooltipPosition(hoverElm, tooltip) {
    // Available position information inside client react are,
    // top, right, bottom, left, elem:width, elem:height
    const clientRect = hoverElm.getBoundingClientRect()
    const { top, left, height } = clientRect
    const { height: tooltipHeight } = tooltip.getBoundingClientRect()
    const browserHeight = document.documentElement.clientHeight

    let elemX = left
    let elemY

    if (
      browserHeight - top - height - GAP_SIZE_BETWEEN_BORDERS * 2 >
      tooltipHeight
    ) {
      elemY = top + height + GAP_SIZE_BETWEEN_BORDERS
    } else {
      elemY = top - GAP_SIZE_BETWEEN_BORDERS - tooltipHeight
    }

    // TODO: Handle viewport left and right edge cases
    return {
      top: elemY,
      left: elemX
    }
  }

  componentDidMount() {
    const tooltipDOMElm = ReactDOM.findDOMNode(this)
    const parentContainerDOMElm = tooltipDOMElm.parentNode
    const numElementsInParent = parentContainerDOMElm.childElementCount
    const triggerDOMElm = parentContainerDOMElm.firstChild

    if (triggerDOMElm && numElementsInParent > 1) {
      const renderPosition = this.calculateTooltipPosition(
        triggerDOMElm,
        tooltipDOMElm
      )
      this.setState({
        renderPosition
      })
    }
  }

  render() {
    const { text, title, shortcut, delay } = this.props
    const { renderPosition } = this.state

    const titleRow = (
      <Styled.Title>
        <Styled.SpanTitle>{title}</Styled.SpanTitle>

        {shortcut && <Styled.Separator />}

        <Styled.SpanShortcut>{shortcut}</Styled.SpanShortcut>
      </Styled.Title>
    )

    return (
      <TooltipLayout delay={delay} position={renderPosition}>
        {title ? titleRow : ''}

        <Text>{text}</Text>
      </TooltipLayout>
    )
  }
}

Tooltip.defaultProps = {
  delay: 1
}

export default Tooltip
