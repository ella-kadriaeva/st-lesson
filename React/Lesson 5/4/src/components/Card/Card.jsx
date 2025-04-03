import React from 'react'

const Card = ({id, title, price, onRemove, onEdite}) => {
  return (
    <li>{title} - {price}  
    <button onClick={onRemove}>Remove</button>
    <button onClick={() => onEdite(id, "Edit Param")}>Edit</button>
    </li>
  )
}

export default Card