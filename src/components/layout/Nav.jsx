import * as React from 'react';
import {useState} from 'react'
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='nav'>
      <ul>
        <li><NavLink to="/home">Inicio</NavLink></li>
        <li><NavLink to="/articles">Articulos</NavLink></li>
        <li><NavLink to="/create-article">Crear articulo</NavLink></li>



      </ul>
    </nav>
  )

  }


  