import { INCREMENT, DECREMENT } from "../actions/Counter";

const initState = {
    value: 0,
    name:"John"
}

const CounterReducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, value: state.value + 1}
        case DECREMENT:
            return {...state, value: state.value -  1}
        default:
            return state;
    }
}

export default CounterReducer;