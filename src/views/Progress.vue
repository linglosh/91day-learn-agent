<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <h1 class="section-title text-center mb-4">📊 学习进度</h1>
      <p class="text-center text-gray-600 dark:text-gray-400 mb-12">追踪你的91天学习之旅</p>

      <div class="glass-card p-8 mb-8">
        <div class="flex items-center justify-between mb-4">
          <span class="text-lg font-semibold">总体进度</span>
          <span class="text-2xl font-bold text-apple-blue">{{ progressPercentage }}%</span>
        </div>
        <div class="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-apple-blue to-purple-500 rounded-full transition-all duration-500"
               :style="{ width: progressPercentage + '%' }"></div>
        </div>
        <p class="text-center text-gray-600 dark:text-gray-400 mt-4">
          已完成 {{ completedCount }} / {{ totalDays }} 天
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div v-for="stage in stages" :key="stage.id" class="glass-card p-4 text-center">
          <div class="w-10 h-10 mx-auto mb-2 rounded-xl flex items-center justify-center text-white font-bold text-sm"
               :class="'bg-gradient-to-br ' + stage.color">
            {{ stage.id }}
          </div>
          <div class="text-sm font-medium mb-1">{{ stage.name }}</div>
          <div class="text-xs text-gray-500">{{ getStageCompleted(stage.id, stage.topics.length) }} / {{ stage.topics.length }}</div>
        </div>
      </div>

      <div class="glass-card p-8">
        <h2 class="text-xl font-bold mb-6">每日打卡</h2>
        <div v-for="stage in stages" :key="stage.id" class="mb-8 last:mb-0">
          <h3 class="font-semibold mb-4 flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  :class="'bg-gradient-to-br ' + stage.color">{{ stage.id }}</span>
            {{ stage.name }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <button v-for="topic in stage.topics" :key="topic.day"
                    @click="toggleDay(stage.id, topic.day)"
                    :class="['w-10 h-10 rounded-xl text-sm font-medium transition-all',
                             isCompleted(stage.id, topic.day)
                               ? 'bg-green-500 text-white'
                               : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-apple-blue/20']">
              {{ topic.day }}
            </button>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <button @click="resetProgress" class="btn-outline text-red-500 border-red-300 hover:border-red-500">
          重置所有进度
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { stages } from '@/data/stages.js'
import { useProgressStore } from '@/stores/progress'

const progressStore = useProgressStore()
const totalDays = 91

const completedCount = computed(() => progressStore.completedCount)
const progressPercentage = computed(() => progressStore.progressPercentage)

const getStageCompleted = (stageId, total) => {
  let count = 0
  for (let day = 1; day <= total; day++) {
    if (progressStore.isDayCompleted(`${stageId}-${day}`)) count++
  }
  return count
}

const toggleDay = (stageId, day) => {
  progressStore.toggleDay(`${stageId}-${day}`)
}

const isCompleted = (stageId, day) => {
  return progressStore.isDayCompleted(`${stageId}-${day}`)
}

const resetProgress = () => {
  if (confirm('确定要重置所有学习进度吗？此操作不可撤销。')) {
    window.location.reload()
  }
}
</script>
