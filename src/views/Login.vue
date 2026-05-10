<template>
  <div class="min-h-screen py-12 px-4 flex items-center justify-center">
    <div class="w-full max-w-md">
      <div class="glass-card p-8">
        <div class="text-center mb-8">
          <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-apple-blue to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
            AI
          </div>
          <h1 class="text-2xl font-bold">{{ t('welcome') }}</h1>
          <p class="text-gray-600 dark:text-gray-400 mt-2">{{ t('login') }}</p>
        </div>

        <div class="space-y-4">
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
        </div>

        <button @click="handleLogin" class="w-full btn-apple mt-6 py-3">
          {{ t('login') }}
        </button>

        <div class="text-center mt-6">
          <span class="text-gray-600 dark:text-gray-400">{{ t('noAccount') }}</span>
          <router-link to="/register" class="text-apple-blue hover:underline ml-1">
            {{ t('register') }}
          </router-link>
        </div>

        <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p class="text-center text-sm text-gray-500">
            {{ t('demoAccount') }}
          </p>
          <div class="mt-2 space-y-1 text-center text-sm text-gray-400">
            <p>{{ t('adminAccount') }}: 13800138000 / 123456</p>
            <p>{{ t('userAccount') }}: 13900139000 / 123456</p>
          </div>
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
  phone: '',
  password: ''
})

const handleLogin = () => {
  if (!form.phone) {
    alert(t('fillPhone'))
    return
  }
  if (!form.password) {
    alert(t('fillPassword'))
    return
  }

  const success = authStore.login(form.phone, form.password)
  if (success) {
    alert(t('loginSuccess'))
    router.push('/')
  } else {
    alert(t('loginFailed'))
  }
}
</script>

<style scoped>
</style>
