**Firebase Data-structure**

```javascript
{
  users: {
    uid1: {
      avatarUrl: '',
      displayName: 'Sample Display Name',
      email: 'sample@mail.com',
      lastUp
      providerData: {}
    },
    uid2: { ... }
  },
  accounts: {
    uid1: {
      accountId1: {
        name: '',
        note: '',
        owner: uid1,
        transactions: {
          transactionId1: true,
          transactionId2: true
        }
      },
      accountId2: { ... }
    }
  },
  transactions: {
    uid1: {
      accountId1: {
        transactionId1: {
          type: '',
          date: Date,
          description: '',
          amount: 99999999.99,
          balance: 99999999.99,
          owner: uid1,
          accountId: accountId1,
        },
        transactionId2: { ... }
      }
    }
  }
}
```