import { StyledActionButton } from '../../containers/sidebar-actions/SidebarActions.style'
import * as Styled from './RepositoryActions.style'
import React from 'react'

const RepositoryActions = props => {
  const { handleNewRespositoryClick } = props
  return (
    <Styled.RepositoryActionsLayout className="respository-action">
      <StyledActionButton onClick={handleNewRespositoryClick} width={80}>
        <i className="material-icons">add</i>
      </StyledActionButton>
    </Styled.RepositoryActionsLayout>
  )
}

export default RepositoryActions
