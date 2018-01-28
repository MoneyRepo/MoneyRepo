import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Tabs, TabsList, Tab, TabsContent, TabPanel } from './Tabs.jsx'
import React from 'react'

storiesOf('Tabs', module)
  .add('default', () => {
    return (
      <div>
        <p>
          Tabs consists of two parts: TabsList and TabsContent.
        </p>
        <br />
        <p>
          Tabs that only contains TabsList:
        </p>
        <Tabs onChange={action('onChange')}>
          <TabsList>
            <Tab>Week</Tab>
            <Tab>Month</Tab>
            <Tab>Year</Tab>
          </TabsList>
        </Tabs>
        <p>
          Tabs that contains both TabsList and TabsContent:
        </p>
        <Tabs onChange={action('onChange')}>
          <TabsList>
            <Tab>Transaction</Tab>
            <Tab>Summary</Tab>
          </TabsList>
          <TabsContent>
            <TabPanel>Transaction panel is working</TabPanel>
            <TabPanel>Summary panel is working</TabPanel>
          </TabsContent>
        </Tabs>
        <p>
          You can also set the default selected tab:
        </p>
        <Tabs defaultSelectedIndex={0} onChange={action('onChange')}>
          <TabsList>
            <Tab>Transaction</Tab>
            <Tab>Summary</Tab>
          </TabsList>
          <TabsContent>
            <TabPanel>Transaction panel is working</TabPanel>
            <TabPanel>Summary panel is working</TabPanel>
          </TabsContent>
        </Tabs>
      </div>
    )
  })