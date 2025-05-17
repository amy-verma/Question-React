// lifting the state means
// When two or more child components needs to access or modify the same piece of state,that
// should be stored in their common parent component


// "Lifting the state up means passing data from a child component to its parent component."

// That's exactly what's happening — the child collects some data (like a name from an input),
//  and then sends it to the parent using a function the parent gave it.


// --------PARENT COMPONENET----------------------
// import Child from "./Child";

// const App=()=>{
//     function getData(data){//passed the function as a prop
//         console.log(data)
//     }
//     return(
//         <div>
//            <Child getData={getData}/>
//         </div>
//     )
// }
// export default App;
// --------------------------------------------------------------------------
// CHILD COMPONENET------------------
// import { useState } from "react";

// const Child=(props)=>{
//     const [name,setName]=useState("")
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         props.getData(name)
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//            <button>Submit</button>
//         </form>
//     )
// }
// export default Child;