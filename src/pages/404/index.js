/* 
  ****
  404 page container component
  ****
*/

import React from "react";

import Error404 from './E404.jsx';
import {routesMap} from '~r';


const Error404Container = props => {
  let data = {
    title: 'Ошибка 404!',
    subtitle: 'Запрашиваемая страница не найдена!',
    url: routesMap.home,
    link: 'На главную'
  };

  return <Error404 {...data} />
}


export default Error404Container;