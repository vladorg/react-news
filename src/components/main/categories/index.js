import React from "react";
import { useSelector } from "react-redux";

import CategoriesGrid from './Categories.jsx';

const categoriesContainer = () => {
  const categories = useSelector(state => state.categories.categories);
  const data = {
    categories: categories.filter(item => item.id != 1)
  }
  
  return <CategoriesGrid {...data}/>
}

export default categoriesContainer;