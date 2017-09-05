// Reference
// https://github.com/prescottprue/react-redux-firebase/blob/master/examples/complete/material/src/config.js

// Initialize script from Firebase
// MoneyRepo specific app config can be fount at link below,
// https://console.firebase.google.com/u/1/project/moneyrepo-37cfb/overview
export const firebase = {
  apiKey: 'AIzaSyD54FF8R3cHqhrrDBhP8KxzV3hy_wiXHFE',
  authDomain: 'moneyrepo-37cfb.firebaseapp.com',
  databaseURL: 'https://moneyrepo-37cfb.firebaseio.com',
  projectId: 'moneyrepo-37cfb',
  storageBucket: 'moneyrepo-37cfb.appspot.com',
  messagingSenderId: '656370869289'
}

export const reduxFirebase = {
  userProfile: 'users', // root that user profiles are written to
  enableLogging: false
}

export const env = 'development'

export default { firebase, reduxFirebase, env }
