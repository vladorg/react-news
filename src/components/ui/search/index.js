import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {setUrl} from '~r'
import actions from '~s/actions';
import Search from './Search.jsx';

const searchContainer = props => {

  const changeHandler = e => {
    const text = e.target.value;

    if (text != '') {
      props.searchPosts(e.target.value);      
    }    
  }

  const blurHandler = e => {
    setTimeout(() => {
      props.clearPosts();
    }, 100)
  }

  let posts;

  if (props.posts.length) {
    posts = props.posts.map(post => {
      let [category] = props.categories.filter(cat => cat.id == post.categoryId);
      let url;

      if (post.categoryId == category.id) {
        url = setUrl('post', {category: category.href, name: post.slug});
      }

      return (
        <li key={post.id}>
          <Link to={url}>{post.title}</Link>
        </li>
      )
    })
  } else {
    posts = 'Ничего не найдено...';
  }

  const data = {
    change: changeHandler,
    blur: blurHandler,
    posts,
    status: props.posts_status
  }

  return <Search {...data} />
}

function mapStateToProps(state) {
  return {
    posts: state.search.search,
    posts_status: state.search.status,
    categories: state.categories.categories,
  }
}

function mapDispatchToProps(dispatch) {
  return {  
    searchPosts: text => dispatch(actions.search.searchPosts(text)),
    clearPosts: text => dispatch(actions.search.clearPosts()),
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(searchContainer);