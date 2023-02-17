import React, { useState } from 'react';

function HookCounterTwo() {
    const initalCount = 0;
    const [count, setCount] = useState(initalCount);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count + 1)
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <br />
            Count : {count}
            <button onClick={() => setCount(initalCount)}> Reset </button>
            {/* <button onClick={() => setCount(count + 1)}> Inc </button>
            <button onClick={() => setCount(count - 1)}> Dec </button> */}
            <button onClick={() => setCount(prevCount => prevCount + 1)}> Inc </button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}> Dec </button>
            <button onClick={incrementFive}>FiveAdd</button>
        </div>
    )
}
export default HookCounterTwo;