import { create } from 'zustand'

interface State {
  isActive: boolean
  handleToggleClick: () => void
}

export const useUIStore = create<State>()((set, get) => ({
  isActive: false,
  handleToggleClick: () => set({ isActive: !get().isActive }),
}))
