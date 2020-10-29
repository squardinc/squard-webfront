const KEYS = ['previous_path'] as const

export type LocalStorageKey = typeof KEYS[number]

export const setItem = (key: LocalStorageKey, value: string) => localStorage.setItem(key, value)

export const getItem = (key: LocalStorageKey) => localStorage.getItem(key) || ''

export const removeItem = (key: LocalStorageKey) => localStorage.removeItem(key)

export const getPreviousPath = () => {
  return getItem('previous_path') || '/'
}
