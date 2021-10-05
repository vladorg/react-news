/* 
  ****
  Main page
  ****
*/

import React from "react";
import Banner from '~c/main/banner';
import Latest from '~c/main/latest';
import Articles from '~c/main/articles';
import Featured from '~c/main/featured';
import { connect } from "react-redux";

const Main = ({banner, articles}) => {

  return (
    <div className="content content--main">
      <Banner data={banner}/>
      <Latest data={articles}/>
      <Articles data={articles} category="all" size={3} container={true}/>
      <Featured data={articles}/>
    </div>
  )
}


function mapStateToProps(state) {


  console.log(state);
  return {
    articles: state.articles.articles,
    banner: state.banner.data
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);