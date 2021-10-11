/* 
  ****
  Blog page container
  ****
*/

import React from "react";
import { connect } from "react-redux";

import actions from '~s/actions';
import Posts from '~c/main/posts/list';
import Categories from "~c/ui/categories";

const Blog = props => {

  const slug = props.match.params.category || 'all';
  
  return (
    <div className="container">
      <div className="content content--all">
        <h1 className="mb-4">{slug}</h1>
        <div className="row">
          <div className="col-9">
            <Posts category={slug} size={4} container={false}/>
          </div>
          <div className="col-3">
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ****** */

function mapStateToProps(state) {
  return {
    //categories: state.categories.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //loadArticles: () => dispatch(actions.articles.loadArticles())
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);