/* 
  ****
  Main page presentation component
  ****
*/

import React from "react";

import Banner from '~c/main/banner';
import Posts from '~c/main/posts/list/index';
import Featured from '~c/main/featured';

const Main = ({topPost}) => {

  return (
    <div className="content content--main">
      <Banner/>
      <Posts container={true} size={3}/>
      <Featured id={topPost}/>
    </div>
  )
}

export default Main;