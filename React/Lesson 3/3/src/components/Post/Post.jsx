import React from 'react'

const Post = ({title, handleRemovePost}) => {
  return (
    <li className="item">{title} <button onClick={handleRemovePost}>Remove</button></li>
  )
}

export default Post