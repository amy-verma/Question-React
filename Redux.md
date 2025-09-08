1. Click on the add button->It will dipatch an action->call a reducer function->which updates the slice of the Redux store->Then the header component is subscribed using a selector-UI will be got updated automatically

-useSelector

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
6. useSelector- A hook to access/identify/read what portion of the store i need to read/need to subscribe to
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

Question 1. 15. Why did you choose Redux over Context API?(Piyush)

- i choose redux over context api because the application requires centralized, prdictable
state management, advanced tooling like time-travel debugging and middleware support(for async optn),which Context API alone doesn't provide efficiently at scale.


| Feature                        | Context API                              | Redux                                     |
| ------------------------------ | ---------------------------------------- | ----------------------------------------- |
| Purpose                        | Prop drilling replacement (static state) | Global state container (dynamic state)    |
| Built-in Middleware            | ❌ No                                     | ✅ Yes (e.g., `redux-thunk`, `redux-saga`) |
| Debugging Tools                | ❌ Minimal                                | ✅ DevTools with time travel, tracing      |
| Performance (frequent updates) | ❌ May trigger unnecessary re-renders     | ✅ Fine-grained control with reducers      |
| Boilerplate / Complexity       | ✅ Simple to start                        | ❌ More setup (but scalable)               |
| Community & Ecosystem          | 👎 Smaller                               | 👍 Large, well-tested ecosystem           |


🧰 When to Prefer Redux
- Complex app app state (authentication, user roles , pagination, async data fetching)
- Shared state across many components
- Need for middleware(logging,caching,async flows)
- Time-travel debugging

🚫 Why Not Just Context?
- Context re-renders all consumers whenever the context value changes—even if they don’t use the part that changed.
- No built-in way to handle side effects, async flows, or undo/redo logic.
- Harder to manage large-scale state trees.

