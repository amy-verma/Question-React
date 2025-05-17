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

Note:
// Here the fallback prop accepts any react element that you want to render while waiting for 
// the componenet to load.
// You can place the suspense component anywhere above the lazy component. 
// You can even wrap multiple lazy component with a single suspense   component