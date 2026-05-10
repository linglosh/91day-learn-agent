<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-12">
        <div>
          <h1 class="section-title mb-2">📝 学习笔记</h1>
          <p class="text-gray-600 dark:text-gray-400">记录你的学习心得与思考</p>
        </div>
        <button @click="showEditor = true" class="btn-apple">
          + 新建笔记
        </button>
      </div>

      <div v-if="notes.length === 0" class="glass-card p-12 text-center">
        <div class="text-6xl mb-4">📓</div>
        <h3 class="text-xl font-bold mb-2">还没有笔记</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">开始记录你的学习心得吧</p>
        <button @click="showEditor = true" class="btn-apple">
          创建第一篇笔记
        </button>
      </div>

      <div v-else class="space-y-4">
        <div v-for="note in notes" :key="note.id"
             class="glass-card p-6 hover:shadow-lg transition-all">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold mb-1">{{ note.title }}</h3>
              <p class="text-sm text-gray-500">{{ formatDate(note.createdAt) }}</p>
            </div>
            <div class="flex gap-2">
              <button @click="editNote(note)" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-apple-blue/20 transition-colors">
                ✏️
              </button>
              <button @click="deleteNote(note.id)" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-red-500/20 transition-colors">
                🗑️
              </button>
            </div>
          </div>
          <p class="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">{{ note.content }}</p>
          <div v-if="note.stageId" class="mt-4">
            <span class="text-sm text-apple-blue">📚 关联阶段：第{{ note.stageId }}阶段</span>
          </div>
        </div>
      </div>

      <div v-if="showEditor || editingNote" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closeEditor">
        <div class="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div class="p-8">
            <h2 class="text-2xl font-bold mb-6">{{ editingNote ? '编辑笔记' : '新建笔记' }}</h2>
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium mb-2">标题</label>
                <input v-model="form.title" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-apple-blue transition-colors" placeholder="笔记标题">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">关联阶段（可选）</label>
                <select v-model="form.stageId" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-apple-blue transition-colors">
                  <option value="">不关联</option>
                  <option v-for="i in 8" :key="i" :value="i">第{{ i }}阶段</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">内容</label>
                <textarea v-model="form.content" rows="10" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-apple-blue transition-colors resize-none" placeholder="记录你的学习心得..."></textarea>
              </div>
              <div class="flex gap-4 justify-end">
                <button @click="closeEditor" class="btn-outline px-6 py-3">取消</button>
                <button @click="saveNote" class="btn-apple px-6 py-3">保存</button>
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
import { useNotesStore } from '@/stores/notes'

const notesStore = useNotesStore()
const notes = ref(notesStore.notes)
const showEditor = ref(false)
const editingNote = ref(null)

const form = reactive({
  title: '',
  content: '',
  stageId: ''
})

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const closeEditor = () => {
  showEditor.value = false
  editingNote.value = null
  form.title = ''
  form.content = ''
  form.stageId = ''
}

const editNote = (note) => {
  editingNote.value = note
  form.title = note.title
  form.content = note.content
  form.stageId = note.stageId || ''
}

const saveNote = () => {
  if (!form.title.trim() || !form.content.trim()) {
    alert('请填写标题和内容')
    return
  }
  if (editingNote.value) {
    notesStore.updateNote(editingNote.value.id, { ...form, stageId: form.stageId || null })
  } else {
    notesStore.addNote({ ...form, stageId: form.stageId || null })
  }
  closeEditor()
}

const deleteNote = (id) => {
  if (confirm('确定要删除这篇笔记吗？')) {
    notesStore.deleteNote(id)
  }
}
</script>
