<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <button @click="goBack" class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-apple-blue transition-colors">
          <span class="text-xl">←</span>
          <span>{{ localeStore.lang === 'zh' ? '返回' : 'Back' }}</span>
        </button>
      </div>

      <div v-if="topic" class="glass-card p-8 animate-fade-in">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg"
               :class="'bg-gradient-to-br ' + topic.color">
            {{ topic.day }}
          </div>
          <div>
            <h1 class="text-2xl font-bold">{{ getTopicTitle() }}</h1>
            <div class="flex items-center gap-3 mt-2">
              <span :class="topic.type === 'core' ? 'tag-core' : topic.type === 'practice' ? 'tag-practice' : 'tag-extend'">
                {{ getTypeLabel() }}
              </span>
              <span class="text-sm text-gray-500">⏱ {{ topic.duration }}</span>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
              <span>📖</span>
              {{ localeStore.lang === 'zh' ? '知识点详解' : 'Detailed Explanation' }}
            </h2>
            <div class="space-y-4">
              <div v-for="(content, index) in topic.content" :key="index"
                   class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                <p v-html="content" class="text-gray-700 dark:text-gray-300 leading-relaxed"></p>
              </div>
            </div>
          </section>

          <section v-if="topic.detail && topic.detail.length > 0">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
              <span>💡</span>
              {{ localeStore.lang === 'zh' ? '深入学习' : 'Deep Learning' }}
            </h2>
            <div class="space-y-4">
              <div v-for="(detail, index) in topic.detail" :key="index"
                   class="p-6 bg-gradient-to-r from-apple-blue/5 to-purple-500/5 rounded-xl border border-apple-blue/20">
                <h3 class="font-bold mb-2 text-gray-800 dark:text-white">{{ detail.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">{{ detail.description }}</p>
                <div v-if="detail.steps && detail.steps.length > 0" class="space-y-2">
                  <div v-for="(step, stepIndex) in detail.steps" :key="stepIndex"
                       class="flex items-start gap-3">
                    <span class="w-6 h-6 rounded-full bg-apple-blue/20 text-apple-blue flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {{ stepIndex + 1 }}
                    </span>
                    <p class="text-gray-700 dark:text-gray-300">{{ step }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section v-if="topic.resources && topic.resources.length > 0">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
              <span>📚</span>
              {{ localeStore.lang === 'zh' ? '学习资源' : 'Learning Resources' }}
            </h2>
            <div class="grid gap-4">
              <a v-for="(resource, index) in topic.resources" :key="index"
                 :href="resource.url" target="_blank"
                 class="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-apple-blue hover:shadow-lg transition-all group">
                <div class="w-12 h-12 rounded-xl bg-apple-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-apple-blue/20 transition-colors">
                  <span class="text-xl">🔗</span>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-gray-800 dark:text-white group-hover:text-apple-blue transition-colors">{{ resource.title }}</h3>
                  <p v-if="resource.description" class="text-sm text-gray-500 truncate">{{ resource.description }}</p>
                </div>
                <span class="text-apple-blue group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </section>

          <section v-if="topic.practice">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🎯</span>
              {{ localeStore.lang === 'zh' ? '实践练习' : 'Practice Exercises' }}
            </h2>
            <div class="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
              <div v-if="topic.practice.tasks && topic.practice.tasks.length > 0" class="space-y-3">
                <div v-for="(task, index) in topic.practice.tasks" :key="index"
                     class="flex items-start gap-3">
                  <span class="w-6 h-6 rounded-full bg-orange-500/20 text-orange-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {{ index + 1 }}
                  </span>
                  <p class="text-gray-700 dark:text-gray-300">{{ task }}</p>
                </div>
              </div>
              <p v-if="topic.practice.hint" class="text-sm text-gray-600 dark:text-gray-400 mt-4 italic">
                💡 {{ topic.practice.hint }}
              </p>
            </div>
          </section>

          <section v-if="topic.notes">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
              <span>✏️</span>
              {{ localeStore.lang === 'zh' ? '学习笔记' : 'Study Notes' }}
            </h2>
            <div class="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
              <p class="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{{ topic.notes }}</p>
            </div>
          </section>

          <div class="pt-8 border-t border-gray-200 dark:border-gray-700">
            <router-link :to="'/plan?stage=' + stageId" class="btn-apple w-full justify-center">
              {{ localeStore.lang === 'zh' ? '返回学习计划' : 'Back to Study Plan' }}
            </router-link>
          </div>
        </div>
      </div>

      <div v-else class="glass-card p-12 text-center">
        <div class="text-6xl mb-4">🔍</div>
        <h2 class="text-xl font-bold mb-2">{{ localeStore.lang === 'zh' ? '未找到该知识点' : 'Topic Not Found' }}</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">{{ localeStore.lang === 'zh' ? '请检查链接是否正确' : 'Please check if the link is correct' }}</p>
        <router-link to="/plan" class="btn-apple">
          {{ localeStore.lang === 'zh' ? '返回学习计划' : 'Back to Study Plan' }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useLocaleStore } from '@/stores/locale'
import { stages } from '@/data/stages'

const router = useRouter()
const route = useRoute()
const localeStore = useLocaleStore()

const topic = ref(null)
const stageId = ref(null)

const getTopicTitle = () => {
  return localeStore.lang === 'zh' ? topic.value?.title : topic.value?.enTitle || topic.value?.title
}

const getTypeLabel = () => {
  if (topic.value?.type === 'core') {
    return localeStore.lang === 'zh' ? '🔴 核心必学' : '🔴 Core Learning'
  } else if (topic.value?.type === 'practice') {
    return localeStore.lang === 'zh' ? '🟡 高频实战' : '🟡 High-frequency Practice'
  } else {
    return localeStore.lang === 'zh' ? '🟢 拓展提升' : '🟢 Extended Learning'
  }
}

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/plan')
  }
}

onMounted(() => {
  const { stage, day } = route.params
  stageId.value = stage
  
  const stageData = stages.find(s => s.id === parseInt(stage))
  if (stageData) {
    const topicData = stageData.topics.find(t => t.day === parseInt(day))
    if (topicData) {
      topic.value = { ...topicData, color: stageData.color }
    }
  }
})
</script>
