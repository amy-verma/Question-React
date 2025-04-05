import React, { useState, useEffect } from "react";

const App = () => {
    // const [data, setData] = useState([]);

  
  const fetchData=async ()=>{
    try{
      const response=await fetch("https://jsonplaceholder.typicode.com/posts");
      const data=response.json();
      console.log(data)
    }catch(error){
      console.log(error)
    }finally{
      console.log("ddata fetched succesfully")
    }
  }

    useEffect(() => {
      fetchData()
    }, []);

    return(
      <div>
        {/* <h1>Amit</h1> */}
      </div>
    ) 
};
export default App;
