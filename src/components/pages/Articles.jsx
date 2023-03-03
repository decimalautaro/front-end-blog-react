import React from 'react'

export const Articles = () => {
  return (
   <>
    <article className='article-item'>
      <div className='mask'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902'/>
      </div>
      <div className="datos">
          <h3 className='title'>Desarrollo web</h3>
            <p className='description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod odit ea dolorum veniam iusto illum laborum quasi blanditiis aliquam, ad, ducimus enim officiis error porro atque perferendis fugit fuga.  
          </p>  
        <button className='edit'>Editar</button>
        <button className='delete'>Eliminar</button>

      </div>
     
    </article>   
   </> 
 )
}
