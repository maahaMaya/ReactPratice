import React from "react";

export default function Child1(props) {
    let message = "Hello everyone"
    const sendMessge = () => {
        props.child1Message(message)
    }
    return(
        <>
        <h1>Child 1</h1>
            <button onClick={sendMessge}>Send Meaage</button>
        </>
    )
}