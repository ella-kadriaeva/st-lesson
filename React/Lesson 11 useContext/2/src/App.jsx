import React, { useState } from 'react'
import Parent from './components/Parent/Parent';
import { ThemeContext } from './ThemeContext';

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`app ${theme === `light` ? `bg-light` : `bg-dark`}`}>
          <button onClick={toggleTheme}>Toggle Theme</button>

          <Parent/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App

// Условие:
// 1. Создайте приложение React, которое управляет языком интерфейса (Language) через контекст.
// 2. В приложении должна быть кнопка для переключения языка
// 3. У вас есть несколько уровней компонентов: App, Parent, Child, и GrandChild.
// 4. Компонент GrandChild должен отображать текущий язык, но GrandChild не должен получать язык через пропсы.

// Задание:
// Шаг 1: Создайте контекст для хранения текущего языка и функции для его изменения.
// Шаг 2: В компоненте App настройте LanguageContext.Provider и реализуйте кнопку для переключения языка.
// Шаг 3: Удалите передачу языка через пропсы. Используйте useContext в GrandChild для получения текущего языка из контекста.
// Шаг 4 (опционально): Добавьте стили для отображения языка.