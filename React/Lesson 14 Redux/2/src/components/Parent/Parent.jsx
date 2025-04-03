import React from 'react'
import Child from '../Child/Child'

const Parent = ({increment}) => {
  return <Child increment={increment}/>
}

export default Parent