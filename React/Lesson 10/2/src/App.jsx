import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { IoHeartOutline, IoHeartSharp  } from "react-icons/io5";

const App = () => {
  const [posts, setPosts] = useState([])

  const [selectType, setSelectType] = useState("1");
  const [selectTypeChildren, setSelectTypeChildren] = useState("1");
  const [search, setSearch] = useState("");
  const [favourite, setFavourite] = useState([]);

  const removePostById = (postId) => {
    let filteredData = posts.map(post => {
      if (post.id === postId) {
        return null;
      }

      post.children = post.children.filter(item => item.id !== postId);

      return post
    }).filter(item => item)

    setPosts(filteredData);

    localStorage.setItem("posts", JSON.stringify(filteredData));
  }

  const handleChangeSelectType = (e) => {
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

    let changePosts;

    if(selectType === "1"){
      changePosts = [...posts, formValues];

      setPosts(changePosts);
    }else {
      changePosts = posts.map(post => {
        if(post.id === selectTypeChildren){
          post.children.push(formValues)
        }

        return post;
      })
      setPosts(changePosts)
    }

 
    localStorage.setItem("posts", JSON.stringify(changePosts));
    e.target.reset()
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const checkFavourite = (postId) => favourite.includes(postId);

  const filteredPosts = search.length > 0 ? posts.filter(post => post.label.toLowerCase().includes(search.toLowerCase())) : posts;

  const favouriteHandler = (postId) => {
    let changeFavourite;

    if(checkFavourite(postId)){
      changeFavourite = favourite.filter(item => item !== postId);

      setFavourite(changeFavourite);
    }else {
      changeFavourite = [...favourite, postId];

      setFavourite(changeFavourite)
    }

    localStorage.setItem('favourite', JSON.stringify(changeFavourite));
  }

  useEffect(() => {
    let postsLocal = JSON.parse(localStorage.getItem('posts'));
    let favouriteLocal = JSON.parse(localStorage.getItem('favourite'));

    if(!postsLocal){
      localStorage.setItem('posts', JSON.stringify([]));
    }else {
      setPosts(postsLocal)
    }

    if(!favouriteLocal){
      localStorage.setItem('favourite', JSON.stringify([]));
    }else {
      setFavourite(favouriteLocal)
    }
   },[])

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

           <div className="search">
              <input type="text" name='label' placeholder='Search Post ...' onChange={handleSearch}/>
           </div>
        </div>
    </div>
      <div className='posts'>
        {
          filteredPosts && filteredPosts.map(post => (
            <div className='item' key={post.id}>
              <div className='post' key={post.id}>
                <h2 className='post__title'>{post.label} {
                  checkFavourite(post.id) 
                    ? <IoHeartSharp className='icon-active' onClick={() => favouriteHandler(post.id)}/> 
                    : <IoHeartOutline className='icon' onClick={() => favouriteHandler(post.id)}/>  
                } </h2>
                <p className='post__desc'>{post.desc}</p>
                <button className='btn' onClick={() => removePostById(post.id)}>Remove</button>
              </div>

              {
                post.children.length > 0 && (
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