import cookies from 'browser-cookies'
import { ref, firebaseAuth } from 'config/constants'

export async function fetchUser (uid) {
  const snapshot = await ref.child(`users/${uid}`).once('value')
  return snapshot.val() || {}
}

export async function authUser () {
  const uid = cookies.get('uid')
  if (uid === null) {
    const { uid } = await firebaseAuth.signInAnonymously()

    const user = {[uid]: {editor: false, createdAt: Date.now()}}
    ref.child(`users/${uid}`).set(user)
    cookies.set('uid', uid)
    cookies.set('createdAt', Date.now())
  }
  if (user) {
    return user
  } else {
    return await fetchUser(uid)
  }
}

export function logout () {
  cookies.erase('uid')
}
