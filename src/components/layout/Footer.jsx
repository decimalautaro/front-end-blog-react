import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Blog con REACT
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Desarrollado por Lautaro Decima
        </Typography>
        
      </Box>
  )
}
