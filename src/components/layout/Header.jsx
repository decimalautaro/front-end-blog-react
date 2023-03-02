import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Nav } from './Nav'

export const Header = () => {
  return (
      <header className='header'>
          <div className='logo'>
              <div className='play'></div>
          </div>
          <h1>Mi Blog con React</h1>
      </header>
  )
}
