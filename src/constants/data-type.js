export const TransactionType = Object.freeze({
  Expense: {
    name: 'Expense',
    inputGroup: [
      {
        name: 'description',
        placeholder: 'Description＊',
        isRequired: true
      },
      {
        name: 'category',
        placeholder: 'Category',
        isRequired: false
      },
      {
        name: 'payer',
        placeholder: 'Payer',
        isRequired: false
      }
    ]
  },
  Income: {
    name: 'Income',
    inputGroup: [
      {
        name: 'description',
        placeholder: 'Description＊',
        isRequired: true
      },
      {
        name: 'category',
        placeholder: 'Category',
        isRequired: false
      },
      {
        name: 'payer',
        placeholder: 'Payer',
        isRequired: false
      }
    ]
  }
  // Transfer: {
  //   name: 'Transfer',
  //   inputGroup: [{
  //     name: 'description',
  //     placeholder: 'Description＊',
  //     isRequired: true
  //   }, {
  //     name: 'accountFrom',
  //     placeholder: 'Account From*',
  //     isRequired: true
  //   }, {
  //     name: 'accountTo',
  //     placeholder: 'Account To*',
  //     isRequired: true
  //   }]
  // }
})
