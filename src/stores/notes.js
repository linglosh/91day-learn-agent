import { defineStore } from 'pinia'
import { getStorage, setStorage } from '@/utils/storage'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: getStorage('notes') || []
  }),
  actions: {
    addNote(note) {
      const newNote = {
        id: Date.now(),
        ...note,
        createdAt: new Date().toISOString()
      }
      this.notes.unshift(newNote)
      setStorage('notes', this.notes)
    },
    updateNote(id, updatedNote) {
      const index = this.notes.findIndex(n => n.id === id)
      if (index !== -1) {
        this.notes[index] = { ...this.notes[index], ...updatedNote, updatedAt: new Date().toISOString() }
        setStorage('notes', this.notes)
      }
    },
    deleteNote(id) {
      this.notes = this.notes.filter(n => n.id !== id)
      setStorage('notes', this.notes)
    }
  }
})
