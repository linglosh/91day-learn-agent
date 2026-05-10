<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="section-title">📚 学习计划</h1>
        <p class="text-gray-600 dark:text-gray-400">8大阶段 · 91天系统化学习</p>

        <div class="flex justify-center gap-8 mt-8">
          <div class="text-center">
            <div class="text-3xl font-bold text-gradient">{{ completedCount }}</div>
            <div class="text-sm text-gray-500">已完成天数</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-gray-900 dark:text-white">{{ totalDays }}</div>
            <div class="text-sm text-gray-500">总天数</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-apple-blue">{{ progressPercentage }}%</div>
            <div class="text-sm text-gray-500">完成进度</div>
          </div>
        </div>
      </div>

      <div class="flex gap-2 mb-8 overflow-x-auto pb-4 scrollbar-hide">
        <button v-for="stage in stages" :key="stage.id"
          @click="activeStage = stage.id"
          :class="['px-4 py-2 rounded-full whitespace-nowrap transition-all',
                   activeStage === stage.id ? 'bg-apple-blue text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700']">
          {{ stage.id }}. {{ stage.name }}
        </button>
      </div>

      <div v-for="stage in stages" :key="stage.id"
           v-show="activeStage === stage.id"
           class="space-y-6 animate-fade-in">
        <div class="glass-card p-8">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold"
                 :class="'bg-gradient-to-br ' + stage.color">
              {{ stage.id }}
            </div>
            <div>
              <h2 class="text-2xl font-bold">{{ stage.name }}</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ stage.description }}</p>
            </div>
          </div>

          <div class="grid gap-4">
            <div v-for="topic in stage.topics" :key="topic.day"
                 @click="goToTopicDetail(stage.id, topic.day, $event)"
                 class="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-apple-blue hover:shadow-lg transition-all cursor-pointer group">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-bold text-gray-600 dark:text-gray-400 group-hover:bg-apple-blue group-hover:text-white transition-all">
                  {{ topic.day }}
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <h3 class="text-lg font-bold group-hover:text-apple-blue transition-colors">{{ topic.title }}</h3>
                    <span v-if="topic.type === 'core'" class="tag-core">🔴核心必学</span>
                    <span v-else-if="topic.type === 'practice'" class="tag-practice">🟡高频实战</span>
                    <span v-else class="tag-extend">🟢拓展提升</span>
                    <span class="text-apple-blue opacity-0 group-hover:opacity-100 transition-opacity ml-auto">→</span>
                  </div>
                  <div class="text-sm text-gray-500 mb-3">⏱️ {{ topic.duration }}</div>
                  <ul class="space-y-2 mb-4">
                    <li v-for="(item, idx) in topic.content" :key="idx"
                        class="text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span v-html="item"></span>
                    </li>
                  </ul>
                  <div v-if="topic.resources && topic.resources.length > 0" class="space-y-2">
                    <div class="text-sm font-semibold text-gray-600 dark:text-gray-400">📚 学习资源：</div>
                    <div class="grid gap-2">
                      <a v-for="(res, idx) in topic.resources" :key="idx"
                         :href="res.url" target="_blank"
                         @click.stop
                         class="flex items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-apple-blue/10 transition-colors group">
                        <span class="text-apple-blue">→</span>
                        <span class="text-sm text-gray-700 dark:text-gray-300 group-hover:text-apple-blue">{{ res.title }}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <button @click.stop="toggleDay(stage.id, topic.day)"
                        :class="['w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all',
                                 isCompleted(stage.id, topic.day) ? 'border-green-500 bg-green-500 text-white' : 'border-gray-300 dark:border-gray-600 hover:border-apple-blue']">
                  <span v-if="isCompleted(stage.id, topic.day)">✓</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { stages } from '@/data/stages.js'
import { useProgressStore } from '@/stores/progress'

const route = useRoute()
const router = useRouter()
const progressStore = useProgressStore()
const activeStage = ref(1)
const totalDays = 91

onMounted(() => {
  if (route.query.stage) {
    activeStage.value = parseInt(route.query.stage)
  }
})

const completedCount = computed(() => progressStore.completedCount)
const progressPercentage = computed(() => progressStore.progressPercentage)

const toggleDay = (stageId, day) => {
  const key = `${stageId}-${day}`
  progressStore.toggleDay(key)
}

const isCompleted = (stageId, day) => {
  const key = `${stageId}-${day}`
  return progressStore.isDayCompleted(key)
}

const goToTopicDetail = (stageId, day, event) => {
  // 如果点击的是完成按钮或链接，不跳转
  if (event.target.closest('button') || event.target.closest('a')) {
    return
  }
  router.push({ name: 'TopicDetail', params: { stage: stageId, day } })
}
</script>
