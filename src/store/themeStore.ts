import { create } from 'zustand'

interface ThemeStore {
  isDark: boolean
  toggleTheme: () => void
  setDarkMode: (dark: boolean) => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDark: localStorage.getItem('theme') === 'dark' || false,

  toggleTheme: () => {
    set((state) => {
      const newDark = !state.isDark
      localStorage.setItem('theme', newDark ? 'dark' : 'light')
      if (newDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return { isDark: newDark }
    })
  },

  setDarkMode: (dark) => {
    set({ isDark: dark })
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
}))
