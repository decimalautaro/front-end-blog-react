import React from 'react'

export const ListArticle = ({articles, setArticles}) => {
  return (
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
     })
  )
}
