import React, {useState} from 'react';
export default function CounterImprove(){
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
    //increment by 5
    const increment5Count = () =>{
        setCount(c => c + 5)
    }
    //decrement by 5
    const decrement5Count = () =>{
        setCount(c => c - 5)
    }
    const randomCount = () => {
        if (count < 0) {
          setCount(Math.floor(Math.random() * 100));
        }
        else if (count < 100) {
            setCount(Math.floor(Math.random() * -100));
        }
        else {
            setCount(0);
        }
    }
    return(
        <div className="container">
            <p className="counter-container">
                Counter: <br /> {count}
            </p>
            &nbsp;
            <button className="container-increment" onClick = {incrementCount}>Add by 1</button>
            <button className="container-increment5" onClick = {increment5Count}>Add by 5</button>
            <button className="container-decrement" onClick = {decrementCount}>Minus by 1</button>
            <button className="container-deccrement5" onClick = {decrement5Count}>Minus by 5</button>
            <button className="container-random" onClick = {randomCount}>Random</button>
            <button className="container-reset" onClick = {resetCount}>Reset</button>
        </div>
    )
}