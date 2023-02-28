import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Nav } from './Nav'

export const Header = () => {
  return (
    <AppBar  position="static" >
    <Toolbar >
      <Nav/>
      <Typography  variant="h3">Blog con React</Typography>
    </Toolbar>
  </AppBar>
  )
}
