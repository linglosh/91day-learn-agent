<template>
  <nav class="glass-nav fixed top-0 left-0 right-0 z-50 h-16">
    <div class="max-w-6xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
      <router-link to="/" class="flex items-center gap-3 group">
        <div class="w-10 h-10 bg-gradient-to-br from-apple-blue to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
          AI
        </div>
        <span class="font-semibold text-gray-900 dark:text-white hidden sm:block">{{ t('agentLearningRoute') }}</span>
      </router-link>

      <div class="hidden md:flex items-center gap-8">
        <router-link v-for="item in navItems" :key="item.path" :to="item.path"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-apple-blue transition-colors">
          {{ t(item.key) }}
        </router-link>
      </div>

      <div class="flex items-center gap-3">
        <button @click="localeStore.toggleLocale()" 
          class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          {{ localeStore.lang === 'zh' ? 'EN' : '中文' }}
        </button>

        <button @click="themeStore.toggleDarkMode()" 
          class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <span v-if="themeStore.darkMode">☀️</span>
          <span v-else>🌙</span>
        </button>

        <div v-if="authStore.isLoggedIn" class="hidden sm:flex items-center gap-3">
          <span class="text-sm text-gray-600 dark:text-gray-300">{{ authStore.user.name }}</span>
          <router-link v-if="authStore.isAdmin" to="/admin" class="text-sm text-apple-blue hover:underline">
            {{ t('admin') }}
          </router-link>
          <button @click="handleLogout" class="text-sm text-gray-600 dark:text-gray-300 hover:text-red-500">
            {{ t('logout') }}
          </button>
        </div>

        <div v-else class="hidden sm:flex items-center gap-3">
          <router-link to="/login" class="text-sm text-gray-600 dark:text-gray-300 hover:text-apple-blue">
            {{ t('login') }}
          </router-link>
          <router-link to="/register" class="btn-apple text-sm px-4 py-2">
            {{ t('register') }}
          </router-link>
        </div>

        <button @click="toggleMobileMenu" class="md:hidden w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <span>{{ mobileMenuOpen ? '✕' : '☰' }}</span>
        </button>
      </div>
    </div>

    <transition name="slide">
      <div v-if="mobileMenuOpen" class="md:hidden absolute top-16 left-0 right-0 glass-nav border-t border-gray-200/20 dark:border-gray-700/20">
        <div class="px-4 py-6 space-y-4">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path" @click="mobileMenuOpen = false"
            class="block py-3 px-4 text-lg font-medium text-gray-700 dark:text-gray-200 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {{ t(item.key) }}
          </router-link>
          <div v-if="authStore.isLoggedIn" class="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between mb-2">
              <span>{{ authStore.user.name }}</span>
              <button @click="handleLogout" class="text-red-500">{{ t('logout') }}</button>
            </div>
            <router-link v-if="authStore.isAdmin" to="/admin" @click="mobileMenuOpen = false"
              class="block py-2 px-4 bg-apple-blue text-white rounded-xl text-center">
              {{ t('admin') }}
            </router-link>
          </div>
          <div v-else class="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
            <router-link to="/login" @click="mobileMenuOpen = false" class="block py-2 px-4 text-center">
              {{ t('login') }}
            </router-link>
            <router-link to="/register" @click="mobileMenuOpen = false" class="block py-2 px-4 bg-apple-blue text-white rounded-xl text-center">
              {{ t('register') }}
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { useAuthStore } from '@/stores/auth'
import { useLocaleStore } from '@/stores/locale'
import { messages } from '@/stores/locale'

const router = useRouter()
const themeStore = useThemeStore()
const authStore = useAuthStore()
const localeStore = useLocaleStore()
const mobileMenuOpen = ref(false)

const t = computed(() => (key) => messages[localeStore.lang][key] || key)

const navItems = [
  { key: 'home', path: '/' },
  { key: 'plan', path: '/plan' },
  { key: 'resources', path: '/resources' },
  { key: 'notes', path: '/notes' },
  { key: 'projects', path: '/projects' },
  { key: 'about', path: '/about' },
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleLogout = () => {
  authStore.logout()
  mobileMenuOpen.value = false
  router.push('/')
}

onMounted(() => {
  themeStore.initTheme()
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
