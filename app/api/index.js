import { ref } from 'config/constants'

export function getPostKey () {
  return ref.child(`posts`).push().key
}

export async function persistPost (post) {
  await ref.child(`posts`).set(post.toJS())
}
