import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='home'>
      <h1>Bienvenido a mi blog con react.</h1>
      <p>Blog desarrollado con MEARN Stack (Mongo, Express, React, Nodejs).</p>

      <Link to="/articles" className='button'>Ver los articulos.</Link>
    </div>
  )
}
