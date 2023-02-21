import React from 'react'
function NameList() {
    const name = ["Hii", "Everyone", "Ji"]
    const nameLi = name.map((na, index) => <h2 key={na}>{index}{na}</h2>)
    return <div> {nameLi} </div>
        // <div>
        //     {
        //         name.map(name => <h2>{na}</h2>)
        //     }
        // </div>
    
}
export default NameList;