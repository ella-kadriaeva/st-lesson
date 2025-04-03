import React, { useEffect } from 'react'

const Loading = () => {

    useEffect(()=>{
        console.log("ComponentDidMount");

        return () => {
            console.log("componentWillUnmount");
        }
    },[])

  return (
    <div>Loading ...</div>
  )
}

export default Loading