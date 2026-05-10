const STORAGE_PREFIX = 'agent_learning_'

export function getStorage(key) {
  try {
    const item = localStorage.getItem(STORAGE_PREFIX + key)
    return item ? JSON.parse(item) : null
  } catch {
    return null
  }
}

export function setStorage(key, value) {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value))
  } catch {
    console.error('存储失败')
  }
}

export function removeStorage(key) {
  localStorage.removeItem(STORAGE_PREFIX + key)
}
