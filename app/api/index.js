import { ref } from 'config/constants'

export async function getPosts () {
  const snapshot = await ref.child('posts').once('value')
  return snapshot.val()
}

export function getPostKey () {
  return ref.child(`posts`).push().key
}

export async function persistPost (post) {
  await ref.child(`posts`).set(post.toJS())
}
