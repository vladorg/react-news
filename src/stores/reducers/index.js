import { combineReducers } from "redux";

import posts from './posts';
import banner from './banner/banner';
import app from './app/app';
import categories from './categories';
import post from './post';
import top_article from './top_article';
import recent from './recent';
import search from './search/search';

export default combineReducers({
  posts,
  banner,
  app,
  categories,
  post,
  top_article,
  recent,
  search
});

