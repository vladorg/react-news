import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {routesList as routes} from '~r';

import Header from '~c/header';
import Footer from '~c/footer';
import Loader from '~c/loader';
import ErrorLoad from '~c/errors/load';

import { connect } from 'react-redux';
import actions from '~s/actions';
import * as API from '~/api';

const App = props => {

  useEffect(() => {
    if (props.status === null) {
      props.loadData()
    }  
  });

  if (props.status === null) return <Loader/>
  if (props.status === false) return <ErrorLoad/>  

  return (
    <Router>

      <button onClick={() => API.getMedia(23)}>get</button>

      <Header data={props.main}/>

      <Switch>
        {routes}
      </Switch>

      <Footer data={props.main}/>

    </Router>
  )
}


function mapStateToProps(state) {
  return {
    main: state.app.data,
    status: state.app.status,
    articles_status: state.articles.status,
    categories_status: state.categories.status,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(actions.app.loadData()),
    loadArticles: status => dispatch(actions.articles.loadArticles(status)),    
    loadCategories: status => dispatch(actions.categories.loadCategories(status)),  
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);