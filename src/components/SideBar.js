import React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
import { routes } from '../Routes';
import { useHistory } from 'react-router';

export const SideBar = () => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handlePushHistory = (route) => {
    history.push(route);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        > 
          <List>
            <ListItem button key={0}>
              <ListItemIcon>
                <AssignmentIndIcon/>
              </ListItemIcon>
              <ListItemText primary={'Equipo 6'} />
            </ListItem>
        	</List>
         
          <Divider />
          <List>
            {routes.map((route, index) => {
              return(
                <ListItem button key={index} onClick={() => {handlePushHistory(route.path)}}>
                  <ListItemIcon>
                    <route.icon/>
                  </ListItemIcon>
                  <ListItemText primary={route.name} />
                </ListItem>
                )
            })}
     
          </List>
        </Box>
      );
    
      return (
        <div>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap onClick={handleDrawerOpen} style={{cursor: 'pointer'}}>
            Abrir Menu
          </Typography>
        </Toolbar>

          <Drawer
            anchor='left'
            open={open}
            onClose={() => handleDrawerClose()}
          >
            {list('left')}
          </Drawer>
        </div>
      );
    }