// 1. What is useReducer and how does it differ from useState?
// - It is a react hook used for state management
// - Alternative of useState hook,especially when state logic is complex or involves multiple transition
// - unlike use state, which directly updates the state, useReducer delegates states to reducer function

// Understanding useReducer Hook
// The useReducer hook is an alternative to useState for managing complex state logic in React. It takes in:
//1. A reducer function that determines how the state should change.
//2. An initial state value.
// It returns an array with:
//1. The current state value.
//2. A dispatch function to trigger state updates.


// 3. How does dispatch work in useReducer?

// -here action is done by dispatch function by sending an action to the reducer
// - the action is usually an object with a type property
// dispatch({type:"Increment")

// 4. 6. How is useReducer different from Redux?


// Feature             	useReducer                      	            Redux
// Scope           	Local to a component            	        Global state management
// Reducers                	Defined inside a component	            Defined in separate files
// Middleware	        No middleware support	                        Supports middleware like Redux Thunk
// Data Flow	            Component-level	                            Centralized store


import React from "react";
import {useReducer} from "react";

let initialState=0;
let reducer=(state,action)=>{
        switch(action.type){
            case "Increment":
                return state+1;
            case  "Decrement":
                return state-1;
            default:
                return state;
        }
}

const App=()=>{
    const [count,dispatch]=useReducer(reducer,initialState);
    return (
        <div>
            <h1>Count{count}</h1>
        <button onClick={()=>{
            dispatch({type:"Increment"})
        }} >Increment</button>
            <button onClick={()=>{
                dispatch({type:"Decrement"})
            }}>Decrement</button>
        </div>
    )
}

export default App;