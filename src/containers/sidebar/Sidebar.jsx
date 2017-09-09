import _ from 'lodash'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { requestAddNewAccount } from '../../utils/firebase'
import { withRouter } from 'react-router-dom'
import * as Styled from './Sidebar.style'
import React, { Component } from 'react'
import RepositoryTree from '../../components/repository-tree/RepositoryTree'
import SidebarActions from '../sidebar-actions/SidebarActions'
import Statistic from '../../components/statistic/Statistic'

// TODO:
// - Make this component a TRUE container component
// - Consider move `SidebarAction` component out of container components directory

const mapStateToProps = state => {
  const { firebase: { data: { accounts }, auth } } = state

  if (auth.uid && accounts) {
    return { auth, accounts: accounts[auth.uid] }
  }
  return { accounts }
}

// Get data by user ID `uid`
// https://github.com/prescottprue/react-redux-firebase/issues/14#issuecomment-321624753
// https://github.com/prescottprue/react-redux-firebase/blob/master/examples/snippets/stateBasedQuery/Todos.js
@withRouter
@firebaseConnect((props, firebase) => {
  //FIXME: Seems there is a way to pass `uid` to `firebaseConnect` here
  const uid = firebase._.authUid
  return [
    {
      path: `/accounts/${uid}`,
      queryParams: ['orderByChild=status', 'equalTo=true']
    }
  ]
})
@connect(mapStateToProps)
export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    // The full URL can potentially contains query string which start with `?`
    const pathname = window.location.pathname.split('?')[0]
    const repositoryId = _.last(pathname.split('/'))

    this.state = {
      selectedId: repositoryId || ''
    }
  }

  handleNewAccountClick = callback => {
    const { firebase, auth: { uid }, history } = this.props

    return requestAddNewAccount(firebase, uid)
      .then(({ id }) => {
        callback(false)
        this.updateSelectedId(id)
        history.push(`/repository/${id}?status=new`)
      })
      .catch(err => {
        // IMPROVEMENT: Better error handling
        window.alert('Error occurred while creating new account')
        console.error(err)
      })
  }

  updateSelectedId = id => {
    this.setState({ selectedId: id })
  }

  render() {
    const { accounts, updateSettingVisibility } = this.props
    const { selectedId } = this.state
    const repositories = accounts || {}

    return (
      <Styled.SidebarLayout>
        <RepositoryTree
          title={'Account'}
          selectedId={selectedId}
          repositories={repositories}
          updateSelectedId={id => {
            this.updateSelectedId(id)
          }}
        />

        <Statistic data={[]} />

        <SidebarActions
          handleNewAccountClick={this.handleNewAccountClick}
          handleSettingClick={updateSettingVisibility}
        />
      </Styled.SidebarLayout>
    )
  }
}
