import React from 'react'
import { useEffect, useState } from 'react';
import { Global } from '../../helpers/Global';
import { Petition } from '../../helpers/Petition';

export const Articles = () => {
  const [articles, setArticles] = useState([])
  useEffect(()=>{
    getArticles()
  },[])
  
  const getArticles = async()=>{
    const {datos, loading} = await Petition (Global.url+"articles/all-items", "GET")

    if (datos.status === "success") {
      setArticles(datos.articles)
    }
  }

  return (
   <>
   {
   articles.length >= 1 ? (
   articles.map(article =>{
      return (
        <article key={article._id} className='article-item'>
        <div className='mask'>
          <img src={article.image}/>
        </div>
        <div className="datos">
            <h3 className='title'>{article.title}</h3>
              <p className='description'>
              {article.content}
            </p>  
          <button className='edit'>Editar</button>
          <button className='delete'>Eliminar</button>
  
        </div>
       
      </article> 
      )
   })) :
   (
    <h1>NO HAY ARTICULOS</h1>
   )
  
  }

   </> 
 )
}
