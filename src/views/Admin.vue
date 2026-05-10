<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="section-title">{{ t('admin') }}</h1>
          <p class="text-gray-600 dark:text-gray-400">{{ t('dataStatistics') }}</p>
        </div>
        <router-link to="/" class="btn-outline">
          {{ t('backToHome') }}
        </router-link>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="glass-card p-6">
          <div class="text-3xl font-bold text-apple-blue mb-2">{{ statistics.totalUsers }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">{{ t('totalUsers') }}</div>
        </div>
        <div class="glass-card p-6">
          <div class="text-3xl font-bold text-green-500 mb-2">{{ statistics.activeUsers }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">{{ t('activeUsers') }}</div>
        </div>
        <div class="glass-card p-6">
          <div class="text-3xl font-bold text-purple-500 mb-2">{{ statistics.totalNotes }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">{{ t('totalNotes') }}</div>
        </div>
        <div class="glass-card p-6">
          <div class="text-3xl font-bold text-orange-500 mb-2">{{ statistics.averageProgress }}%</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">{{ t('averageProgress') }}</div>
        </div>
      </div>

      <div class="glass-card p-8 mb-8">
        <h2 class="text-xl font-bold mb-6 flex items-center gap-2">
          <span>👥</span>
          {{ t('userManagement') }}
        </h2>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="text-left py-3 px-4">{{ t('name') }}</th>
                <th class="text-left py-3 px-4">{{ t('phone') }}</th>
                <th class="text-left py-3 px-4">{{ t('role') }}</th>
                <th class="text-left py-3 px-4">{{ t('registerDate') }}</th>
                <th class="text-left py-3 px-4">{{ t('action') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id" class="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td class="py-4 px-4">{{ user.name }}</td>
                <td class="py-4 px-4">{{ user.phone }}</td>
                <td class="py-4 px-4">
                  <span :class="user.isAdmin ? 'tag-core' : 'tag-practice'">
                    {{ user.isAdmin ? 'Admin' : 'User' }}
                  </span>
                </td>
                <td class="py-4 px-4 text-sm text-gray-500">
                  {{ user.createdAt ? formatDate(user.createdAt) : '-' }}
                </td>
                <td class="py-4 px-4">
                  <button @click="viewUser(user)" class="text-apple-blue hover:underline mr-4">
                    {{ t('viewDetails') }}
                  </button>
                  <button @click="deleteUser(user.id)" class="text-red-500 hover:underline">
                    {{ t('deleteUser') }}
                  </button>
                </td>
              </tr>
              <tr v-if="users.length === 0">
                <td colspan="5" class="py-12 text-center text-gray-500">
                  {{ t('noData') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-if="selectedUser" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="selectedUser = null">
        <div class="glass-card w-full max-w-md">
          <div class="p-8">
            <h2 class="text-xl font-bold mb-6">{{ t('viewDetails') }}</h2>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">{{ t('name') }}</label>
                <p>{{ selectedUser.name }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">{{ t('phone') }}</label>
                <p>{{ selectedUser.phone }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">{{ t('role') }}</label>
                <span :class="selectedUser.isAdmin ? 'tag-core' : 'tag-practice'">
                  {{ selectedUser.isAdmin ? 'Admin' : 'User' }}
                </span>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">{{ t('registerDate') }}</label>
                <p>{{ selectedUser.createdAt ? formatDate(selectedUser.createdAt) : '-' }}</p>
              </div>
            </div>
            <button @click="selectedUser = null" class="btn-outline w-full mt-6">
              {{ t('cancel') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useLocaleStore } from '@/stores/locale'
import { messages } from '@/stores/locale'
import { getStorage } from '@/utils/storage'

const router = useRouter()
const authStore = useAuthStore()
const localeStore = useLocaleStore()

const t = computed(() => (key) => messages[localeStore.lang][key] || key)

const users = ref([])
const selectedUser = ref(null)

const statistics = computed(() => {
  const registeredUsers = getStorage('registeredUsers') || []
  const mockUsers = [
    { id: 1, phone: '13800138000', name: '张三', isAdmin: true, createdAt: '2024-01-01T00:00:00Z' },
    { id: 2, phone: '13900139000', name: '李四', isAdmin: false, createdAt: '2024-02-15T00:00:00Z' },
    { id: 3, phone: '13700137000', name: '王五', isAdmin: false, createdAt: '2024-03-20T00:00:00Z' }
  ]
  const allUsers = [...mockUsers, ...registeredUsers]
  const totalUsers = allUsers.length
  const activeUsers = Math.floor(totalUsers * 0.7)
  const totalNotes = getStorage('notes')?.length || 0
  const averageProgress = 35

  return { totalUsers, activeUsers, totalNotes, averageProgress }
})

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('zh-CN')
}

const viewUser = (user) => {
  selectedUser.value = user
}

const deleteUser = (id) => {
  if (confirm('确定要删除该用户吗？')) {
    users.value = users.value.filter(u => u.id !== id)
  }
}

onMounted(() => {
  if (!authStore.isAdmin) {
    router.push('/')
  }
  const registeredUsers = getStorage('registeredUsers') || []
  users.value = [
    { id: 1, phone: '13800138000', name: '张三', isAdmin: true, createdAt: '2024-01-01T00:00:00Z' },
    { id: 2, phone: '13900139000', name: '李四', isAdmin: false, createdAt: '2024-02-15T00:00:00Z' },
    { id: 3, phone: '13700137000', name: '王五', isAdmin: false, createdAt: '2024-03-20T00:00:00Z' },
    ...registeredUsers
  ]
})
</script>
