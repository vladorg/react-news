/* 
  ****
  Post page container component
  ****
*/

import React, {useEffect} from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";
import {Redirect} from 'react-router-dom';

import {setUrl} from '~r';
import actions from '~s/actions';
import Post from './Post.jsx';
import Loader from '~c/loader';
import {routesMap} from '~r';


const PostContainer = props => {

  const slug = props.match.params.name;

  useEffect(() => {    
    if (props.post_status === null) {
      props.load(slug);
    }
    
    return () => {
      props.clear();
    }
  }, []);

  if (props.post_status === null) return <Loader/>;
  if (!props.post.id) return <Redirect to={routesMap.page404}/>;

  const _POST = props.post;
  const [category] = props.categories.filter(el => el.id == _POST.categories[0]);
  const img = _POST._embedded['wp:featuredmedia'] ? _POST._embedded['wp:featuredmedia']['0'].source_url : '/images/no_img.png';

  const data = {
    title: _POST.title.rendered,
    date: _POST.date,
    category: category.placeholder,
    img,
    content: parse(_POST.content.rendered),
    url: setUrl('category', {category: category.href})
  }

  return <Post {...data}/>
}


function mapStateToProps(state) {
  return {
    post: state.post.post,
    post_status: state.post.status,
    categories: state.categories.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: slug => dispatch(actions.post.loadPost(slug)),
    clear: () => dispatch(actions.post.clearPost()),
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);