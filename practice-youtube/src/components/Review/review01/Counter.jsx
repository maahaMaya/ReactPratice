import React, { useState } from 'react';

function Counter(props)  {

    const [val , setVal] = useState(1);
    const AdditionVal = () => {
        setVal(val+1)
        props.childParent(val)
    }
    const SubVal = () => {
        setVal(val-1)
        props.childParent(val)
    }
    return(
        <div>
            <button onClick={AdditionVal}>Add</button>
            <button onClick={SubVal}>Sub</button>
            {props.hi}
        </div>
    )
}
export default Counter;