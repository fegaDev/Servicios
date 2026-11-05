import {useContext,useState} from 'react'
import { Context } from '../Context/ContextProvider'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import DraftsIcon from '@mui/icons-material/Drafts';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


const Dashboard = ({usuario}) => {

    const [open,setOpen] = useState(false);
    const [openCollapse, setOpenCollapse] = useState(false);
    const {cerrarSesion,formLogin} = useContext(Context);


    const handleClick = () => {
    setOpen(!open);
    }
    const handleClickCollapse = () => {
    setOpenCollapse((prev)=> !prev); //DUDASA
    }


  return (
    <>
        <div>Bienvenidos al dashboard {formLogin.usuario}</div>
           <Button onClick={() => setOpen(true)}>
        Abrir menú
      </Button>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
      >
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClickCollapse}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {openCollapse  ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCollapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>

        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>



      </Drawer>

    <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </>

  )
}

export default Dashboard