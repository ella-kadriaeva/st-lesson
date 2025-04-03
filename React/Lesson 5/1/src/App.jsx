import React, { useState } from 'react'
import Todos from './components/Todos/Todos'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

const App = () => {

  const [nav, setNav] = useState([
    {
      id: "1",
      label: "Home",
      path: "/"
    },
    {
      id: "2",
      label: "About",
      path: "/about"
    },
    {
      id: "3",
      label: "Contact",
      path: "/contact"
    },
    {
      id: "4",
      label: "Posts",
      path: "/posts"
    },
    {
      id: "5",
      label: "Admin",
      path: "/admin"
    },
  ])

  return (
    <div className='container'>
      <h2 className='title'>todos</h2>

      <Todos />
    </div>

    // <>
    //   <Navbar data={nav}/>

    //   <Header />

    //   <Content />

    //   <Footer />
    // </>
  )
}

export default App