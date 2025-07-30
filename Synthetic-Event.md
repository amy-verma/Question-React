1. What are Synthetic Events in React?
- In React, when you Handle events like clicks, key Press, form inputs etc.,you are not directly
- using the browser real event system.

- Instead rect gives you something called a Synthetic event 

2. Why are Synthetic Events used?
- Different browsers (like Chrome, Firefox, Safari) sometimes handle events differently.
React uses Synthetic Events to make sure your event-handling code works the same way everywhere, no matter the browser.

3. How do Synthetic Events work?
- React wraps the browser's native events (like click, keydown, etc.) into a SyntheticEvent object.
This object has the same interface as the browser event, but works consistently across browsers.

function MyButton() {
  const handleClick = (event) => {
    console.log("Button clicked!");
    console.log("SyntheticEvent:", event);
    console.log("NativeEvent:", event.nativeEvent);
  };

  return <button onClick={handleClick}>Click Me</button>;
}


1. event is the Synthetic Event created by React.
2. event.nativeEvent is the original browser (native) event.




| Feature                | Synthetic Event (React)                | Native Event (JavaScript/DOM)                |
| ---------------------- | -------------------------------------- | -------------------------------------------- |
| Origin                 | Created by **React**                   | Created by the **browser (DOM)**             |
| Consistency            | Same behavior across all browsers      | Can behave differently in different browsers |
| Event Pooling          | May reuse event objects (pre-React 17) | No pooling, each event is fresh              |
| Access to native event | Yes, via `event.nativeEvent`           | You're already using the native event        |
| Uses JSX               | ✅ Yes                                  | ❌ No (uses `addEventListener`)               |
