// Q. What are custom hook and why do we need it ?
// - A Custom hook is just a normal js funtion that starts witrh word use, and uses react hooks  inside it like useState
// and useEffect

// 1. Custom hooks makes your code cleaner. 
// 2. Help you reuse logic in multiple componenet. 
// 3. not a built in hook 




import useCount from "./useCount"

const App=()=>{

  const [count,handleIncrement,handleDecrement]=useCount()
  return (
    <div>
      <p>{count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
export default App



import { useState } from "react"

const useCount=()=>{
    const [count,setCount]=useState(0)
    const handleIncrement=()=>{
        setCount((prev)=>prev+1)
    }
    const handleDecrement=()=>{
        setCount((prev)=>prev-1)
    }
    return [count,handleIncrement,handleDecrement]
}

export default useCount