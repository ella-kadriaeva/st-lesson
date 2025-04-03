import React, { useState } from 'react'
import Post from './components/Post/Post';

const App = () => {
  let [value, setValue] = useState("")

  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Title 1"
    },
    {
      id: "2",
      title: "Title 2"
    },
    {
      id: "3",
      title: "Title 3"
    }
  ]);


  const handleRemovePost = (postId) => {
    console.log("Remove", postId)

    let filteredPosts = posts.filter(item => item.id !== postId);

    setPosts(filteredPosts)
  }

  const handleChangeValue = (e) => {
    setValue(e.target.value)
  }

  const handleAddProduct = () => {
    setPosts([...posts, {id: Math.random(), title: value}]);
  }

  return (
    <>
      <div className='container'>

        <div>
          <input type="text" onChange={handleChangeValue}/>
          <button onClick={handleAddProduct}>ADD POST</button>
          <h2>{value}</h2>
        </div>

        <ul className="posts">
          {
            posts && posts.map(item => <Post
               key={item.id} 
               title={item.title} 
               handleRemovePost={() => handleRemovePost(item.id)}/>
              )
          }
        </ul>
      </div>
    </>
  )
}

export default App