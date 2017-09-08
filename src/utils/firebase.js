import { getNowTime } from 'utils/get-now-time.js'
import { assertParams } from 'utils/assertion'

// TODO:
// - CRUD by firebase.ref().transaction
// - https://firebase.google.com/docs/reference/js/firebase.database.Reference#transaction

// Common
/**
 * Get a key for push a new data
 * https://firebase.google.com/docs/database/web/read-and-write#updating_or_deleting_data
 * @param {Object} firebase
 * @param {String} path
 */
function getPushKey(firebase, path) {
  assertParams({
    firebase,
    path
  })
  return firebase
    .ref()
    .child(path)
    .push().key
}

// User firebase
export const requestUpdateUsertDetail = async (firebase, uid) => {
  assertParams({
    firebase,
    uid
  })

  const { timestamp } = getNowTime()

  return firebase.update(`/users/${uid}`, {
    lastUpdate: timestamp
  })
}

// Account firebase
export const requestAddNewAccount = async (firebase, uid) => {
  assertParams({
    firebase,
    uid
  })

  const { timestamp } = getNowTime()

  const EMPTY_ACCOUNT_OBJ = {
    name: '',
    note: '',
    transactions: Object.create(null),
    owner: uid,
    status: true,
    createTime: timestamp,
    updateTime: timestamp
  }

  const accountsPath = `/accounts/${uid}`
  const accountId = getPushKey(firebase, accountsPath)

  EMPTY_ACCOUNT_OBJ.id = accountId

  return firebase
    .update(accountsPath, {
      [accountId]: EMPTY_ACCOUNT_OBJ
    })
    .then(() => EMPTY_ACCOUNT_OBJ)
}

export const requestUpdateAccountDetail = async (
  firebase,
  uid,
  accountId,
  accountDetail = {}
) => {
  assertParams({
    firebase,
    uid,
    accountId
  })

  const { timestamp } = getNowTime()

  return firebase.update(`/accounts/${uid}/${accountId}`, {
    ...accountDetail,
    updateTime: timestamp
  })
}

export const requestDeleteAccount = async (firebase, uid, accountId) => {
  await requestUpdateAccountDetail(firebase, uid, accountId, {
    status: false
  })
}

// Transaction firebase
export const requestAddNewTransaction = async (
  firebase,
  uid,
  accountId,
  transactionDetail
) => {
  assertParams({
    firebase,
    uid,
    accountId
  })

  const { timestamp } = getNowTime()

  const EMPTY_TRANSACTION_OBJ = {
    date: timestamp,
    amount: 0,
    balance: 0,
    description: '',
    category: '',
    payer: '',
    type: 'Expense',
    status: true,
    owner: uid,
    accountId: accountId,
    updateTime: timestamp,
    createTime: timestamp,
    ...transactionDetail
  }

  const transactionsPath = `/transactions/${uid}/${accountId}`
  const transactionId = getPushKey(firebase, transactionsPath)

  EMPTY_TRANSACTION_OBJ.id = transactionId

  await requestUpdateUsertDetail(firebase, uid)
  await requestUpdateAccountDetail(firebase, uid, accountId, {
    [`transactions/${transactionId}`]: true
  })
  return firebase
    .update(transactionsPath, {
      [transactionId]: EMPTY_TRANSACTION_OBJ
    })
    .then(() => EMPTY_TRANSACTION_OBJ)
}

export const requestUpdateTransactionDetail = async (
  firebase,
  uid,
  accountId,
  transactionId,
  transactionDetail = {}
) => {
  assertParams({
    uid,
    firebase,
    accountId,
    transactionId
  })
  const { timestamp } = getNowTime()

  await requestUpdateUsertDetail(firebase, uid)
  await requestUpdateAccountDetail(firebase, uid, accountId, {})
  return firebase.update(`/transactions/${uid}/${accountId}/${transactionId}`, {
    ...transactionDetail,
    updateTime: timestamp
  })
}

export const requestDeleteTransaction = async (
  firebase,
  uid,
  accountId,
  transactionId
) => {
  await requestUpdateUsertDetail(firebase, uid)
  await requestUpdateAccountDetail(firebase, uid, accountId, {
    [`transactions/${transactionId}`]: false
  })
  return requestUpdateTransactionDetail(
    firebase,
    uid,
    accountId,
    transactionId,
    {
      status: false
    }
  )
}
