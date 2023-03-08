import React from 'react'

export const Create = () => {
  return (
    <div className='home'>
    <h1>Crear articulo.</h1>
    <form className='form'>
      <div className='form-grup'>
        <label  htmlFor='title'>Titulo</label>
        <input type="text" name="title" />
      </div>

      <div className='form-grup'>
        <label  htmlFor='content'>Contenido</label>
        <textarea type="text" name="content" />
      </div>

      <div className='form-grup'>
        <label  htmlFor='file'>Imagen</label>
        <input type="file" name="file" />
      </div>

      <input type='submit' value="Guardar" className='btn btn-success'/>
    </form>
    </div>
  )
}
