import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import Button from './Button.jsx'
import React from 'react'

storiesOf('Button', module)
  .add('default', () => {
    return (
      <div>
        <p>
          Two style of buttons are available, button with and without hover
          border.
        </p>
        <Button onClick={action('onClick')} isActive={true}>
          Sample Button
        </Button>
        <br />
        <br />
        <Button noBorder={true} onClick={action('onClick')}>
          Sample Button Without Border
        </Button>
        <br />
        <br />
        <Button border={true} width={250} onClick={action('onClick')}>
          <i className="material-icons">add</i>
          Sample Button With Fixed Width
        </Button>
      </div>
    )
  })
  .add('with tooltip', () => {
    const tooltipData = {
      text: 'Sample tooltip text',
      title: 'Sample Title',
      shortcut: '⌘N'
    }

    return (
      <div>
        <p>
          Two style of buttons are available, button with and without hover
          border.
        </p>
        <Button
          tooltipData={tooltipData}
          onClick={action('onClick')}
          isActive={true}
        >
          Sample Button
        </Button>
        <br />
        <br />
        <Button
          noBorder={true}
          border={true}
          tooltipData={tooltipData}
          onClick={action('onClick')}
        >
          Sample Button Without Border
        </Button>
        <br />
        <br />
        <Button
          border={true}
          width={250}
          tooltipData={tooltipData}
          onClick={action('onClick')}
        >
          <i className="material-icons">add</i>
          Sample Button With Fixed Width
        </Button>
      </div>
    )
  })
