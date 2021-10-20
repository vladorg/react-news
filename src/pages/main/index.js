/* 
  ****
  Main page container component
  ****
*/

import React from "react";
import { useSelector } from "react-redux";

import Main from './Main.jsx';


const MainContainer = () => {

  const {top_post: top} = useSelector(state => state.app.data);

  return <Main topPost={top} />
}

export default MainContainer;