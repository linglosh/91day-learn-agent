import { defineStore } from 'pinia'
import { getStorage, setStorage } from '@/utils/storage'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: getStorage('user') || null,
    isAdmin: getStorage('isAdmin') || false
  }),
  getters: {
    isLoggedIn: (state) => !!state.user
  },
  actions: {
    login(phone, password) {
      const mockUsers = [
        { id: 1, phone: '13800138000', password: '123456', name: '张三', isAdmin: true },
        { id: 2, phone: '13900139000', password: '123456', name: '李四', isAdmin: false },
        { id: 3, phone: '13700137000', password: '123456', name: '王五', isAdmin: false }
      ]
      const user = mockUsers.find(u => u.phone === phone && u.password === password)
      if (user) {
        this.user = user
        this.isAdmin = user.isAdmin
        setStorage('user', user)
        setStorage('isAdmin', user.isAdmin)
        return true
      }
      return false
    },
    logout() {
      this.user = null
      this.isAdmin = false
      localStorage.removeItem('agent_learning_user')
      localStorage.removeItem('agent_learning_isAdmin')
    },
    register(phone, password, name) {
      const existingUsers = getStorage('registeredUsers') || []
      if (existingUsers.find(u => u.phone === phone)) {
        return false
      }
      const newUser = {
        id: Date.now(),
        phone,
        password,
        name,
        isAdmin: false,
        createdAt: new Date().toISOString()
      }
      existingUsers.push(newUser)
      setStorage('registeredUsers', existingUsers)
      return true
    }
  }
})
