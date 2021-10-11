/* 
  ****
  Blog page container
  ****
*/

import React, {useEffect} from "react";
import {NavLink} from 'react-router-dom';
import Articles from '~c/main/articles';
import { connect } from "react-redux";
import {setUrl, routesMap} from '~r';
import actions from '~s/actions';

const Blog = props => {

  useEffect(() => {
    if (props.categories_status === null) {
      props.loadCategories();
    }
  });

  if (!props.categories_status) return 'loading...';


  let categoryName = props.match.params.category;
  let categoryTitle;
  let navigation = props.categories.map((item, i) => {

    let url = setUrl('category', {category: item.href});

    if (item.href == 'all') url = routesMap.blog

    if (categoryName == item.href) categoryTitle = item.placeholder;

    return (
      <NavLink key={i} to={url} activeClassName="border-0 active" className="list-group-item list-group-item-action" exact>
        {item.placeholder}
      </NavLink>
    )
  });
  
  return (
    <div className="container">
      <div className="content content--all">
        <h1 className="mb-4">{categoryTitle || 'Все статьи'}</h1>
        <div className="row">
          <div className="col-9">
            <Articles category={categoryName || 'all'} size={4} container={false}/>
          </div>
          <div className="col-3">
            <div className="list-group sticky-elem">
              {navigation}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ****** */

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    categories_status: state.categories.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadArticles: () => dispatch(actions.articles.loadArticles()),    
    loadCategories: () => dispatch(actions.categories.loadCategories()),  
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);