<template>
  <div class="min-h-screen">
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-apple-blue/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-apple-blue/10 rounded-full mb-8">
          <span class="w-2 h-2 bg-apple-blue rounded-full animate-pulse"></span>
          <span class="text-sm font-medium text-apple-blue">{{ localeStore.lang === 'zh' ? '91天系统化学习路线' : '91-Day Systematic Learning Path' }}</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span class="text-gradient">AI Agent</span>
          <br>
          <span class="text-gray-900 dark:text-white">{{ localeStore.lang === 'zh' ? '从零到全栈' : 'From Zero to Full Stack' }}</span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {{ localeStore.lang === 'zh' ? '专为新手设计，8大阶段循序渐进，掌握Agent开发核心技能' : 'Designed for beginners, 8 phases step by step, master Agent development core skills' }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <router-link to="/plan" class="btn-apple text-lg px-8 py-4">
            {{ localeStore.lang === 'zh' ? '开始学习' : 'Start Learning' }} →
          </router-link>
          <router-link to="/resources" class="btn-outline text-lg px-8 py-4">
            {{ localeStore.lang === 'zh' ? '查看资源' : 'View Resources' }}
          </router-link>
        </div>

        <div class="grid grid-cols-3 gap-8 max-w-xl mx-auto">
          <div>
            <div class="text-4xl font-bold text-gradient">91{{ localeStore.lang === 'zh' ? '天' : ' Days' }}</div>
            <div class="text-sm text-gray-500 mt-1">{{ localeStore.lang === 'zh' ? '系统学习' : 'Systematic Learning' }}</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-gradient">8{{ localeStore.lang === 'zh' ? '阶段' : ' Phases' }}</div>
            <div class="text-sm text-gray-500 mt-1">{{ localeStore.lang === 'zh' ? '循序渐进' : 'Step by Step' }}</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-gradient">100%</div>
            <div class="text-sm text-gray-500 mt-1">{{ localeStore.lang === 'zh' ? '实战导向' : 'Practice Oriented' }}</div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <span class="text-2xl">↓</span>
      </div>
    </section>

    <section class="py-24 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="section-title text-center mb-4">{{ localeStore.lang === 'zh' ? '学习标签说明' : 'Learning Tags' }}</h2>
        <p class="text-center text-gray-600 dark:text-gray-400 mb-12">{{ localeStore.lang === 'zh' ? '明确区分学习内容的重要程度' : 'Clearly distinguish the importance of learning content' }}</p>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="glass-card p-8 text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-3xl flex items-center justify-center">
              <span class="text-3xl">🔴</span>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ localeStore.lang === 'zh' ? '核心必学' : 'Core Learning' }}</h3>
            <p class="tag-core mx-auto">E53E3E</p>
            <p class="text-gray-600 dark:text-gray-400 mt-4 text-sm">{{ localeStore.lang === 'zh' ? 'Agent开发的核心知识点，必须完全掌握' : 'Core knowledge points for Agent development, must master' }}</p>
          </div>

          <div class="glass-card p-8 text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900/30 rounded-3xl flex items-center justify-center">
              <span class="text-3xl">🟡</span>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ localeStore.lang === 'zh' ? '高频实战' : 'High-frequency Practice' }}</h3>
            <p class="tag-practice mx-auto">F6AD55</p>
            <p class="text-gray-600 dark:text-gray-400 mt-4 text-sm">{{ localeStore.lang === 'zh' ? '日常开发中经常使用的技能，需要多练习' : 'Frequently used skills in daily development, need more practice' }}</p>
          </div>

          <div class="glass-card p-8 text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-3xl flex items-center justify-center">
              <span class="text-3xl">🟢</span>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ localeStore.lang === 'zh' ? '拓展提升' : 'Extended Learning' }}</h3>
            <p class="tag-extend mx-auto">48BB78</p>
            <p class="text-gray-600 dark:text-gray-400 mt-4 text-sm">{{ localeStore.lang === 'zh' ? '进阶内容，有余力可以深入学习' : 'Advanced content, learn deeper if you have time' }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-4 bg-gray-100 dark:bg-gray-900/50">
      <div class="max-w-6xl mx-auto">
        <h2 class="section-title text-center mb-4">{{ localeStore.lang === 'zh' ? '8大阶段概览' : '8 Phases Overview' }}</h2>
        <p class="text-center text-gray-600 dark:text-gray-400 mb-12">{{ localeStore.lang === 'zh' ? '从小白到全栈Agent开发工程师的完整路径' : 'Complete path from beginner to full-stack Agent developer' }}</p>

        <div class="relative">
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-apple-blue via-purple-500 to-teal-500 hidden md:block"></div>

          <div class="space-y-6">
            <div v-for="(stage, index) in stages" :key="stage.id"
                 class="glass-card p-6 md:pl-24 relative md:h-32 flex items-center">
              <div class="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"
                   :class="'bg-gradient-to-br ' + stage.color">
                {{ index + 1 }}
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <h3 class="text-xl font-bold">{{ localeStore.lang === 'zh' ? stage.name : stage.enName }}</h3>
                  <span class="text-sm text-gray-500">{{ stage.days }} {{ localeStore.lang === 'zh' ? '天' : 'days' }}</span>
                </div>
                <p class="text-gray-600 dark:text-gray-400">{{ localeStore.lang === 'zh' ? stage.description : stage.enDescription }}</p>
              </div>
              <router-link :to="'/plan?stage=' + stage.id" class="text-apple-blue hover:underline text-sm">
                {{ localeStore.lang === 'zh' ? '查看详情' : 'View Details' }} →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="section-title mb-4">{{ localeStore.lang === 'zh' ? '准备好开始你的Agent开发之旅了吗？' : 'Ready to start your Agent development journey?' }}</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8">{{ localeStore.lang === 'zh' ? '91天，每天坚持，你将收获一个全新的自己' : '91 days, keep learning every day, you will gain a new self' }}</p>
        <router-link to="/plan" class="btn-apple text-lg px-8 py-4">
          {{ localeStore.lang === 'zh' ? '立即开始' : 'Get Started' }} →
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLocaleStore } from '@/stores/locale'

const localeStore = useLocaleStore()

const stages = [
  {
    id: 1,
    name: "基础认知",
    enName: "Basic Concepts",
    days: 7,
    color: "from-blue-500 to-cyan-400",
    description: "了解Agent核心概念与基础架构",
    enDescription: "Understand Agent core concepts and basic architecture"
  },
  {
    id: 2,
    name: "三大基础组件",
    enName: "Three Core Components",
    days: 10,
    color: "from-purple-500 to-pink-400",
    description: "掌握规划、记忆、工具调用三大核心能力",
    enDescription: "Master planning, memory, and tool calling capabilities"
  },
  {
    id: 3,
    name: "单Agent基础架构",
    enName: "Single Agent Architecture",
    days: 7,
    color: "from-green-500 to-emerald-400",
    description: "深入理解单Agent的完整运行机制",
    enDescription: "Deep understanding of single Agent operation mechanism"
  },
  {
    id: 4,
    name: "常用工具接入",
    enName: "Tool Integration",
    days: 7,
    color: "from-orange-500 to-amber-400",
    description: "掌握主流工具与API的集成方法",
    enDescription: "Master mainstream tool and API integration methods"
  },
  {
    id: 5,
    name: "Agent四大范式",
    enName: "Four Agent Paradigms",
    days: 7,
    color: "from-red-500 to-rose-400",
    description: "学习Agent的核心设计范式",
    enDescription: "Learn core Agent design paradigms"
  },
  {
    id: 6,
    name: "RAG+Agent融合",
    enName: "RAG+Agent Fusion",
    days: 14,
    color: "from-indigo-500 to-blue-400",
    description: "掌握RAG与Agent的深度结合",
    enDescription: "Master RAG and Agent integration"
  },
  {
    id: 7,
    name: "多Agent协作",
    enName: "Multi-Agent Collaboration",
    days: 14,
    color: "from-violet-500 to-purple-400",
    description: "多Agent系统的设计与实现",
    enDescription: "Design and implementation of multi-agent systems"
  },
  {
    id: 8,
    name: "实战落地项目",
    enName: "Practical Project",
    days: 25,
    color: "from-teal-500 to-cyan-400",
    description: "完整项目实战与部署上线",
    enDescription: "Complete project practice and deployment"
  }
]
</script>
