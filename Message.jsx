import React from 'react'
const Message=()=>{
    let [msg,setMsg]=React.useState("Hello")
    let gmHandler=()=>{
        setMsg("Good Morning")
    }
    let gaHandler=()=>{
        setMsg("Good Afternoon")
    }
    let gnHandler=()=>{
        setMsg("Good Night")
    }
    return (
        <div>
            <h1>Message:{msg}</h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gaHandler}>GA</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}
export default Message;