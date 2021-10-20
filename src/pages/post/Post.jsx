/* 
  ****
  Post page presentation component
  ****
*/

import React from "react";
import { Link } from "react-router-dom";

const Post = ({title, date, category, img, content, url}) => {

  return (
    <div className="container">
      <div className="content">
        <h1>{title}</h1>
        <div className="intro d-flex align-items-center">
          <div className="date me-2">{date}</div>
          <div className="category">, Категория: {category}</div>
        </div>
        <hr/>
        <div className="image">
          <img className="w-100 mt-2" src={img} alt="" />
        </div>
        <div className="content">
          {content}
        </div>
        <hr/>
        <Link className="btn btn-primary" to={url}>Назад в категорию</Link>        
      </div>
    </div>
  )
}

export default Post;