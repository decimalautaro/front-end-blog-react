import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  return (
    <AppBar  position="static" >
    <Toolbar >
      <Typography variant="h3">Blog con React</Typography>
    </Toolbar>
  </AppBar>
  )
}
