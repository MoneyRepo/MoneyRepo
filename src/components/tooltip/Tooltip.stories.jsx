import { storiesOf } from '@storybook/react'
import React from 'react'
import Tooltip from './Tooltip'

storiesOf('Tooltip', module).add('default', () => {
  function getSeparator(num) {
    const container = []
    for (let i = 0; i < num; i++) {
      container.push(<br key={i} />)
    }
    return container
  }

  return (
    <div>
      <p>
        A self-aware tooltip which position itself at the right position based
        on the current context
      </p>
      <p>
        The tooltip will show up in `delay` seconds, the default delay is `1s`.
      </p>
      <div style={{ height: '40px' }}>
        <div />
        <Tooltip text={'Sample tooltip with text prop'} delay={0} />
      </div>
      <div style={{ height: '100px' }}>
        <div />
        <Tooltip
          title={'Sample Title'}
          text={'Sample tooltip with title props'}
          delay={0}
        />
      </div>
      <div style={{ height: '100px' }}>
        <div />
        <Tooltip
          title={'Sample Title'}
          shortcut={'⌘N'}
          text={'Sample tooltip with title props'}
          delay={0}
        />
      </div>
    </div>
  )
})
