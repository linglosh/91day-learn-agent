<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="section-title">🚀 实战项目</h1>
        <p class="text-gray-600 dark:text-gray-400">展示你的学习成果，记录成长轨迹</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.id" class="glass-card overflow-hidden group">
          <div class="h-48 bg-gradient-to-br from-apple-blue/20 to-purple-500/20 flex items-center justify-center">
            <span class="text-6xl">{{ project.icon }}</span>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                    class="px-3 py-1 bg-apple-blue/10 text-apple-blue text-xs rounded-full">
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-3">
              <a :href="project.github" target="_blank"
                 class="flex-1 py-2 px-4 rounded-xl border border-gray-200 dark:border-gray-700 text-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                📂 GitHub
              </a>
              <a :href="project.demo" target="_blank"
                 class="flex-1 py-2 px-4 rounded-xl bg-apple-blue text-white text-center text-sm font-medium hover:bg-apple-blue-dark transition-colors">
                🎯 Demo
              </a>
            </div>
          </div>
        </div>

        <div class="glass-card p-6 flex flex-col items-center justify-center text-center min-h-[320px] border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-apple-blue/50 transition-colors cursor-pointer" @click="showAddModal = true">
          <span class="text-5xl mb-4">➕</span>
          <p class="text-gray-600 dark:text-gray-400">添加你的项目</p>
        </div>
      </div>

      <div v-if="showAddModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="showAddModal = false">
        <div class="glass-card w-full max-w-lg">
          <div class="p-8">
            <h2 class="text-2xl font-bold mb-6">添加项目</h2>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-2">项目名称</label>
                <input v-model="newProject.title" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900" placeholder="我的Agent项目">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">项目描述</label>
                <textarea v-model="newProject.description" rows="3" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 resize-none" placeholder="简要描述你的项目..."></textarea>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">技术栈</label>
                <input v-model="newProject.technologies" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900" placeholder="Vue3, LangChain, OpenAI (用逗号分隔)">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">GitHub链接</label>
                <input v-model="newProject.github" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900" placeholder="https://github.com/...">
              </div>
              <div class="flex gap-4 justify-end mt-6">
                <button @click="showAddModal = false" class="btn-outline px-6 py-3">取消</button>
                <button @click="addProject" class="btn-apple px-6 py-3">添加</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const showAddModal = ref(false)
const newProject = reactive({
  title: '',
  description: '',
  technologies: '',
  github: '',
  demo: '#'
})

const projects = ref([
  {
    id: 1,
    title: '智能对话助手',
    description: '基于LangChain和OpenAI构建的智能对话助手，支持多轮对话和上下文记忆',
    icon: '💬',
    technologies: ['LangChain', 'OpenAI', 'Vue3'],
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 2,
    title: 'RAG知识库问答',
    description: '结合RAG技术构建的企业知识库问答系统，支持文档上传和智能检索',
    icon: '📚',
    technologies: ['LlamaIndex', 'ChromaDB', 'FastAPI'],
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 3,
    title: '多Agent协作平台',
    description: '使用AutoGen框架构建的多Agent协作系统，实现复杂任务的自动分解与执行',
    icon: '🤖',
    technologies: ['AutoGen', 'Python', 'Docker'],
    github: 'https://github.com',
    demo: '#'
  }
])

const addProject = () => {
  if (!newProject.title.trim()) {
    alert('请填写项目名称')
    return
  }
  projects.value.push({
    id: Date.now(),
    ...newProject,
    technologies: newProject.technologies.split(',').map(t => t.trim()).filter(Boolean)
  })
  showAddModal.value = false
  Object.assign(newProject, { title: '', description: '', technologies: '', github: '', demo: '#' })
}
</script>
