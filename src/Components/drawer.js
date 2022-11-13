import React,{useState} from 'react';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Menu } from '@material-ui/icons';
import IconButton from '@mui/material/IconButton';

const PAGES = ["Home", "To Buy", "To Sell", "About Us", "logout"];
const DrawerComp=()=>{
    
const [openDrawer, setOpenDrawer]= useState(false);

    return(
        <React.Fragment>
            <Drawer open={openDrawer} onclose={()=> setOpenDrawer(false)} sx={{background:"lightBlue"}}>
                <List>
{
    PAGES.map((page,index)=>(
        <ListItemButton onClick={()=> setOpenDrawer(false)} key={index}>
                        <ListItemIcon>
                            <ListItemText>
                              {page}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
    ))
}
                </List>
            </Drawer>
            <IconButton onClick ={()=>setOpenDrawer(!openDrawer) }  sx={{color:"white"}}>
                <Menu/>
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;