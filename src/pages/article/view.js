/* 
  ****
  Post page view
  ****
*/

import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  const {title, date, category, image, content, back, ...other} = props.data;

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
          <img className="w-100 mt-2" src={image} alt="" />
        </div>
        <div className="content">
          {content}
        </div>
        <hr/>
        <Link className="btn btn-primary" to={back}>Back to category</Link>        
      </div>
    </div>
  )
}