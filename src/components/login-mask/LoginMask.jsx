import * as Styled from './LoginMask.style'
import Button from '../button/Button'
import React from 'react'
import Spinner from '../spinner/Spinner'

const LoginMask = props => {
  const { handleClick, isLoading } = props
  const spinnerElm = <Spinner />
  const buttonElm = (
    <Button
      onClick={() => {
        handleClick()
      }}
    >
      <i className="material-icons">lock open</i>
      Login with GitHub Account
    </Button>
  )

  const actionElm = isLoading ? spinnerElm : buttonElm

  return (
    <Styled.LoginMaskLayout>
      <Styled.LoginBox>
        <Styled.LogoImage src="/logo.png" />
        {actionElm}
      </Styled.LoginBox>
    </Styled.LoginMaskLayout>
  )
}

export default LoginMask
