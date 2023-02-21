import React from 'react';

function NameListPerson() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    const personsList = persons.map(per => <h2>I am {per.name}. I am {per.age} years old</h2>)
    return(
        <div>{ personsList }</div>
    )
}
export default NameListPerson;