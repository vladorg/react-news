/* 
  ****
  404 page presentation component
  ****
*/

import React from "react";
import {Link} from 'react-router-dom';


const Error404 = ({title, subtitle, url, link}) => {
  
  return (
    <div className="container">
      <div className="content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Link className="btn btn-primary" to={url}>{link}</Link>        
      </div>
    </div>
  )
}


export default Error404;