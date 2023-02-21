import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchButton() {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleChange = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                setPosts(res.data)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type='button' onClick={handleChange}> Fetch Post</button>
            {posts.title}
        </div>
    )
}
export default DataFetchButton;