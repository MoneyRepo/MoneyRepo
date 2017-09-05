import { action } from '@storybook/addon-actions'
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import React from 'react'
import RepositoryMeta from './RepositoryMeta'

const repositoryMetaData = {
  title: 'Cash On Hand',
  note:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}

storiesOf('RepositoryMeta', module).add('default', () => {
  return (
    <div>
      <MemoryRouter initialEntries={['/']}>
        <RepositoryMeta
          onClick={action('onClick')}
          repositoryMetaData={repositoryMetaData}
        />
      </MemoryRouter>

      <MemoryRouter initialEntries={['/']}>
        <RepositoryMeta onClick={action('onClick')} />
      </MemoryRouter>
    </div>
  )
})
