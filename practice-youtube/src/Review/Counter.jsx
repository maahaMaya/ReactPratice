import React, { useState } from 'react';

function Counter()  {

    const [val , setVal] = useState(1);
    const AdditionVal = () => {
        setVal(val+1)
    }
    const SubVal = () => {
        setVal(...prev, {val-1})
    }
    return(
        <div>
            {val}
            <button onClick={AdditionVal}>Add</button>
            <button onClick={SubVal}>Sub</button>
            <button onClick={AddFive}>Sub</button>
        </div>
    )
}
export default Counter;