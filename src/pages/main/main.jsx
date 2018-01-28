import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { Route, withRouter } from 'react-router-dom'
import * as Styled from './main.style'
import LoginMask from '../../components/login-mask/LoginMask'
import LogoutMask from '../../components//logout-mask//LogoutMask'
import React, { Component } from 'react'
import Repository from '../../containers/repository/Repository'
import Sidebar from '../../containers/sidebar/Sidebar'
import Dashboard from '../../containers/dashboard/Dashboard'

const mapStateToProps = state => {
  const { firebase: { auth } } = state
  return { auth }
}

@withRouter
@firebaseConnect()
@connect(mapStateToProps)
class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSettingVisible: false
    }
  }

  handleLoginClick() {
    return (
      this.props.firebase
        // currently only GitHub login is supported
        .login({ provider: 'github' })
        .then(() => { })
        .catch(err => {
          //IMPROVEMENT: Better error handling
          console.error(err)
        })
    )
  }

  handleLogoutClick() {
    const { history } = this.props
    return this.props.firebase
      .logout()
      .then(() => {
        history.push('/')
      })
      .catch(err => {
        //IMPROVEMENT: Better error handling
        console.error(err)
      })
  }

  updateSettingVisibility = state => {
    this.setState({
      isSettingVisible: state
    })
  }

  render() {
    const { auth = {} } = this.props
    const { isSettingVisible } = this.state
    const isAuthEmpty = isEmpty(auth)
    const isAuthLoaded = isLoaded(auth)
    const { email, photoURL } = auth
    let loginMaskElm = null
    let logoutMaskElm = (
      <LogoutMask
        handleClick={() => {
          this.handleLogoutClick()
        }}
        handleBackClick={() => {
          this.updateSettingVisibility(false)
        }}
        accountLabel={email}
        avatarUrl={photoURL}
      />
    )

    if (isAuthEmpty) {
      loginMaskElm = (
        <LoginMask
          handleClick={() => {
            this.handleLoginClick()
          }}
          isLoading={!isAuthLoaded}
        />
      )
    }

    return (
      <Styled.MainLayout>
        {loginMaskElm}
        {!isAuthEmpty && isSettingVisible && logoutMaskElm}

        <Sidebar updateSettingVisibility={this.updateSettingVisibility} />
        <Route exact path="/repository/:repositoryId" component={Repository} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Styled.MainLayout>
    )
  }
}

export default Main
