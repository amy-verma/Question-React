// 1. Minimize DOM Manipulations
// 1. DOM chages are expensive 
// 2. In React, let React manage the DOM instead of manually selecting or updating
// ------------------------------------------------------------------------------------


// 2. Efficient Loops
// 1.Prefer for loop or for...of over .forEach() for performance-critical areas.

// -------------------------------------------------------------------------------------
// 3. Use Map/Set instead of Array when checking for presence

// //  Slower
// if (arr.includes(value))

//     // ✅ Faster
//     const set = new Set(arr);
//     if (set.has(value))
// -----------------------------------------------------------------------------------------
// 4. Debounce or Throttle Expensive Functions
    
// Use for search, resize, scroll, or input handlers.

// import debounce from 'lodash.debounce';

// const debouncedSearch = debounce((val) => {
//   console.log(val);
// }, 300);
// ---------------------------------------------------------------------------------

// 5. Avoid Memory Leaks
// 1. Clean up intervals, event listeners, or subscriptions

// useEffect(()=>{
//     const interval=setInterval(...);
//     return (()=> clearInterval(interval))
// },[])

// --------------------------------------------------------------------------------------

// 6. Minify and Compress Your Code
// Use tools like:

// - Terser
// - UglifyJS
// ---------------------------------------------------------------------------------

// 7. Avoid Deep Copying Objects Repeatedly
// - Avoid JSON.parse(JSON.stringify(obj)) unless necessary
// -Use shallow clones with {...obj} or Object.assign()

// ------------------------------------------------------------------------------------------
// 8. Avoid Unnecessary Variables and Redundant Code

// // X Inefficient
// let sum=0;
// for(let i=0;i<Array.length;i++){
//     sum +=arr[i]
// }

// //cleaner 
// const sum=arr.reduce((acc,curr)=>acc+curr,0)
// ----------------------------------------------------------------------------------------
//  9. Memoize Expensive Calculations
//  const factorial = memoize(function(n) {
//     if(n === 0) return 1;
//     return n * factorial(n - 1);
//   });    
//   You can use libraries like memoizee or lodash.memoize.
// ---------------------------------------------------------------------------------

// 10. Use Web Workers for Heavy Tasks
//   If you're running something CPU-intensive (e.g., image processing,
//    large array loops), use Web Workers so your main thread doesn’t block the UI.