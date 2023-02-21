import React from 'react'
function ChildComponent(props) {
    return(
        <div>
            <button onClick={props.greetHandler }>Greet Parent1</button>
            <button onClick={() => props.greetHandler('childC') }>Greet Parent2</button>
        </div>
    )
}
export default ChildComponent