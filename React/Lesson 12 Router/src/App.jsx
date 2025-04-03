import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Posts from './pages/Posts/Posts'
import Post from './pages/Post/Post'
import Layout from './pages/Layout/Layout'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />  
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="*" element={<h1> Not Found 404 </h1>} />  
      </Route>
    </Routes>
  )
}

export default App