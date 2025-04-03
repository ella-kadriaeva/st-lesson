import React, { useContext } from 'react'
import { UserProvider } from './UserContext'
import Screen from './components/Screen/Screen'

const App = () => {
  return (
    <UserProvider>
      <Screen />
    </UserProvider>
  )
}


export default App