/* 
  ****
  Featured post presentation component
  ****
*/

import React from "react";
import {Link} from 'react-router-dom';

const Featured = ({title, preview, date, url, img, categoryName, categoryUrl}) => {  

  return (
    <div className="featured">
      <div className="container">
        <h2>Полезное:</h2>
        <div className="row mt-4">
          <div className="col-6 pe-0">
            <div className="featured__wrap">
              <div className="featured__title">{title}</div>
              <div className="featured__content">{preview}</div>
              <div className="featured__bottom d-flex justify-content-between
              align-items-center">
                <div className="featured__date">{date}</div>
                <div className="featured__link">
                  <Link to={url} className="article__link link">Читать...</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 ps-0">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="featured__more text-end">
          <Link to={categoryUrl} className="btn btn-primary mt-4">
            Другое из категории <strong>{categoryName}</strong>
          </Link>
        </div>        
      </div>
    </div>
  );
}

export default Featured;