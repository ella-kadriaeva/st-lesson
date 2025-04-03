import React, { useState } from 'react'
import Parent from './components/Parent/Parent';

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    // <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`app ${theme === `light` ? `bg-light` : `bg-dark`}`}>
          <button onClick={toggleTheme}>Toggle Theme</button>

          <Parent theme={theme}/>
      </div>
    // </ThemeContext.Provider>
  )
}

export default App