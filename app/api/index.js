import { ref } from 'config/constants'

export async function getPosts () {
  const snapshot = await ref.child('posts').once('value')
  return snapshot.val()
}

export function generatePostKey () {
  return ref.child(`posts`).push().key
}

export async function persistPost (post) {
  await ref.child(`posts/${post.keySeq().first()}`).set(post.first().toJS())
}
