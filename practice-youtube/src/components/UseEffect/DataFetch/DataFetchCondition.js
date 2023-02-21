import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchCondition() {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPosts(res.data)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            {posts.title}
        </div>
    )
}
export default DataFetchCondition;