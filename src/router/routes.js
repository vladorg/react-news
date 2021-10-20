import React from 'react';

import Home from '~p/main';
import Blog from '~p/blog';
import Post from '~p/post';
import E404 from '~p/404';

export const ROOT = '/';
//export const ROOT = '/react_blog/';

const routes = [
  {
    name: 'home',
    path: `${ROOT}`,
    component: Home,
    exact: true,
  },
  {
    name: 'blog',
    path: `${ROOT}blog/`,
    component: Blog,
    exact: true,
  },
  {
    name: 'category',
    path: `${ROOT}blog/:category`,
    component: Blog,
    exact: true,
  },
  {
    name: 'post',
    path: `${ROOT}blog/:category/:name`,
    component: Post,
    exact: true,
  },


  
  {
    name: 'page404',
    path: `${ROOT}404`,    
    component: E404,
    exact: false,
    menu: false,
  }
]


export default routes;