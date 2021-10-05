import { combineReducers } from "redux";

import articles from './articles';
import banner from './banner';
import app from './app';
import categories from './categories';

export default combineReducers({
  articles,
  banner,
  app,
  categories
});

