import cookies from 'browser-cookies'
import { ref, firebaseAuth } from 'config/constants'

export async function fetchUser (uid) {
  const snapshot = await ref.child(`users/${uid}`).once('value')
  return snapshot.val() || {}
}

export async function registerUser () {
  const { uid } = await firebaseAuth.signInAnonymously()

  const user = {uid, isEditor: false, createdAt: Date.now()}
  ref.child(`users/${uid}`).set(user)
  cookies.set('uid', uid)
  cookies.set('createdAt', Date.now())
  return {[uid]: user}
}

export async function authenticate () {
  const uid = cookies.get('uid')
  if (uid === null) {
    return await registerUser()
  } else {
    return await fetchUser(uid)
  }
}

export function logout () {
  cookies.erase('uid')
}
