import React, { useEffect } from 'react'

const User = ({id, name, email, remove}) => {
    useEffect(()=>{
        return () => {
            console.log("User ID:", id)
        }
    },[])
  return (
    <li>{id}. {name} ({email}) <button onClick={remove}>Remove</button></li>
  )
}

export default User