import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import actions from '~s/actions';

const Search = props => {

  const [load, setLoad] = useState(false);
  let timer;
  
  const changeHandler = e => {
    const fn = changer.bind(e.target);

    if (e.target.value.length > 0) {
      setLoad(true);
    } else {
      setLoad(false)
    }

    props.clearPosts();
    clearTimeout(timer);
    timer = setTimeout(fn, 800);
  }

  function changer() {
    const text = this.value;
    const writeLength = text.length;

    props.searchPosts(text);    
  }

  




  return (
    <div className="search d-flex align-items-center">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0258 12.8475L17.595 16.4159L16.4158 17.595L12.8475 14.0259C11.5198 15.0902 9.86833 15.6691 8.16666 15.6667C4.02666 15.6667 0.666664 12.3067 0.666664 8.16669C0.666664 4.02669 4.02666 0.666687 8.16666 0.666687C12.3067 0.666687 15.6667 4.02669 15.6667 8.16669C15.6691 9.86835 15.0902 11.5198 14.0258 12.8475ZM12.3542 12.2292C13.4118 11.1416 14.0024 9.68371 14 8.16669C14 4.94335 11.3892 2.33335 8.16666 2.33335C4.94333 2.33335 2.33333 4.94335 2.33333 8.16669C2.33333 11.3892 4.94333 14 8.16666 14C9.68369 14.0024 11.1416 13.4118 12.2292 12.3542L12.3542 12.2292Z" fill="black" />
      </svg>
      <input onChange={e => changeHandler(e)} className="ms-2 form-control" type="text" name="search" placeholder="Поиск..." />      

      { 
        load
        ?
        <div className="searchResults">
          {
            props.posts_status
            ?
            <ul>
              <li><a href="">art1</a></li>
              <li><a href="">art2</a></li>
              <li><a href="">art3</a></li>
              <li><a href="">art4</a></li>
              <li><a href="">art5</a></li>
            </ul>
            :
            <p>Loading...</p>
          }        
        </div>
        :
        null       
      }
      
    </div>
  )
}

function mapStateToProps(state) {
  return {
    posts: state.search.search,
    posts_status: state.search.status
  }
}

function mapDispatchToProps(dispatch) {
  return {  
    searchPosts: text => dispatch(actions.search.searchPosts(text)),
    clearPosts: text => dispatch(actions.search.clearPosts()),
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);