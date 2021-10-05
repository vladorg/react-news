/* 
  ****
  Component for a single article item
  ****
*/

import React from "react";
import {Link} from 'react-router-dom';
import {setUrl} from '~r';


const Article = ({data, size}) => {

  const {img, title, preview, date, category, href} = data; 
  const url = setUrl('article', {category, name: href});
  
  return (
    <>
      <div className={`article col-${size}`}>
        <div className="article__inner">
          <img width="300" height="185" className="article__thumb" src={img} alt="" />
          <div className="article__caption">
            <div className="article__title">
              <Link to={url} className="article__link link">{title}</Link>
            </div>
            <div className="article__preview">{preview}</div>
            <div className="article__bottom d-flex justify-content-between align-items-center">
              <div className="article__date">{date}</div>
              <Link to={url} className="article__link link">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article;