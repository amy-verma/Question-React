1. What is the role of keys in React’s reconciliation process?

1.  What is Reconciliation in React?
- React’s reconciliation is the process it uses to update the DOM efficiently when the state or props of a component change.
- Instead of re-rendering everything from scratch, React diffs the current virtual DOM with the new one, and only updates what's necessary.

🧷 What is the Role of key?
- The key helps React identify which elements have changed, been added, or removed.
🔍 Why this matters:
- Without key, React compares element by index and may reuse the dom nodes incrrectly leading to
- Incorrect redering
- Unnecessary re-render