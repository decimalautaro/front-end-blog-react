import React from 'react'
import { useState } from 'react'
import { useForm } from "../../hooks/useForm";
import { Petition } from "../../helpers/Petition";
import { Global } from '../../helpers/Global';

export const Create = () => {

  const {form, send, change} = useForm({})
  const [ result, setResult] = useState(false)

  const saveArticle =  async(e) => {
    e.preventDefault();

    let newArticle = form;

    const { datos, loading } = await Petition(Global.url+"articles/create-article", "POST", newArticle)

    if(datos.status === "success"){
      setResult(true);
    }
    console.log(datos)
      
  }

  return (
    <div className='home'>
    <h1>Crear articulo.</h1>
    <pre>{JSON.stringify(form)}</pre>
    <strong> {result ? "Articulo guardado con exito!!" : "asd"} </strong>
    <form className='form' onSubmit={saveArticle} >
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
