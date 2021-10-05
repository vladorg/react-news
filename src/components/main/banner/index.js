import React from 'react';

const Banner = props => {

  let {title, subtitle, img, ...other} = props.data;


  return (
    <div className="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="banner__title">{title}</div>
            <div className="banner__subtitle mt-2">{subtitle}</div>
          </div>
          <div className="col-7">
            <img width="476" height="325" src={img} alt="" className="banner__img"/>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Banner;