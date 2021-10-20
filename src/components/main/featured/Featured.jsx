/* 
  ****
  Featured post presentation component
  ****
*/

import React from "react";
import {Link} from 'react-router-dom';

const Featured = ({title, content, date, url, img}) => {  

  return (
    <div className="latest">
      <div className="container">
        <div className="row">
          <div className="col-6 pe-0">
            <div className="latest__wrap">
              <div className="latest__title">{title}</div>
              <div className="latest__content">{content}</div>
              <div className="latest__bottom d-flex justify-content-between
              align-items-center">
                <div className="latest__date">{date}</div>
                <div className="latest__link">
                  <Link to={url} className="article__link link">Read more</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 ps-0">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;