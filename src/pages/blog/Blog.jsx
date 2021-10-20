/* 
  ****
  Blog page presentation component
  ****
*/

import React from "react";
import Categories from "~c/ui/categories";

const Blog = ({heading, children: posts}) => {
  
  return (
    <div className="container">
      <div className="content content--all">
        <h1 className="mb-4">{heading}</h1>
        <div className="row">
          <div className="col-9">
            {posts}            
          </div>
          <div className="col-3">
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;