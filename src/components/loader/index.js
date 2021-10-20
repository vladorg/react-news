import React from 'react';
import { ROOT } from '~r/routes';

const Loader = ({type}) => {

  let img;

  if (type == 'inner') {
    img = ROOT + 'images/loader2.gif';
  } else {
    img = ROOT + 'images/loader1.gif';
  }

  return (
    <div className="loader">
      <img src={img} alt="" />
    </div>   
  )
}

export default Loader;