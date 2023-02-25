import React, { useState } from "react";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import IconButton from '@mui/material/IconButton';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';


function Copper(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const pickcolor = (c1) => {
        if (props.action === "create") {
            console.log("color comming from note2")
            props.listenToColorPopper1(c1)
        } else if (props.action === "update") {
            console.log("color comming from note3")
            props.listenToColorPopper2(c1)
        }
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return (
        <div>
            {/* onClick={() => NoteBookArchiveOutlinedIconClick(props.note.noteID)} */}
            <IconButton aria-describedby={id} type="button" onClick={handleClick}>
                <PaletteOutlinedIcon fontSize="small" />
            </IconButton>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', width: 300, display: 'flex', justifyContent: 'space-between' }}>
                    {
                        colors.map(color => (
                            <div style={{ width: 20, height: 20, border: '1px solid red', borderRadius: 100, backgroundColor: color }} onClick={() => pickcolor(color)}></div>
                        ))
                    }
                </Box>
            </Popper>
        </div>

    )
}

export default Copper;