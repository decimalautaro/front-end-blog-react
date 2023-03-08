import React from 'react'
import { useEffect, useState } from 'react';
import { Global } from '../../helpers/Global';
import { Petition } from '../../helpers/Petition';
import { ListArticle } from './ListArticle';

export const Articles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    getArticles()
  },[])
  
  const getArticles = async()=>{
    const {datos, loading} = await Petition (Global.url+"articles/all-items", "GET")

    if (datos.status === "success") {
      setArticles(datos.articles)
    }
    setLoading(false)
  }

  return (
   <>
   {loading ? "Cargando..." : ""}
   {
   articles.length >= 1 ? 
   <ListArticle articles={articles} setArticles={setArticles}/> : 
   <h1>NO HAY ARTICULOS</h1>
   
  
  }

   </> 
 )
}
