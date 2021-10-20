/* 
  ****
  Posts list container component
  ****
*/

import React, {useEffect, useState} from "react";
import { connect } from "react-redux";

import Card from '~c/main/posts/card/index';
import actions from '~s/actions';
import List from './List.jsx';

const PostsContainer = props => {  

  /*
    if geting array of posts            - render post list 
    else if array of posts is undefined - load recent posts with limit in parameter.
  */

  const [status, setStatus] = useState(null);
  const [data, setData] = useState([]);


  useEffect(() => {
    if (props.posts) {
      setData(props.posts)
      setStatus(true);
    } else {
      if (props.recent_status === null) {
        props.loadRecent(3);
      } else {
        setData(props.recent)
        setStatus(true);
      }      
    }
  })

  const {size, container, categories} = props;   

  if (status === null) return 'loading posts...';

  /* *** generate... *** */
  let posts = data.map(post => {
    let [category] = categories.filter(cat => cat.id == post.categoryId);

    post.category = category.href;

    return <Card key={post.id} data={post} size={size} />
  });

  let count = posts.filter(el => el).length;

  if (!count) {
    posts = <div>В данной рубрике пока нет статей!</div>
  }
  /* *** generate end *** */

  return (
    <>
      <List 
        container={container}
        posts={posts}
      />
    </>
  );
}



function mapStateToProps(state) {
  return {
    recent: state.recent.posts,
    categories: state.categories.categories,
    recent_status: state.recent.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadRecent: limit => dispatch(actions.recent.loadRecent(limit)), 
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);