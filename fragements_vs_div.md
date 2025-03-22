Difference Between <> </> (React Fragments) and <div> </div> in React

- Both are used to wrap multiplr elements inside a componenet,but have key difference

1.  Using <div>...</div> (Regular HTML Tag)

function Example() {
  return (
    <div>
      <h1>Title</h1>
      <p>This is a paragraph.</p>
    </div>
  );
}

Pros
- Works like a normal HTML <div>.
-  Groups multiple elements together.

Cons:
- Adds an extra <div> to the DOM, which might affect styling and layout (especially in flex/grid layouts).
====================================================================================
2.  Using <>...</> (React Fragment)

function Example() {
  return (
    <>
      <h1>Title</h1>
      <p>This is a paragraph.</p>
    </>
  );
}

Pros:
- No extra wrapper <div> in the DOM (keeps the structure clean).
- Useful when returning multiple elements from a component without affecting styling.
- Improves performance slightly (fewer DOM nodes).

 Cons:
- Cannot have key attributes (use <React.Fragment key={someKey}>...</React.Fragment> instead).
====================================================================================


