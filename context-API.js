// Q. WHAT IS context API in react?
// A. The context API in React is a way to manage and share global state across your
// application without passing props manually  at every level(prop drilling)

// Q. Why Use Context API?
// - Whe  you have a data like user login status,theme setting or language prefered
// that needs to be accessed by many componenets across the app, passing props
//  through each intermediate component becomes messy.
//  - Context solves this by allowing componenets to sunscribe to global data

// 1. Create Context

// import {createContext} from "react"

// const MyContext=createContext();

// -------

// 2. ProvideContext
// <MyContext.Provider value={name}>
//     <class/>
// </MyContext.Provider>
// -------
// 3. ConsumeContext
// import {useContext} from "react"

// const value=useContext(Mycontext)//
