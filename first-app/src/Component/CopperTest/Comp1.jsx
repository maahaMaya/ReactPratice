import React from "react";
import Copper from "./Copper";

function Comp1() {
    const [color1, setColor] = React.useState({  color: '' })
    const listenToColorPopper1 = (color) => {
        setColor(preState => ({...preState, color:color}))
    }
    return (
        <>
            comp1
            <div style={{ width: '200px', height: 150, border: "1px solid red", backgroundColor: color1.color }}>comp1 </div>
            <Copper listenToColorPopper1={listenToColorPopper1} action="create" />
        </>
    )
}
export default Comp1