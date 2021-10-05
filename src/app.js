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

  const [ready, setReady] = useState(null);

  useEffect(() => {
    if (ready === null) {
      Promise.all([
        props.loadData(props.main_status),
        props.loadBanner(props.banner_status),        
        props.loadArticles(props.articles_status),
        props.loadCategories(props.categories_status)
      ])
        .then(() => setReady(true))
        .catch(() => setReady(false))
    }  
  });

  if (ready === null) return <Loader/>
  if (ready === false) return <ErrorLoad/>  

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
    main_status: state.app.status,
    banner_status: state.banner.status,
    articles_status: state.articles.status,
    categories_status: state.categories.status,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: status => dispatch(actions.app.loadData(status)),
    loadBanner: status => dispatch(actions.banner.loadBanner(status)),
    loadArticles: status => dispatch(actions.articles.loadArticles(status)),    
    loadCategories: status => dispatch(actions.categories.loadCategories(status)),  
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);