import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { getNowTime } from 'utils/get-now-time.js'
import { TransactionType } from 'constants/data-type'
import {
  requestDeleteAccount,
  requestUpdateAccountDetail,
  requestAddNewTransaction,
  requestUpdateTransactionDetail,
  requestDeleteTransaction
} from 'utils/firebase'
import { withRouter } from 'react-router-dom'
import * as Styled from './Repository.style'
import React, { Component } from 'react'
import RepositoryActions from '../repository-actions/RepositoryActions'
import RepositoryMeta from 'components/repository-meta/RepositoryMeta'
import TransactionForm from 'components/transaction-form/TransactionForm'
import Transaction from 'components/transaction/Transaction'
import NonIdealState from 'components/non-ideal-state/NonIdealState'

// TODO:
// - Make `Repository` component a TRUE container component

const mapStateToProps = (state, ownProps) => {
  const {
    firebase: { data: { accounts, transactions }, auth: { uid } }
  } = state
  const { match: { params: { repositoryId } } } = ownProps
  let accountDetail = {}
  let transactionsDetail = {}

  if (uid && repositoryId && accounts && accounts[uid]) {
    accountDetail = accounts[uid][repositoryId] || {}
  }

  if (uid && repositoryId && transactions && transactions[uid]) {
    transactionsDetail = transactions[uid][repositoryId] || {}
  }

  return {
    transactionsDetail,
    accountDetail,
    uid,
    repositoryId
  }
}

@withRouter
@firebaseConnect((props, firebase) => {
  const { match: { params: { repositoryId } } } = props
  const uid = firebase._.authUid
  const accountDetailPath = `/accounts/${uid}/${repositoryId}/`
  const transactionsPath = `/transactions/${uid}/${repositoryId}/`
  return [
    { path: accountDetailPath },
    {
      path: transactionsPath,
      queryParams: ['orderByChild=status', 'equalTo=true']
    }
  ]
})
@connect(mapStateToProps)
class Repository extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repositoryId: '',
      isEditingNewRespository: false,
      transactionData: {},
      focusTransactionId: null,
      activeTransactionId: null
    }
  }

  componentDidMount() {
    const { match: { params: { repositoryId } } } = this.props

    this.setState({
      repositoryId
    })
  }

  handleNewRespositoryClick = () => {
    const { isEditingNewRespository, activeTransactionId } = this.state
    if (!isEditingNewRespository && !activeTransactionId) {
      this.setState({
        isEditingNewRespository: true,
        focusTransactionId: null,
        activeTransactionId: null,
        transactionData: this.getTransactionData()
      })
    }
  }

  getTransactionData = transactionId => {
    const { timestamp } = getNowTime()
    const lastTransactionType = window.localStorage.lastTransactionType
    const type = TransactionType[lastTransactionType]
      ? lastTransactionType
      : 'Expense'
    let transactionData = {
      type,
      date: timestamp,
      description: 'Sample transaction description',
      amount: 0,
      category: '',
      payer: '',
      balance: 0
    }
    if (transactionId) {
      const { transactionsDetail } = this.props
      transactionData = {
        ...transactionData,
        ...transactionsDetail
      }
    }
    return transactionData
  }

  handleTypeChange = transactionType => {
    if (transactionType) {
      window.localStorage.lastTransactionType = transactionType
    }
  }

  handleAddTransaction = transactionData => {
    try {
      const { firebase, uid, repositoryId } = this.props
      requestAddNewTransaction(firebase, uid, repositoryId, transactionData)
      this.setState({
        isEditingNewRespository: false
      })
    } catch (e) {
      window.alert('Error occurred while creating transaction')
      console.error(e)
    }
  }

  handleUpdateTransaction = async (transactionData, transactionId) => {
    try {
      const { firebase, uid, repositoryId, transactionsDetail } = this.props
      await requestUpdateTransactionDetail(firebase, uid, repositoryId, {
        ...transactionsDetail[transactionId],
        ...transactionData
      })
      this.setState({
        activeTransactionId: null,
        isEditingNewRespository: false
      })
    } catch (e) {
      window.alert('Error occurred while saving transaction')
      console.error(e)
    }
  }

  handleDeleteTransaction = async transactionId => {
    try {
      const { firebase, uid, repositoryId, transactionsDetail } = this.props
      await requestDeleteTransaction(
        firebase,
        uid,
        repositoryId,
        transactionsDetail[transactionId]
      )
      this.setState({
        focusTransactionId: null,
        isEditingNewRespository: false
      })
    } catch (e) {
      window.alert('Error occurred while deleting transaction')
      console.error(e)
    }
  }

  handleTransactionClick = transactionId => {
    const { isEditingNewRespository, activeTransactionId } = this.state
    if (isEditingNewRespository || activeTransactionId) {
      return
    }
    this.setState({
      isEditingNewRespository: false,
      focusTransactionId: transactionId
    })
  }

  handleTransactionDoubleClick = transactionId => {
    const { isEditingNewRespository, activeTransactionId } = this.state
    if (isEditingNewRespository || activeTransactionId) {
      return
    }
    this.setState({
      isEditingNewRespository: false,
      activeTransactionId: transactionId
    })
  }

  render() {
    const {
      repositoryId,
      uid,
      firebase,
      accountDetail,
      transactionsDetail
    } = this.props
    const {
      transactionData,
      isEditingNewRespository,
      activeTransactionId,
      focusTransactionId
    } = this.state

    const transactionsArr = Object.keys(transactionsDetail).map(
      id => transactionsDetail[id]
    )
    transactionsArr.sort((a, b) => a.date - b.date)

    const transactionElmsArr = []

    transactionsArr.forEach(transactionData => {
      const { id } = transactionData
      if (!transactionData.status) {
        return
      }
      let transactionElm
      const isActive = activeTransactionId === id
      const isFocus = focusTransactionId === id
      if (isActive) {
        transactionElm = (
          <TransactionForm
            key={id}
            transactionId={id}
            outsideClickIgnoreClass="respository-action"
            onTypeChange={this.handleTypeChange}
            transactionData={transactionData}
            handleUpdateTransaction={this.handleUpdateTransaction}
          />
        )
      } else {
        transactionElm = (
          <Transaction
            active={isFocus}
            handleClick={this.handleTransactionClick}
            handleDoubleClick={this.handleTransactionDoubleClick}
            key={id}
            transactionId={id}
            transactionData={transactionData}
            handleDeleteTransaction={this.handleDeleteTransaction}
          />
        )
      }
      return transactionElmsArr.push(transactionElm)
    })

    return (
      <Styled.RepositoryLayout>
        <Styled.RepositoryContent>
          <RepositoryMeta
            repositoryMetaData={accountDetail}
            repositoryId={repositoryId}
            uid={uid}
            deleteRepository={(uid, repositoryId) => {
              return requestDeleteAccount(firebase, uid, repositoryId)
            }}
            updateRepository={(uid, repositoryId, payload) => {
              return requestUpdateAccountDetail(
                firebase,
                uid,
                repositoryId,
                payload
              )
            }}
          />

          {!transactionElmsArr.length &&
          !isEditingNewRespository && (
            <NonIdealState
              description="Create a new transaction to populate the repository"
              title="No Transaction"
            />
          )}

          {transactionElmsArr}

          {isEditingNewRespository && (
            <TransactionForm
              outsideClickIgnoreClass="respository-action"
              onTypeChange={this.handleTypeChange}
              transactionData={transactionData}
              handleUpdateTransaction={this.handleAddTransaction}
            />
          )}
        </Styled.RepositoryContent>

        <RepositoryActions
          handleNewRespositoryClick={this.handleNewRespositoryClick}
        />
      </Styled.RepositoryLayout>
    )
  }
}

export default Repository
