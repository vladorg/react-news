import React from "react";
import { Link } from "react-router-dom";

import { routesMap, setUrl } from '~r'

const categoriesGrid = ({categories}) => {

  const items = categories.map(item => {
    const url = setUrl('category', {category: item.href} )

    return (
      <Link key={item.id} to={url} className="card categoriesGrid__item col col-3 border-0 text-white">
        <div className="categoriesGrid__wrap">
          <div className="categoriesGrid__img">
            <img src={item.thumb} className="card-img" alt={item.placeholder}/>
          </div>              
          <div className="card-img-overlay">
            <p className="card-title">{item.placeholder}</p>
            <p className="card-text">{item.description}</p>
          </div>
        </div>            
      </Link>
    )
  })
  
  return (
    <>
      <div className="container categoriesGrid">
        <h2>Категории:</h2>
        <div className="row mt-4">
          {items}
        </div>
      </div>
    </>
  )
}

export default categoriesGrid;