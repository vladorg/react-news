/* 
  ****
  Blog page container component
  ****
*/

import React, {useEffect, useState} from "react";
import { connect } from "react-redux";

import actions from '~s/actions';
import Posts from '~c/main/posts/list/index';
import LoadMore from '~c/ui/LoadMore.jsx';
import Blog from "./Blog.jsx";

const BlogContainer = props => {

  /* ## INIT ## */

  const __POSTS_VIEW = 3;
  const __POSTS_LOAD_STEP = 2;

  const [limit, changeLimit] = useState(__POSTS_VIEW);
  const [localLimit, changeLocalLimit] = useState(limit);
  const [isLoading, setIsLoading] = useState(false);

  const slug = props.match.params.category || 'all';
  const total = props.posts_total;
  const [category] = props.categories.filter(el => el.href == slug);
  const categoryId = category.id != 1 ? category.id : null;
  const heading = category.placeholder;

  const more = () => {
    changeLimit(limit + __POSTS_LOAD_STEP);
    setIsLoading(true);
  }

  useEffect(() => {
    props.loadPosts(categoryId, limit)
      .then(() => {
        changeLocalLimit(limit);
        setIsLoading(false);
      });
  }, [limit]);  

  useEffect(() => {
    if (props.posts_status) props.clearPosts();
    props.loadPosts(categoryId, limit);
  }, [slug]);  

  /* ## INIT END ## */ 

  const data = {}
  
  return (
    <>
      <Blog heading={heading}>
        {
          props.posts_status === null
          ? 
          'Загрузка...'
          : 
          <>
            <Posts posts={props.posts} size={4} container={false}/>
            <LoadMore limit={localLimit} total={total} load={more} isLoading={isLoading}/>            
          </>
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
    posts_total: state.posts.total,
    categories: state.categories.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: (id, limit) => dispatch(actions.posts.loadPosts(id, limit)),
    clearPosts: () => dispatch(actions.posts.clear()), 
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);