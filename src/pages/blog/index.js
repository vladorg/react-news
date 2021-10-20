/* 
  ****
  Blog page container component
  ****
*/

import React, {useEffect} from "react";
import { connect } from "react-redux";

import actions from '~s/actions';
import Posts from '~c/main/posts/list/index';
import Blog from "./Blog.jsx";

const BlogContainer = props => {

  const slug = props.match.params.category || 'all';


  /* ## INIT ## */

  useEffect(() => {
    let [category] = props.categories.filter(el => el.href == slug);

    if (props.posts_status) props.postsClear();
    props.loadPosts(category.id != 1 ? category.id : null);   
  }, [slug]);  

  /* ## INIT END ## */
  


  let [category] = props.categories.filter(el => el.href == slug);
  let heading = category.placeholder;
  
  return (
    <>
      <Blog heading={heading}>
        {
          props.posts_status === null
          ? 'loading posts...'
          : <Posts posts={props.posts} size={4} container={false}/>
        }
      </Blog>
    </>
  )
}





// ***** Redux

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    posts_status: state.posts.status,
    categories: state.categories.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: id => dispatch(actions.posts.loadPostsByCategory(id)),
    postsClear: () => dispatch(actions.posts.clear()), 
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);