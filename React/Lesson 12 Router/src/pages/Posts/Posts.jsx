import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();

            setPosts(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div className="container">
            <ul className='posts'>
                {
                    posts && posts.map((post, index) => (
                        <li key={post.id} className='posts__item'>
                            <h2> <span>{index + 1}</span><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                            <p>{post.body}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Posts