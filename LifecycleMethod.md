React lifecycle-
- the react component lifecycle refers to the different stages a componenet goes through from creation to destruction.
- react provides lifecycle method i:e hooks and functional componenent.
 
 Lifecycle phase in react
1. Mounting (component creation & insertion into the DOM)
2. Updating (component Re-rendering due to state/Prop chnages)
3. Unmounting (compoennt Removal from the DOM)
------------------------------------------------------------------------
1. Mounting Phase(component creation & insertion into the DOM)
This happens when a component is first added to the DOM.

Class Component Lifecycle Methods
1. constructor():Initialize state and binds methods
2. static getDerivedStateFromProps(props, state): Updates state based on props before rendering.
3. render(): Renders JSX to the DOM.
4. componentDidMount(): Runs after the component is mounted; commonly used for API calls.

Functional Component Equivalent (Using Hooks)

useEffect(()=>{
    console.log("Componnet mounted)
    return()
},[])
 
-----------------------------------------------------------------
2. Updating Phase (Component Re-renders due to State/Prop Changes)
Happens when:

1. Props change
2. State changes (via setState or useState)

Functional Component Equivalent (Using Hooks)

useEffect(()=>{
    clg("Component update)
},[state])//Runs when state change

-----------------------------------------------------------------------
3. Unmounting Phase (Component is Removed from the DOM)
Happens when a component is removed.


useEffect(()=>{
    return()=>{
        clg("Component will unmount");
    }
},[])//cleanup function runs on unmount