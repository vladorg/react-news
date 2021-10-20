/* 
  ****
  Posts list presentation component
  ****
*/

import React from "react";

const Posts = ({container, posts}) => {  

  return (
    <>
      { 
        container
        ?
        <div className="posts">
          <div className="container">
            <div className="row">
              {posts}
            </div>
          </div>
        </div> 
        :
        <div className="row posts">
          {posts}
        </div> 
      }
    </>
  );
}

export default Posts;