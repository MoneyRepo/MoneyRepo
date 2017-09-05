import * as Styled from './PopupRepository.style'
import onClickOutside from 'react-onclickoutside'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class PopupRepository extends Component {
  handleClickOutside() {
    const { onClickOutside } = this.props

    if (onClickOutside) {
      onClickOutside()
    }
  }

  render() {
    const { onNewAccountClick, className } = this.props

    return (
      <Styled.RepoSelector className={className}>
        <Styled.OptionLayout onClick={onNewAccountClick}>
          <i className="material-icons">local_atm</i>
          <Styled.OptionTitle>New Account</Styled.OptionTitle>
          <Styled.OptionDescription>
            Create a new account, then log all your transactions.
          </Styled.OptionDescription>
        </Styled.OptionLayout>
      </Styled.RepoSelector>
    )
  }
}

PopupRepository.propTypes = {
  onNewAccountClick: PropTypes.func.isRequired
}

export default onClickOutside(PopupRepository)
