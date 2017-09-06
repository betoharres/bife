import { ref } from '../config/constants'

export async function getPosts () {
  const snapshot = await ref.child('posts').once('value')
  return snapshot.val()
}

export async function deletePost (postId) {
  console.log(postId)
  await ref.child(`posts/${postId}`).remove()
}

export function generatePostKey () {
  return ref.child(`posts`).push().key
}

export async function persistPost (post) {
  const postId = Object.keys(post)[0]
  await ref.child(`posts/${postId}`).set(post[postId])
}
