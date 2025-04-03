import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      label: "Post 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sit.",
      children: [
        {
          id: "11",
          label: "Child 1",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sit.",
        },
        {
          id: "12",
          label: "Child 2",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sit.",
        }
      ]
    },
    {
      id: "2",
      label: "Post 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sit.",
      children: []
    },
    {
      id: "3",
      label: "Post 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sit.",
      children: [
        {
          id: "31",
          label: "Child 1",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sit.",
        },
        {
          id: "32",
          label: "Child 1",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sit.",
        }
      ]
    },
  ])

  const [selectType, setSelectType] = useState("1")
  const [selectTypeChildren, setSelectTypeChildren] = useState("1")

  const removePostById = (postId) => {
    let filteredData = posts.map(post => {
      if (post.id === postId) {
        return null;
      }

      post.children = post.children.filter(item => item.id !== postId);

      return post
    }).filter(item => item)

    setPosts(filteredData)
  }

  const handleChangeSelectType = (e) => {
    console.log(e.target.value);
    setSelectType(e.target.value);
  }

  const handleChangeSelectChildren = (e) => {
    setSelectTypeChildren(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    let formValues = {
      id: uuidv4(),
      label: formData.get("label"),
      desc: formData.get("desc"),
      children: []
    }

    if(selectType === "1"){
      setPosts([...posts, formValues])
    }else {
      setPosts(posts.map(post => {
        if(post.id === selectTypeChildren){
          post.children.push(formValues)
        }

        return post;
      }))
    }
  }


  return (
    <>
    <div className='actions'>
        <div className="actions-header">
            <select name="" id="" onChange={handleChangeSelectType}>
                <option value="1">Main</option>
                <option value="2">Children</option>
            </select>

            {
              selectType === "2" && (
                <select id="select-post" onChange={handleChangeSelectChildren}>
                      <option disabled selected>Select</option>
                      {
                        posts && posts.map(post => <option key={post.id} value={post.id}>{post.label}</option>)
                      }
                </select>
              )
            }
        </div>

        <div className="actions-content">
           <form className="form" onSubmit={onSubmit}>
              <input type="text" name='label'/>
              <input type="text" name='desc'/>
              <button>ADD POST</button>
           </form>
        </div>
    </div>
      <div className='posts'>
        {
          posts && posts.map(post => (
            <div className='item' key={post.id}>
              <div className='post' key={post.id}>
                <h2 className='post__title'>{post.label}</h2>
                <p className='post__desc'>{post.desc}</p>
                <button className='btn' onClick={() => removePostById(post.id)}>Remove</button>
              </div>

              {
                post.children && (
                  <div className="item-children">
                    {
                      post.children.map((postSub) => (
                        <div className="post-sub" key={postSub.id}>
                          <h2 className='post-sub__title'>{postSub.label}</h2>
                          <p className='post-sub__desc'>{postSub.desc}</p>
                          <button className='btn' onClick={() => removePostById(postSub.id)}>Remove</button>
                        </div>
                      ))
                    }
                  </div>
                )
              }

            </div>
          ))
        }
      </div>
    </>
  )
}

export default App