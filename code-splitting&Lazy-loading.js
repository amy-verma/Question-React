Before:
// import OtherComponent from './OtherComponent';

After
// const OtherComponent=React.lazy(()=>import('./OtherComponent'))

// This will automatically load the bundle containing Other component when this componenet is 
// first rendered

// React.lazy takes a function that must call a dynamic import(). This must return a promise which 
// resolves to a module with a default export containing recat component

// The lazy component should be then rendered inside a Suspense Component,which allows us to show some
// fallback component (such as loading indicator) while we are waiting for the lazy component to load

import React,{Suspense} from "react";

const OtherComponent=React.lazy(()=>import('./OtherComponent'));

const MyComponent=()=>{
    return(
        <div>
            <Suspense fallback={<div>Loading....</div>}>
                <OtherComponent/> 
            </Suspense>
        </div>
    )
}

// Note:
// Here the fallback prop accepts any react element that you want to render while waiting for 
// the componenet to load.
// You can place the suspense component anywhere above the lazy component. 
// You can even wrap multiple lazy component with a single suspense   component
// -----------------------------------------------------------------
// Code Splitting

//1.  What is it?
// Code splitting is a technique to split your code into smaller bundles so the browser doesn’t 
// need to download everything at once. This helps improve your app's initial load time.

// 2. Why use it?
// Faster page load
// Efficient resource usage
// Better user experience

// With Code Splitting (Dynamic Import)
import React, { Suspense } from 'react';

const About = React.lazy(() => import('./About'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </div>
  );
}

// ----------------------------------------------------------------
// Lazy Loading
// 1. What is it?
// Lazy loading is a technique where you delay loading of a component or asset until it's needed, 
// like scrolling to a section, navigating to a route, etc.

// 2. Why use it?
// Reduces initial load
// Improves performance
// Saves bandwidth

// 3. How They Work Together
// - Code Spliting 
// - create chunks(seperate JS Files) for different component or routes
// - Lazy-loading ensure these chunks are only fetched and executed when required

// ----------
// Code Splitting via import():

// const About=React.lazyThis(()=>import("./about"))
// This create a seperate for About.js during the build

// -------------
// Lazy-loading via Suspense:
// <Suspense fallback={<div>Loading...</div>}>
//     <About/>
// </Suspense>
// This tells the React to load the component only when needed

// ✅ Why Implement Lazy Loading for Images? (Piyush)
// -  1. Improves Initial Page Load Speed

// Without lazy loading, the browser tries to load all images immediately, even those far down the page.
// With lazy loading, images are only loaded when they’re about to enter the viewport (i.e., become visible).
// 🏎️ Faster load = better user experience and lower bounce rates.

//  2. Reduces Bandwidth Usage
//  - Saves mobile data and speeds up browsing for users on slow connections.

// 3. Enhances Performance Metrics (LCP, FCP, etc.)
// Lazy loading improves Core Web Vitals like:
// LCP (Largest Contentful Paint)
// FCP (First Contentful Paint)
// TTI (Time to Interactive)

// 4. Improves Server Load Efficiency

// 5. Better UX on Long or Image-Heavy Pages
// Users can interact with content sooner.
// Scroll feels smoother without waiting for massive images to load.

