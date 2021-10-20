/* 
  ****
  Posts preview card presentation component
  ****
*/

import React from "react";
import {Link} from 'react-router-dom';

const Post = ({data, url, size}) => {

  const {img, title, preview, date, category} = data;
  
  return (
    <>
      <div className={`post col-${size}`}>
        <div className="post__inner">
          <img width="300" height="185" className="post__thumb" src={img} alt="" />
          <div className="post__caption">
            <div className="post__title">
              <Link to={url} className="post__link link">{title}</Link>
            </div>
            <div className="post__preview">{preview}</div>
            <div className="post__bottom d-flex justify-content-between align-items-center">
              <div className="post__date">{date}</div>
              <Link to={url} className="post__link link">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post;