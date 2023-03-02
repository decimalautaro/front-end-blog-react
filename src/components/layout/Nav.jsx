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
    <nav className='nav'>
      <ul>
        <li><a href='#'>Inicio</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Contacto</a></li>

      </ul>
    </nav>
  )

  }


  