import { withRouter } from 'react-router-dom'
import * as Styled from './RepositoryTree.style'
import PropTypes from 'prop-types'
import React from 'react'

const RepositoryTree = props => {
  const { title, selectedId, updateSelectedId, repositories } = props

  const handleRepoClicked = repositoryKey => {
    const { history } = props

    history.push(`/repository/${repositoryKey}`)
    updateSelectedId(repositoryKey)
  }

  // Generate a list of repository list item based on the
  // given repository object
  const repositoryKeyList = Object.keys(repositories)
  const repositoryListElm = repositoryKeyList.map(repositoryKey => {
    if (repositories[repositoryKey] === null) {
      return undefined
    }
    const { name } = repositories[repositoryKey]
    const active = repositoryKey === selectedId
    // Using a click handler instead of a `<Link/>` element is to avoid
    // showing link at the bottom of the browser status bar
    return (
      <Styled.Repository
        key={repositoryKey}
        isActive={active}
        onClick={() => {
          handleRepoClicked(repositoryKey)
        }}
      >
        {name.length ? name : 'New Repository'}
      </Styled.Repository>
    )
  })

  return (
    <Styled.RepositoryTreeLayout>
      <Styled.SectionTitle>{title}</Styled.SectionTitle>
      <Styled.List>{repositoryListElm}</Styled.List>
    </Styled.RepositoryTreeLayout>
  )
}

RepositoryTree.propTypes = {
  title: PropTypes.string.isRequired,
  repositories: PropTypes.object
}

export default withRouter(RepositoryTree)
