import * as Styled from './Tabs.style'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Tabs extends Component {
  /**
   * defaultSelectedIndex: The value to set the default selected tab, optional
   * onChange: Hook function to get current selected tab value, optional
   */
  static PropTypes = {
    defaultSelectedIndex: PropTypes.number,
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {}
  }

  // handle the tab click and set the internal component state to current selected tab index
  handleTabsClick = (selectedIndex, selectedValue) => {
    this.setState({
      selectedIndex
    })

    this.handleTabsChange(selectedValue)
  }

  // handle the hook function `onChange` and return the selected tab value to parent component
  handleTabsChange = selectedValue => {
    const {
      onChange
    } = this.props

    onChange && onChange(selectedValue)
  }

  render() {
    const {
      children,
      defaultSelectedIndex
    } = this.props

    const selectedIndex = this.state.selectedIndex !== undefined ? this.state.selectedIndex : defaultSelectedIndex

    // merge the props to the child component from tab component internal states and functions
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        selectedIndex,
        handleClick: this.handleTabsClick
      })
    )

    return (
      <Styled.TabsLayout>
        {childrenWithProps}
      </Styled.TabsLayout>
    )
  }
}

export const TabsList = props => {
  const {
    children,
    selectedIndex,
    handleClick
  } = props

  // merge the props to the child component from TabsList props and set the child component `index` props
  const childrenWithProps = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      index,
      selectedIndex,
      handleClick
    })
  )

  return (
    <Styled.TabsList>
      {childrenWithProps}
    </Styled.TabsList>
  )
}

TabsList.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}

export const Tab = props => {
  const {
    index,
    value,
    handleClick,
    selectedIndex
  } = props

  // Check the tab status is selected if props `index` is equal to `selectedIndex`
  const selected = index === selectedIndex ? true : false

  function handleTabClick() {
    handleClick(index, value)
  }

  return (
    <Styled.Tab
      selected={selected}
      onClick={handleTabClick}
    >
      {props.children}
    </Styled.Tab>
  )
}

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.any.isRequired,
  handleClick: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired
}

export const TabsContent = props => {
  const {
    selectedIndex,
    children
  } = props

  const childrenWithProps = React.Children.map(children, (child, index) => React.cloneElement(child, {
    index,
    selectedIndex
  }))

  return (
    <Styled.TabsContent>
      {childrenWithProps}
    </Styled.TabsContent>
  )
}

TabsContent.propTypes = {
  selectedIndex: PropTypes.number.isRequired
}

export const TabPanel = props => {
  const {
    index,
    selectedIndex,
    children
  } = props

  const selected = index === selectedIndex ? true : false

  return (
    <Styled.TabPanel
      selected={selected}
    >
      {children}
    </Styled.TabPanel>
  )
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number.isRequired
}