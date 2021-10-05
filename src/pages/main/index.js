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

const Main = () => {

  return (
    <div className="content content--main">
      <Banner/>
      {/* <Latest data={articles}/> */}
      <Articles category="all" size={3} container={true}/>
      <Featured/>
    </div>
  )
}


function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);