import { Post } from './@types'

export async function getPosts() {
	const respone = await fetch('https://jsonplaceholder.typicode.com/todos')

	return (await respone.json()) as Post[]
}
