import React from 'react'
import { useState } from 'react'
import { useForm } from "../../hooks/useForm";

export const Create = () => {

  const {form, send, change} = useForm({})

  const saveArticle = (e)=>{
    e.preventDefault;
    let newArticle = JSON.stringify(form);
  }

  return (
    <div className='home'>
    <h1>Crear articulo.</h1>
    <pre>{JSON.stringify(form)}</pre>
    <form className='form' >
      <div className='form-grup'>
        <label  htmlFor='title'>Titulo</label>
        <input type="text" name="title" onChange={change}/>
      </div>

      <div className='form-grup'>
        <label  htmlFor='content'>Contenido</label>
        <textarea type="text" name="content" onChange={change} />
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
