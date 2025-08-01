Question 1. When does React batch state updates?
- Here’s when React batches state updates:

1. Inside React event handlers
- When you update state inside a React event handler (e.g., onClick, onChange), React automatically batches the updates into a single re-render.

function Example() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setCount(c => c + 1);
    setFlag(f => !f);
    // Only one re-render
  };

  return <button onClick={handleClick}>Click me</button>;
}

 2. Inside useEffect, useLayoutEffect, or lifecycle methods
 3. Inside React.startTransition
 4. 4. Inside async handlers in React 18+ (with automatic batching)

 ❌ When updates are not batched (React <18 or edge cases)
 - In React 17 or below: setTimeout, Promise.then, etc. would not batch updates unless you manually used unstable_batchedUpdates.