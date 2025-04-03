import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const Post = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({});
  const { postId } = useParams();

  const fetchPost = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await response.json();

      setPost(data);
    }catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    fetchPost();
  }, [postId])

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/");

  return (
    <div className="container">
        <button onClick={goBack}>Back</button>
        <div className="post">
            <h1 className="post__title">{post?.title}</h1>
            <p className="post__desc">{post?.body}</p>
        </div>
    </div>
  )
}

export default Post