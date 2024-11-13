import React, {useState} from 'react';
export default function Counter(){
    //useState Hook for updating variable or STATEFUL VARIABLES
    const [count, setCount] = useState(0)
    //to increment count
    const incrementCount = () => {
        //prevoius state => new state
        setCount(c => c + 1)
    }
    //do decrement
    const decrementCount =() => {
        setCount (c => c - 1)
    }
    //to reset the count
    const resetCount = () =>{
        setCount(c => c = 0)
    }

    return(
        <div className="container">
            <p className="counter-container">
                Counter: <br /> {count}
            </p>
            &nbsp;
            <button className="container-increment" onClick = {incrementCount}>Increment</button>
            <button className="container-reset" onClick = {resetCount}>Reset</button>
            <button className="container-decrement" onClick = {decrementCount}>Decrtement</button>
        </div>
    )
}