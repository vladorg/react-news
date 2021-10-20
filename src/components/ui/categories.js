import React, {useEffect} from "react";
import {NavLink} from 'react-router-dom';
import { connect } from "react-redux";

import {setUrl, routesMap} from '~r';
import actions from '~s/actions';

const Categories = props => {

  if (!props.default) {
    useEffect(() => {
      if (props.categories_status === null) {
        props.loadCategories();
      }
    });

    if (!props.categories_status) return 'loading...';
  } else {
    console.log('using is default data, without api load');
  }

  const categories = props.default || props.categories;
  const wall = categories.map((category, i) => {
    if (category.href == 'all') return;

    let url = setUrl('category', {category: category.href});    

    return (
      <NavLink 
        key={i} 
        to={url} 
        activeClassName="border-0 active" 
        className={"list-group-item list-group-item-action"} 
        exact
      >
        {category.placeholder}
      </NavLink>
    )
    
  });  
  
  return (
    <div className="list-group sticky-elem">
      <NavLink 
          to={routesMap.blog} 
          activeClassName="border-0 active" 
          className={"list-group-item list-group-item-action"} 
          exact
        >
        Все статьи
      </NavLink>
      {wall}
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
    loadCategories: () => dispatch(actions.categories.loadCategories()),  
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);