import React, { useState } from 'react'

const App = () => {
  let [count, setCount] = useState(10);

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

  // let count = 0;

  // let arr = useState(10); // [10, f]

  // let count = arr[0]; // 10
  // let setCount = arr[1]; // f

  // console.log(useState(10))

  const handleIncrement = () => {
    setCount(count += 1);
  }

  const handleDecrement = () => {
    setCount(count -= 1);
  }

  const handleRemovePost = (postId) => {
    console.log("Remove", postId)

    let filteredPosts = posts.filter(item => item.id !== postId);

    setPosts(filteredPosts)
  }

  return (
    <>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

        {count}
      </div>


      <div className='container'>
            <ul className="posts">
                {
                  posts && posts.map(item => <li className="item" key={item.id}>{item.title} <button onClick={() => handleRemovePost(item.id)}>Remove</button></li>)
                }
            </ul>
      </div>
    </>
  )
}

export default App