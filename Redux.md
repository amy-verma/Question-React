- React Redux is a library that helps manage application state in React apps using Redux,
- A predictable state container
- It allows your componenets to access and update the global state in a cleanand structured way.

- Redux is a library for JS Application
- You can use Redux together with React or with any other view library(Angular,Vue)
- Redux is a state container
  ex-Registration form

Core Concepts of Redux

1. Store-Central place to hold the state.
2. Action- Describe the changes in state of application
3. reducer-Actually carries out the state transition depending on the state
4. Reducers:Pure function that takes the current state and action and return a new state
5. Provider- A React component that makes the Redux store availableto the app
6. useSelector- A hook to access the state from the store
7. useDispatch - A hook to dispatch the actions

STEPS

1. create store
2. Provide the store to our application
3. create slice(cart slice)
4. Add slice reducer onto the store - dispatch(action)
5. Providing the store- selector

6. Create Store
   import {configureStore} "@reduxjs/toolkit"
   const appStore=configureStore({
   reducer:{
   cart:cartSlice
   }
   })

7. Provide store to out application on the root file  
   import {Provider} from "react-redux"
   import appStore from ".utils/appStore"

return(
<Provider store={appStore}>//takes store as a props by default

<Header>
<Body>//just like a UserContext provider we hace redux store provider
    </Provider>
)

3. Create Cart Slice
   import {createSlice} from "@reactjs/toolkit"

const cartSlice=createSlice({
reducer:{
name:'cart',
initialState:{
item:[]
},
reducer:{
addItem:(state,action)=>{
state.item.push(item.payload)
},
removeItem:(state)=>{
state.item.pop(item.payload)
},
clearCart:(state)=>{
return {item:[]}
}
}
}
})
export {addItem,removeItem,clearItem}=cartSlice.actions;

## export default cartSlice.reducers;

Read the data from the cart i:e subscribe to the store using useSelector() hook 4. Header.js
import {useSelector} from 'react/redux'

const cart =useSelector((store)=>store.cart.item)//what portion of store needs to be read

<li>Cart({cartItems.length} items)</li>

5. Onclick of an item we will- Dispatch an action

import {useDispacth} from "react-redux";
import {addItem} from "react-redux";

const dispatch=useDispatch()//here the dispatch is a function

<button onClick={handleOnlick}>Add+</button>

const handleOnlick=()=>{
//dispatch an action
dispatch(addItem("pizza"))
}

{
payload:"pizza"//so whenever u'll dispatch the action redux will create a object and it will
create a payload inside the object and it will add whatever data you have added and it will take this object and pass it as the second object on the create slice page
}

Main Componenets of Redux

1. Store
2. Action
3. Reducer
