import React, {useState} from 'react'
const Counter=()=>{
    let [counter, setCounter]=useState(0);
    return(
        <div>
            <h1>Counter value:{counter}</h1>
            <button onClick={()=>{
                setCounter(counter-1)
            }}>Decr</button>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>Incr</button>
        
        </div>
    )
}
export default Counter;