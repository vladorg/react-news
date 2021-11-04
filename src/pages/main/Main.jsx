/* 
  ****
  Main page presentation component
  ****
*/

import React from "react";
import {Link} from 'react-router-dom';

import Banner from '~c/main/banner';
import Posts from '~c/main/posts/list/index';
import Featured from '~c/main/featured';
import CategoriesGrid from '~c/main/categories';
import {routesMap} from '~r'

const Main = ({topPost}) => {

  return (
    <div className="content content--main">
      <Banner/>
      
      <div className="container latest mt-4">
        <h2>Последние публикации:</h2>
        <Posts size={3}/>
        <div className="latest__more text-end">
          <Link to={routesMap.blog} className="btn btn-primary mt-4">Смотреть все</Link>
        </div> 
      </div>

      <CategoriesGrid/>
            
      <Featured id={topPost}/>
    </div>
  )
}

export default Main;