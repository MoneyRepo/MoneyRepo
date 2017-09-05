import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

const req = require.context('../src/components', true, /\.stories\.jsx$/)

function loadStories() {
  // The `index.js` is only used to load storybook-wise style
  require('../stories/index.js')

  req.keys().forEach(storyFilePath => {
    req(storyFilePath)
  })
}

// FIXME: `setOptions` seems no effect at all
setOptions({
  name: 'MoneyRepo',
  url: 'https://moneyrepo.com',
  goFullScreen: true
})

configure(loadStories, module)
