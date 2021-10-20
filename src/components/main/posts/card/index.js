/* 
  ****
  Posts preview card container component
  ****
*/

import React from "react";
import {setUrl} from '~r';
import Card from './Card.jsx';


const CardContainer = ({data, size}) => {

  const post = {
    data,
    size,
    url: setUrl('post', {category: data.category, name: data.href})
  }
  
  return (
    <>
      <Card {...post} />
    </>
  )
}

export default CardContainer;