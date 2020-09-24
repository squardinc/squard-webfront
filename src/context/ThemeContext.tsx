import * as React from 'react';

type ThemeType = 'dark' | 'light'

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

export const withTheme = (Component: React.FC, theme: ThemeType) =>
  () => {
    React.useContext(ThemeContext).setTheme(theme)
    return <Component />
  }