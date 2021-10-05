import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {setUrl} from '~r';
import { connect } from "react-redux";
import actions from '~s/actions';

const Featured = props => {

  

  useEffect(() => {
    if (props.articles_status === null) {
      props.loadArticles();
    }
  });

  if (!props.articles_status) return null;


  /* ###  INIT END ### */


  let featured_id;
  let article;

  props.articles.map((el, i) => {
    if (el.featured) {
      if (!featured_id) {
        featured_id = Infinity;
      }

      featured_id = Math.min(featured_id, el.id);
    }
  });

  if (featured_id) {
    article = props.articles.map(item => {
      if (item.id == featured_id) {
        const url = setUrl('article', {category: item.category, name: item.href});
        const {id, title, preview, date, img} = item;

        return (
          <div key={id} className="latest">
            <div className="container">
              <div className="row">
                <div className="col-6 pe-0">
                  <div className="latest__wrap">
                    <div className="latest__title">{title}</div>
                    <div className="latest__content">{preview}</div>
                    <div className="latest__bottom d-flex justify-content-between
                    align-items-center">
                      <div className="latest__date">{date}</div>
                      <div className="latest__link">
                        <Link to={url} className="article__link link">Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 ps-0">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  } else {
    return null;
  }

  return (
    <>
      {article}
    </>
  )
}

function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
    articles_status: state.articles.status,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadArticles: () => dispatch(actions.articles.loadArticles()),
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured);