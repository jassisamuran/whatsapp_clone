import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Menu,MenuItem,styled} from '@mui/material';


const MenuOption=styled(MenuItem)`
    font-size:14px;
    padding: 15px 60px 5px 20px;
    color:#4A4A4A;
`


const HeaderMenu = ({setOpenDrawer}) => {
    const [open,setOpen]=useState(null);
    const handleClose=()=>{
        setOpen(null);
    }
    
    const handleopen=(e)=>{
        setOpen(e.currentTarget);
    }


    return (
    <>
        <MoreVertIcon onClick={handleopen}/>
        <Menu 
            anchorEl={open}
            keepMounted
            open={open}
            getContentAnchorE1={null}
            onClose={handleClose}
            anchorOrigin={{
                vertical:'bottom',
                horizontal:'center'
            }}
            transformOrigin={{
                vertical:'top',
                horizontal:'right', 
            }}
        >
            <MenuOption onClick={()=>{handleClose();setOpenDrawer(true);}}>Profile</MenuOption>    
            
        </Menu>    
    </>
  )
}

export default HeaderMenu
