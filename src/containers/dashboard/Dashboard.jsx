import * as Styled from './Dashboard.style'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Tabs, TabsList, Tab, TabsContent, TabPanel } from 'components/tabs/Tabs'

class Dashboard extends Component {
  static defaultProps = {
    chartTags: ['Week', 'Month', 'Year'],
    tableTags: ['Transaction', 'Summary']
  }

  handleTabsChange = selectedTabsValue => {
    console.log(selectedTabsValue)
  }

  render() {
    const {
      chartTags,
      tableTags
    } = this.props

    return (
      <Styled.DashboardLayout>
        <Styled.DashboardContent>
          <ChartTabs
            chartTags={chartTags}
            handleTabsChange={this.handleTabsChange}
          />
          <TableTabs
            tableTags={tableTags}
          />
        </Styled.DashboardContent>
      </Styled.DashboardLayout>
    )
  }
}

const ChartTabs = props => {
  const tabElms = props.chartTags.map(value => (
    <Tab
      key={btoa(value)}
      value={value}
    >
      {value}
    </Tab>
  ))

  return (
    <Tabs
      defaultSelectedIndex={0}
      onChange={props.handleTabsChange}
    >
      <TabsList>
        {tabElms}
      </TabsList>
    </Tabs>
  )
}

const TableTabs = props => {
  const tabElms = props.tableTags.map(value => (
    <Tab
      key={btoa(value)}
      value={value}
    >
      {value}
    </Tab>
  ))

  return (
    <Tabs
      defaultSelectedIndex={0}
      onChange={props.handleTabsChange}
    >
      <TabsList>
        {tabElms}
      </TabsList>

      <TabsContent>
        <TabPanel>
          <p>Transaction panel works</p>
        </TabPanel>
        <TabPanel>
          <p>Summary panel works</p>
        </TabPanel>
      </TabsContent>
    </Tabs>
  )
}

export default Dashboard