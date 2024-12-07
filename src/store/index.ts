import { create } from 'zustand'
import { AppState } from './@types'

export const useAppStore = create<AppState>(set => ({
	globalValue: false,
	toogleGlobalValue: () => set(state => ({ globalValue: !state.globalValue }))
}))
