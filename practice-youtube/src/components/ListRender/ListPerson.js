import React from 'react'

function ListPerson({per}) {
    return (
        <div>
            <h2>I am {per.name}. I am {per.age} years old</h2>
        </div>
    )
}
export default ListPerson;