/* 
  ****
  Featured post container component
  ****
*/

import React, {useEffect} from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";

import {setUrl} from '~r';
import actions from '~s/actions';
import Featured from './Featured.jsx';
import Loader from '~c/loader';
import ErrorLoad from '~c/errors/load';

const FeaturedContainer = props => {  

  // ##### INIT

  if (!props.id) return null;

  useEffect(() => {
    if (props.post_status === null) {
      props.loadPost(props.id)
    }
  })

  if (props.post_status === null) return <Loader/>;
  if (props.post_status === false) return <ErrorLoad/>  

  // ##### INIT END


  
  const _POST = props.post;
  const [category] = props.categories.filter(el => el.id == _POST.categories[0]);
  const img = _POST._embedded['wp:featuredmedia'] ? _POST._embedded['wp:featuredmedia']['0'].source_url : '/images/no_img.png';
  const preview = _POST.acf.preview ? parse(_POST.acf.preview) : null;
  const categoryName = category.placeholder;
  const categoryUrl = setUrl('category', {category: category.href});

  const data = {
    preview,
    title: _POST.title.rendered,
    content: parse(_POST.content.rendered),
    date: _POST.date,
    url: setUrl('post', {category: category.href, name: _POST.slug}),
    img,
    categoryName,
    categoryUrl
  }

  return <Featured {...data} />
}



// ***** Redux

function mapStateToProps(state) {
  return {
    post: state.top_article.post,
    post_status: state.top_article.status,
    categories: state.categories.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPost: id => dispatch(actions.top_article.loadPost(id))
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedContainer);