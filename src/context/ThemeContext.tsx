import * as React from 'react';

type ThemeType = 'dark' | 'light'

export const ThemeContext = React.createContext({
  theme: '',
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
