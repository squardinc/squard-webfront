const KEYS = ['previous_path'] as const

export type LocalStorageKey = typeof KEYS[number]

export const setItem = (key: LocalStorageKey, value: string) => localStorage.setItem(key, value)

export const getItem = (key: LocalStorageKey) => localStorage.getItem(key) || ''

export const removeItem = (key: LocalStorageKey) => localStorage.removeItem(key)

export const getPreviousPath = () => {
  const previousPath = getItem('previous_path') || '/'
  removeItem('previous_path')
  return previousPath
}
