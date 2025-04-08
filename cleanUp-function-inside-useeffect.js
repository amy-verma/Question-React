// 1. What is a Cleanup Function in React?
// -In react cleanup function is a special function you return from useEfect.
// =It is used to clean up side effects like
// 1. Clearing timers
// 2. Cancelling network requests
// 3. Removing event listners

// Syntax
// useEffect(()=>{

//     return ()=>{
//         //cleanup logic
//     }
// }[])

// 2.  Why Use a Cleanup Function?
// - It prevents memory leaks
// - Unwanted behaviour when components unmounts or re-render
// -Multiple event binding  or intervals

// Example- 
// 1. Clearing setInterval or setTimeout

useEffect(()=>{
    const timer=setInterval(()=>{
        console.log("Running every second")
    },1000)
    return ()=>{
        clearInterval(timer)//cleanup
    }
},[])

// import React, { useState, useEffect } from "react";
// import Counter from "./Counter";

// const App = () => {
//     // const [data, setData] = useState([]);



//     return(
// <div>
//   {/* <Counter/>//cleanup function when the component is unmounted */}
//       </div>
//     ) 
// };
// export default App;
// --------------------------------------------------------


import React, { useEffect, useState } from "react";

const Counter=()=>{
    const [count,setCount]=useState(0);

    const handleIncrement=()=>{
        setCount(count+1)
    }
    const handleDecrement=()=>{
        setCount(count-1)
    }
    useEffect(()=>{
        console.log("useefect called")

        return ()=>{ //this is the clean up function
            console.log("cleanup invoked")//clean up function will be called when the whe the rerenders
        }
    },[])
    console.log("rerendered")

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>

        </div>
    )
}

export default Counter;