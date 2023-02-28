import * as React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import {useState} from 'react'
export const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <div>
      <MenuIcon onClick={toggleDrawer(true)} />
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={() => console.log('Home')}>
            <ListItemIcon>
   
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => console.log('About')}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={() => console.log('Contact')}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  )

  }


  