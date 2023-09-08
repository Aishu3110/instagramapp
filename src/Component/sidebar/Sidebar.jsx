import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MessageIcon from '@mui/icons-material/Message';

Sidebar.propTypes = {
  
    window: PropTypes.func,
  };
  export default function Sidebar(props){
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    
    const drawer = (
        <div>
            <Box
component="img"
sx={{
height: 100,
width: 250,
maxHeight: { xs: 233, md: 167 },
maxWidth: { xs: 350, md: 250 },
}}
alt="insta logo"
src="https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration-958x575.png"
/>
          <Toolbar />
          <Divider />
          <List>
            {['Home', 'Search', ' Explore', 'Reels'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[' Messages', 'Notifications', 'Create', 'Profile'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <MessageIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      );
      const container = window !== undefined ? () => window().document.body : undefined;
return(
    <>
    <Box sx={{ display: 'flex' }}>
  <CssBaseline />
  <AppBar
    position="fixed"
    
  >
  </AppBar>
  <Box
    component="nav"
    sx={{  flexShrink: { sm: 0 } }}
    aria-label="mailbox folders"
  >
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, 
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box',  },
      }}
    >
      {drawer}
    </Drawer>
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box',  },
      }}
      open
    >
      {drawer}
    </Drawer>
  </Box>
</Box></>
)
}