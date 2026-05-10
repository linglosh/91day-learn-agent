import { defineStore } from 'pinia'
import { getStorage, setStorage } from '@/utils/storage'

export const useProgressStore = defineStore('progress', {
  state: () => ({
    completedDays: getStorage('completedDays') || {}
  }),
  getters: {
    completedCount: (state) => Object.values(state.completedDays).filter(Boolean).length,
    totalDays: () => 91,
    progressPercentage: (state) => {
      const completed = Object.values(state.completedDays).filter(Boolean).length
      return Math.round((completed / 91) * 100)
    }
  },
  actions: {
    toggleDay(key) {
      this.completedDays[key] = !this.completedDays[key]
      setStorage('completedDays', this.completedDays)
    },
    isDayCompleted(key) {
      return this.completedDays[key] || false
    }
  }
})
