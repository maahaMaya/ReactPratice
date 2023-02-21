import React from 'react';
import ListPerson from './ListPerson';

function PersonChild() {
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
    const personsList = persons.map(per => <ListPerson key={per.id} per={per} />)
    return(
        <div>{ personsList }</div>
    )
}
export default PersonChild;