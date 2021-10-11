/* 
  ****
  Component for a generate articles list  
  ****
*/

import React, {useEffect} from "react";
import { connect } from "react-redux";
import Post from './single';
import actions from '~s/actions';

const Posts = props => {
  
  useEffect(() => {
    if (props.articles_status === null) {
      props.loadArticles();
    } else if (props.categories_status === null) {
      props.loadCategories();
    }
  });

  if (!props.articles_status && !props.categories_status) return null;


  /* ###  INIT END ### */
  

  const {articles, categories, size, category, container} = props; 

  if (!articles.length) return null;

  let articlesGrid = articles.map(article => {

    let [categoryName] = categories.filter(el => el.id == article.categoryId);

    article.category = categoryName ? categoryName.href : 'all';

    if (category && category != 'all') {
      if (article.category == category) {
        return <Post key={article.id} data={article} size={size}/>;
      }
    } else {   
      return <Post key={article.id} data={article} size={size}/>;
    }
  });

  let count = articlesGrid.filter(el => el).length;

  if (!count) {
    articlesGrid = <div>В данной рубрике пока нет статей!</div>
  }

  if (container) {
    return (
      <div className="articles">
        <div className="container">
          <div className="row">
            {articlesGrid}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="row articles">
        {articlesGrid}
      </div>
    )
  }  
}



function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
    categories: state.categories.categories,
    articles_status: state.articles.status,
    categories_status: state.categories.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadArticles: () => dispatch(actions.articles.loadArticles()),    
    loadCategories: () => dispatch(actions.categories.loadCategories()),  
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);