What is a hook?
- In react hooks are special function that allow you to hook into React features (like state and lifecycle method)
 within a function components enable you to manage state and side effects wihout needing class components

 Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.

Purpose:
They simplify component logic, making it easier to manage state, handle side effects, and access other React features. 


Built-in Hooks:
React provides several built-in hooks for common tasks, including:
useState: Manages state within a component. 
useEffect: Handles side effects (e.g., fetching data, setting up subscriptions) after rendering. 
useContext: Accesses data from a React context. 
useCallback: Memoizes a callback function to prevent unnecessary re-renders. 
useMemo: Memoizes the result of a function to prevent unnecessary re-renders. 
useRef: Provides a mutable value that persists across renders. 
useReducer: Manages complex state logic with a reducer function. 
useImperativeHandle: Customizes the value returned from a forwarded ref. 
useLayoutEffect: Similar to useEffect, but runs after the DOM is updated. 
useInsertionEffect: Similar to useEffect, but runs before the DOM is updated. 