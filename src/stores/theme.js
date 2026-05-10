import { defineStore } from 'pinia'
import { getStorage, setStorage } from '@/utils/storage'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    darkMode: getStorage('darkMode') || false
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      setStorage('darkMode', this.darkMode)
      if (this.darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    initTheme() {
      if (this.darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
})
