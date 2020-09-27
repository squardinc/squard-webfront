import * as React from 'react'

type ThemeType = 'dark' | 'light' | 'gray' | 'light-gray'

interface ThemeContextInterface {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}
export const ThemeContext = React.createContext<ThemeContextInterface>({
  theme: 'dark',
  setTheme: (theme: ThemeType) => { },
})
export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<ThemeType>('dark')
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export const withTheme = (Component: React.FC, componentTheme: ThemeType) =>
  () => {
    const { theme, setTheme } = React.useContext(ThemeContext)
    React.useEffect(() => {
      setTheme(componentTheme)
    }, [theme])
    return < Component />
  }
