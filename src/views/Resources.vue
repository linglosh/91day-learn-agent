<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <h1 class="section-title text-center mb-4">📚 学习资源库</h1>
      <p class="text-center text-gray-600 dark:text-gray-400 mb-12">精心整理的Agent学习资源，点击即可访问</p>

      <div class="grid gap-8">
        <div v-for="category in resources" :key="category.category" class="glass-card p-8">
          <div class="flex items-center gap-3 mb-6">
            <span class="text-3xl">{{ category.icon }}</span>
            <h2 class="text-2xl font-bold">{{ category.category }}</h2>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <a v-for="(item, idx) in category.items" :key="idx"
               :href="item.url" target="_blank"
               class="group p-5 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-apple-blue/50 hover:bg-apple-blue/5 transition-all">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-apple-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-apple-blue/20 transition-colors">
                  <span class="text-apple-blue">🔗</span>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-apple-blue transition-colors mb-1">
                    {{ item.title }}
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <button @click="copyAllLinks" class="btn-outline">
          📋 一键复制全部链接
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import resources from '@/data/resources.json'

const copyAllLinks = () => {
  const links = resources.flatMap(cat => cat.items.map(item => `${item.title}: ${item.url}`)).join('\n')
  navigator.clipboard.writeText(links).then(() => {
    alert('所有链接已复制到剪贴板！')
  })
}
</script>
