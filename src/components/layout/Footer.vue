<template>
  <footer class="bg-gray-100 dark:bg-gray-900 mt-24">
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-br from-apple-blue to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold">
              AI
            </div>
            <span class="font-semibold text-lg text-gray-900 dark:text-white">Agent 学习路线</span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
            91天系统化学习，从零基础到全栈 Agent 开发工程师。专为新手设计，循序渐进，步步为营。
          </p>
        </div>

        <div>
          <h4 class="font-semibold text-gray-900 dark:text-white mb-4">快速链接</h4>
          <div class="space-y-3">
            <router-link to="/plan" class="block text-gray-600 dark:text-gray-400 hover:text-apple-blue transition-colors">学习计划</router-link>
            <router-link to="/resources" class="block text-gray-600 dark:text-gray-400 hover:text-apple-blue transition-colors">资源库</router-link>
            <router-link to="/projects" class="block text-gray-600 dark:text-gray-400 hover:text-apple-blue transition-colors">项目展示</router-link>
          </div>
        </div>

        <div>
          <h4 class="font-semibold text-gray-900 dark:text-white mb-4">联系我们</h4>
          <p class="text-gray-600 dark:text-gray-400">有问题或建议？</p>
          <p class="text-gray-600 dark:text-gray-400 mt-2">欢迎交流学习！</p>
        </div>
      </div>

      <div class="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-500 dark:text-gray-500">© 2024 Agent 学习路线站. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <span class="tag-core text-xs">🔴 核心必学</span>
          <span class="tag-practice text-xs">🟡 高频实战</span>
          <span class="tag-extend text-xs">🟢 拓展提升</span>
        </div>
      </div>
    </div>
  </footer>
</template>
