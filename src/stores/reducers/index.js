import { combineReducers } from "redux";

import articles from './articles';
import banner from './banner';
import app from './app';
import categories from './categories';
import post from './post';

export default combineReducers({
  articles,
  banner,
  app,
  categories,
  post
});

