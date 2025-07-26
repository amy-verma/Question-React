// Error Boundary are special react component that catch js error in their child componnet tree during.
// 1. Rendering
// 2. lifecycle method
// 3. Constructors

// They help prevent the entire app  from crashing by gracefully handling error and displaying  a fallback ui

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so fallback UI is shown
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to an error tracking service
    console.error("Error caught:", error);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}
