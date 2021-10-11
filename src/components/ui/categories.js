import React, {useEffect} from "react";
import {NavLink} from 'react-router-dom';
import { connect } from "react-redux";

import {setUrl, routesMap} from '~r';
import actions from '~s/actions';

const Categories = props => {

  useEffect(() => {
    if (props.categories_status === null) {
      props.loadCategories();
    }
  });

  if (!props.categories_status) return 'loading...';

  const wall = props.categories.map((item, i) => {
    let url = setUrl('category', {category: item.href});
    if (item.href == 'all') url = routesMap.blog;

    return (
      <NavLink 
        key={i} 
        to={url} 
        activeClassName="border-0 active" 
        className="list-group-item list-group-item-action" 
        exact
      >
        {item.placeholder}
      </NavLink>
    )
    
  });  
  
  return (
    <div className="list-group sticky-elem">
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