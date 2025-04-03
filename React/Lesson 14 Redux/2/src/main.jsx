import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store';

// let initState = {
//     firstName: "John",
//     lastName: "Done",
//     accountNumber: "123456789",
//     balance: 0
// }

// const reducer = (state = initState, {type, payload}) => {
//     // if(action.type === "DEPOSIT"){
//     //     return {...state, balance: state.balance + action.payload}
//     // }else if(action.type === "WITHDRAW"){
//     //     return {...state, balance: state.balance - action.payload}
//     // }else {
//     //     return state;
//     // }

//     switch (type) {
//         case "DEPOSIT":
//             return {...state, balance: state.balance + payload}
//         case "WITHDRAW":
//             return {...state, balance: state.balance - payload}
//         default:
//             return state;
//     }
// }

// const dispatch = (action) => {
//     initState = reducer(initState, action)
// }

// const DEPOSIT = "DEPOSIT"
// const WITHDRAW = "WITHDRAW"

// const depositBalance = (payload) => {
//     return {type: DEPOSIT, payload}
// }

// const withdrawBalance = (payload) => {
//     return {type: WITHDRAW, payload}
// }

// dispatch(depositBalance(100))
// dispatch(withdrawBalance(50))

// // withdraw

// console.log(initState)

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
        <App />
   </Provider>
);
