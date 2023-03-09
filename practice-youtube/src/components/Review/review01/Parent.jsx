import React, { useState } from "react";
import Counter from "./Counter";
export default function Parent() {
    const [xx, setXx] = useState(0);
    const childParent = (y) => {
        setXx(y)
    }
    return(
        <>
            {xx}
            <Counter childParent={childParent} hi="Hello"/>
        </>
    )
}