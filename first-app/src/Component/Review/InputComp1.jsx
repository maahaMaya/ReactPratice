import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import DisplayComp2 from './DisplayComp2';

function InputComp1() {
    const [message, setMeassage] = useState('')
    const PrintMsg = (e) => {
        console.log(e.target.value)
        setMeassage(e.target.value)
    }
    return(
        <>
        <TextField onChange={PrintMsg} id="outlined-basic" label="Outlined" variant="outlined" />
        
        <DisplayComp2 message={message}/>
        </>
    )
}
export default InputComp1;