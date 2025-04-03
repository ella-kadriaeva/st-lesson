import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementAction, incrementAction } from '../../store/actions/Counter';

const Child = () => {
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(incrementAction())
    }

    const decrement = () => {
        dispatch(decrementAction())
    }

  return (
    <div>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Child