import * as Styled from './SidebarActions.style'
import React, { Component } from 'react'

const SIDEBAR_ACTION_BUTTON_CLASS = 'sidebar-action__button'

class SidebarActions extends Component {
  constructor() {
    super()

    this.state = {
      repoSelectorVisibility: false
    }
  }

  updateRepoSelectorVisibility(visibilityState) {
    this.setState((prev, props) => {
      return {
        repoSelectorVisibility: visibilityState
      }
    })
  }

  toggleRepoSelectorVisibility() {
    const { repoSelectorVisibility } = this.state
    this.updateRepoSelectorVisibility(!repoSelectorVisibility)
  }

  render() {
    const { repoSelectorVisibility } = this.state
    const { handleNewAccountClick, handleSettingClick } = this.props

    return (
      <Styled.SidebarActionsLayout>
        <Styled.StyledActionButton
          onClick={() => {
            this.toggleRepoSelectorVisibility()
          }}
          isActive={repoSelectorVisibility}
          className={SIDEBAR_ACTION_BUTTON_CLASS}
        >
          <i className="material-icons">add</i>
          New Repository
        </Styled.StyledActionButton>

        <Styled.StyledSettingButton
          onClick={() => {
            handleSettingClick(true)
          }}
        >
          <i className="material-icons">settings</i>
        </Styled.StyledSettingButton>

        {repoSelectorVisibility && (
          <Styled.StyledPopupRepository
            onNewAccountClick={() => {
              handleNewAccountClick(
                this.updateRepoSelectorVisibility.bind(this)
              )
            }}
            onClickOutside={() => {
              this.updateRepoSelectorVisibility(false)
            }}
            outsideClickIgnoreClass={SIDEBAR_ACTION_BUTTON_CLASS}
            enableOnClickOutside={repoSelectorVisibility}
          />
        )}
      </Styled.SidebarActionsLayout>
    )
  }
}

export default SidebarActions
