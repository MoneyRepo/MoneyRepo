import { action } from '@storybook/addon-actions'
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import React from 'react'
import RepositoryTree from './RepositoryTree'
import uuid from 'uuid'

const sampleRepositories = [
  { name: 'Repository Name 000', active: true, id: uuid() },
  { name: 'Repository Name 001', active: false, id: uuid() },
  { name: 'Repository Name 002', active: false, id: uuid() },
  { name: 'Repository Name 003', active: false, id: uuid() }
]

storiesOf('RepositoryTree', module).add('default', () => {
  return (
    <div>
      <MemoryRouter initialEntries={['/']}>
        <RepositoryTree
          title={'Accounts'}
          repositories={sampleRepositories}
          onClick={action('onClick')}
        />
      </MemoryRouter>

      <MemoryRouter initialEntries={['/']}>
        <RepositoryTree
          title={'Budgets'}
          repositories={sampleRepositories}
          onClick={action('onClick')}
        />
      </MemoryRouter>
    </div>
  )
})
