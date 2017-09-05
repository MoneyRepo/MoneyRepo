import * as Styled from './PopupMeta.style'
import onClickOutside from 'react-onclickoutside'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class PopupMeta extends Component {
  handleClickOutside() {
    const { updateMetaSelectorVisibility } = this.props
    updateMetaSelectorVisibility(false)
  }

  render() {
    const { className, handleProjectDeleteClick } = this.props

    return (
      <Styled.MetaSelector className={className}>
        <Styled.OptionLayout onClick={handleProjectDeleteClick}>
          <i className="material-icons">delete</i>
          <Styled.OptionTitle>Delete Repository</Styled.OptionTitle>
        </Styled.OptionLayout>
      </Styled.MetaSelector>
    )
  }
}

PopupMeta.propTypes = {
  handleProjectDeleteClick: PropTypes.func.isRequired
}

export default onClickOutside(PopupMeta)
