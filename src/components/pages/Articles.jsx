import React from 'react'
import { useEffect, useState } from 'react';
import { Global } from '../../helpers/Global';

export const Articles = () => {
  const [articles, setArticles] = useState([])
  useEffect(()=>{
    getArticles()
  },[])
  
  const getArticles = async()=>{
    const URL = Global.url+"articles/all-items";
    let petition = await fetch(URL, {method: "GET"});
    let data = await petition.json();
    
    if (data.status === "success") {
      setArticles(data.articles)
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
