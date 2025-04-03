import React, { useEffect, useState } from 'react'
import Loading from './components/Loading/Loading';

const App = () => {
  const [value, setValue] = useState(0)

  const [state, setState] = useState({})

  const [isLoading, setIsLoading] = useState(false);

  const increment = () => {
    // setValue(prevState => {
    //   console.log(prevState)

    //   return prevState + 1;
    // })

    setValue(prevState => prevState + 1)

    // setValue(value += 1)
  }

  const decrement = () => {
    setValue(prevState => prevState - 1)
  }

  const addNewElement = () => {
    setState(prevState => ({ ...prevState, value: 10 }))
  }

  const toggleLoading = () => setIsLoading(!isLoading)
  
  useEffect(()=>{
    console.log("componentDidMount");
  },[])

  useEffect(()=>{
    console.log("componentDidUpdate");
  })

  useEffect(()=>{
    console.log("componentDidUpdate 2");
  }, [value])

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addNewElement}>Add New Element</button>

      <button onClick={toggleLoading}>Loading Click</button>

      {
        isLoading && <Loading />
      }

      <h3>{state?.value}</h3>
      <h2>{value}</h2>
    </div>
  )
}

export default App