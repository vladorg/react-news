/* 
  ****
  Post page container component
  ****
*/

import React, {useEffect} from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";

import {setUrl} from '~r';
import actions from '~s/actions';
import Post from './Post.jsx';


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

  if (props.post_status === null) return 'loading...' ;
  if (!props.post.id) return 'not found';

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