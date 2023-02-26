import React, { useState } from "react";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import IconButton from '@mui/material/IconButton';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import TimeDateCheck from "../TimeDate/TimeDateCheck";


function PopperClock(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return (
        <div>
            {/* onClick={() => NoteBookArchiveOutlinedIconClick(props.note.noteID)} */}
            <IconButton aria-describedby={id} type="button" onClick={handleClick}>
                <PaletteOutlinedIcon fontSize="small" />
            </IconButton>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ }}>
                    <TimeDateCheck/>
                </Box>
            </Popper>
        </div>

    )
}

export default PopperClock;