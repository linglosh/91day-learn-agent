<template>
  <div class="min-h-screen py-12 px-4 flex items-center justify-center">
    <div class="w-full max-w-md">
      <div class="glass-card p-8">
        <div class="text-center mb-8">
          <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-apple-blue to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
            AI
          </div>
          <h1 class="text-2xl font-bold">{{ t('register') }}</h1>
          <p class="text-gray-600 dark:text-gray-400 mt-2">{{ t('createAccount') }}</p>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">{{ t('name') }}</label>
            <input v-model="form.name" type="text" placeholder="请输入姓名"
                   class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-apple-blue transition-colors">
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">{{ t('phone') }}</label>
            <input v-model="form.phone" type="tel" placeholder="请输入手机号"
                   class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-apple-blue transition-colors">
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">{{ t('password') }}</label>
            <input v-model="form.password" type="password" placeholder="请输入密码"
                   class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-apple-blue transition-colors">
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">{{ t('confirmPassword') }}</label>
            <input v-model="form.confirmPassword" type="password" placeholder="请再次输入密码"
                   class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-apple-blue transition-colors">
          </div>
        </div>

        <button @click="handleRegister" class="w-full btn-apple mt-6 py-3">
          {{ t('register') }}
        </button>

        <div class="text-center mt-6">
          <span class="text-gray-600 dark:text-gray-400">{{ t('hasAccount') }}</span>
          <router-link to="/login" class="text-apple-blue hover:underline ml-1">
            {{ t('login') }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useLocaleStore } from '@/stores/locale'
import { messages } from '@/stores/locale'

const router = useRouter()
const authStore = useAuthStore()
const localeStore = useLocaleStore()

const t = computed(() => (key) => messages[localeStore.lang][key] || key)

const form = reactive({
  name: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

const handleRegister = () => {
  if (!form.name) {
    alert('请输入姓名')
    return
  }
  if (!form.phone) {
    alert(t('fillPhone'))
    return
  }
  if (!form.password) {
    alert(t('fillPassword'))
    return
  }
  if (form.password !== form.confirmPassword) {
    alert(t('passwordMismatch'))
    return
  }

  const success = authStore.register(form.phone, form.password, form.name)
  if (success) {
    alert(t('registerSuccess'))
    router.push('/login')
  } else {
    alert(t('userExists'))
  }
}
</script>
