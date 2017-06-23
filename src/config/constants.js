import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyBso-9fGaoDC35lwwe_rAPZQ43c8xXy9TA",
  authDomain: "bife-29fca.firebaseapp.com",
  databaseURL: "https://bife-29fca.firebaseio.com",
  projectId: "bife-29fca",
  storageBucket: "bife-29fca.appspot.com",
  messagingSenderId: "270100098769"
})

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth()

export {
  ref,
  firebaseAuth,
}
