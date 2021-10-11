/* 
  ****
  Post page container
  ****
*/

import React, {useEffect} from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";

import {setUrl} from '~r';
import actions from '~s/actions';
import View from './view';


const Article = props => {

  const slug = props.match.params.name;

  useEffect(() => {    
    if (props.post_status === null) {
      props.load(slug);
      console.log('post was loaded');
    }
    if (props.categories_status === null) {
      props.loadCategories();
    }
    return () => {
      props.clear();
    }
  }, []);

  if (props.post_status === null || props.categories_status === null) return 'loading...' ;
  if (!props.post.id) return 'not found';

  const POST = props.post;
  const [category] = props.categories.filter(el => el.id == POST.categories[0]);
  const img = POST._embedded['wp:featuredmedia'] ? POST._embedded['wp:featuredmedia']['0'].source_url : '/images/no_img.png';
  const content = parse(POST.content.rendered);
  const url = setUrl('category', {category: category.href});

  const data = {
    title: POST.title.rendered,
    date: POST.date,
    category: category.placeholder,
    image: img,
    content,
    back: url
  }

  return <View data={data}/>
}


function mapStateToProps(state) {
  return {
    post: state.post.post,
    post_status: state.post.status,
    categories: state.categories.categories,
    categories_status: state.categories.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: slug => dispatch(actions.post.loadPost(slug)),
    clear: () => dispatch(actions.post.clearPost()),
    loadCategories: () => dispatch(actions.categories.loadCategories()), 
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);