/* 
  ****
  Component for a generate articles list  
  ****
*/

import React from "react";
import { connect } from "react-redux";
import Article from '~c/main/article';

const Articles = ({data, categories, size, category, container}) => {

  if (!data.length) return null  

  let articles = data.map(article => {

    let [categoryName] = categories.filter(el => el.id == article.categoryId);
    article.category = categoryName ? categoryName.href : 'all';

    if (category && category != 'all') {
      if (article.category == category) {
        return <Article key={article.id} data={article} size={size}/>;
      }
    } else {   
      return <Article key={article.id} data={article} size={size}/>;
    }
  });

  let count = articles.filter(el => el).length;

  if (!count) {
    articles = <div>В данной рубрике пока нет статей!</div>
  }

  if (container) {
    return (
      <div className="articles">
        <div className="container">
          <div className="row">
            {articles}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="row articles">
        {articles}
      </div>
    )
  }  
}



function mapStateToProps(state) {
  return {
    data: state.articles.articles,
    categories: state.categories.categories
  }
}

export default connect(mapStateToProps, null)(Articles);