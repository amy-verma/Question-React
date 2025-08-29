// HTML form elements works bit differently from other DOM elements in React

//The form has the default behaviour of browsing to new page when the user submits the form 
// If you want this behaviour in react,it just works.But in most cases it's convenient to have a JS function that 
// handles the submission of the form and has access to the data that the userf entered into the form. The standard
// way to achieve this is with a technique called controlled Component


//react takes the control of the form data using state 

//CONTROL COMPONENTS

import React, { useState } from "react";

const App = () => {
  const [name,setName]=useState()
  const [pswd,setPswd]=useState()

  const handleChange=(e)=>{
    console.log(e.target.value)
    const capsName=(e.target.value).toUpperCase();
    setName(capsName)
  }
  const handlePassword=(e)=>{
    console.log(e.target.value)
    setPswd(e.target.value)//it returns the current selected input
  }
    return (
        <div>
        <form>
          <label>First Name:</label>
          <input type="text" value={name} onChange={handleChange}/>
          <label>Password:</label>
          <input type="text" value={pswd} onChange={handlePassword}/>          
        </form>
        </div>
    );
};
export default App;
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// UNCONTROLLED COMPONENT 
// 1. In uncontrolled componenet the data is controlled by DOM Element 
//2.To write uncontrolled componenet instead of writting an event handler for every state update, you can use a ref
// to get form valueesfrom the DOM



// import React, { useRef } from "react";

// const App = () => {
//   const refObject=useRef();
  
//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     console.log(refObject.current.value)
//   }
 
//     return (
//         <div>
//         <form onSubmit={handleSubmit}>
//           <label>First Name:</label>
//           <input type="text" ref={refObject}/>
//           <button>Submit</button>
                   
//         </form>
//         </div>
//     );
// };
// export default App;
