import React from "react";

type FirstProps = {
    name? : string
}
export const First = (props : FirstProps) => {
    return(
        <>
            <div>Hello {props.name}</div>
        </>
    )
}