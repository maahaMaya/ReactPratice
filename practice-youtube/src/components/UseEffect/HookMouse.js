import React, { useEffect, useState } from 'react';

function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0)
    const logMousePostion = e => {
        console.log('Mouse Evevnt')
        setX( e.clientX)
        setY( e.clientY)
    }
    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener('mousemove', logMousePostion)

        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePostion)
        }
    }, [])
    
    return (
        <div>
           HOOKS  X - {x} Y - {y}
        </div>
    )
}
export default HookMouse;
