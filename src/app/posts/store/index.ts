import { create } from 'zustand'
import { PostsState } from './@types'

export const usePostsStore = create<PostsState>(set => ({
	postsVisible: false,
	tooglePostsVisible: () => set(state => ({ postsVisible: !state.postsVisible }))
}))
