import * as Styled from './LogoutMask.style'
import Button from '../button/Button'
import React from 'react'

const LogoutMask = props => {
  const {
    handleClick,
    avatarUrl,
    updateTimeLabel,
    accountLabel,
    handleBackClick
  } = props

  const buttonElm = (
    <Button width={130} onClick={handleClick}>
      <i className="material-icons">eject</i>
      Logout
    </Button>
  )

  return (
    <Styled.LogoutMaskLayout>
      <Styled.LogoutBox>
        <img src={avatarUrl} alt="avatar" />
        <p>
          <span className="key">Account:</span>
          <span className="value">{accountLabel}</span>
        </p>
        {updateTimeLabel && (
          <p>
            <span className="key">Last Update:</span>
            <span className="value">{updateTimeLabel}</span>
          </p>
        )}
        {buttonElm}

        <p className="link" onClick={handleBackClick}>
          <span>Go Back App</span>
        </p>
      </Styled.LogoutBox>
    </Styled.LogoutMaskLayout>
  )
}

export default LogoutMask
