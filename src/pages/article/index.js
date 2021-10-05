import React from "react";
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import {setUrl} from '~r';

const Article = props => {
  
  const articles = useSelector(state => state.articles.articles);
  const item = articles.filter(article => article.href == props.match.params.name);

  if (!item.length) return 404

  const {title, preview, content, contentP, img, href, date, category} = item[0];
  const url = setUrl('category', {category});


  return (
    <div className="container">
      <div className="content">
        <h1>{title}</h1>
        <div className="intro d-flex align-items-center">
          <div className="date me-2">{date}</div>
          <div className="category">, Category: {category}</div>
        </div>
        <hr/>
        <div className="image">
          <img className="w-100 mt-2" src={img} alt="" />
        </div>
        <div className="content">
          {content}
        </div>
        <hr/>
        <Link className="btn btn-primary" to={url}>Back to category</Link>
        
      </div>
    </div>
  )
}


export default Article;