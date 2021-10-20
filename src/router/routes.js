import React from 'react';

import Home from '~p/main';
import Blog from '~p/blog';
import Post from '~p/post';
import E404 from '~p/404';

const ROOT = '/';
//const ROOT = '/react_todo/';

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
    name: '404',
    path: '**',    
    component: E404,
    exact: false,
    menu: false,
  }
]


export default routes;