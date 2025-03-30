// useMmeo
// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
// - helps to increase/enhance the performance of our application

// - usememo is  a react hook that memoizes a computed value,preventing unnecessary recalculation on re-render.
// - It improves the performance by caching  the result and recomputing only when dependencies change

// 2. What problem does useMemo solve?
// - usememo solves the problem of expensive re-calculation by caching result. It helps when a function performs heavy calculation(eg: sorting,filtering) that should not rerender unless necessary

// 3. What is the syntax of useMemo?
// - const memoizedvalue=useMemo(()=>{},[])

// - The first argument is a function that returns the computed value.
// - The second argument is a dependency array [a, b], meaning it will only recompute when a or b changes.


const Card=()=>{
  const [add,setAdd] =useState(0);
  const [minus,setMinus]=useState(100)
  const handleAdd=()=>{
      setAdd((prevadd)=>prevadd+1)
  }
  const handleMinus=()=>{
      setMinus((prevMinus)=>
          prevMinus-1
      )
  }
  // function multiply(){
  //     console.log("*******************")
  //     return add*10 //This function re-runs on every render, even when only minus is updated.
                       //This causes unnecessary calculations, reducing performance.
  // }//this will do the unnecessary render to the minus also
  const multiplication=useMemo(()=>{
       console.log("**************")
      return add*10  //now multiplication will only run when add changes
        //if you click Minus,the componeent still re-renders but multiplication won't re-renders (avoiding unnecessary work)
   
  },[add])
  return (
      <div>
              {multiplication}
          <br></br>
              <button onClick={handleAdd}>Add : {add}</button>
              <button onClick={handleMinus}>Minus:{minus}</button>
      </div>
  )
}

