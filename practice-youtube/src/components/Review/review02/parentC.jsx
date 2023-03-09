import React, { useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

export default function ParentC() {
    const [mess, setMess] = useState('');
    const child1Message = (val) => {
        setMess(val)
    }
    return(
        <>
            <Child1 child1Message={child1Message}/>
            <br/>
            <Child2 mess={mess}/>
        </>
    )
}