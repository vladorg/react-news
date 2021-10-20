import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import {routesList as routes, routesMap} from '~r';

import Header from '~c/header';
import Footer from '~c/footer';
import Loader from '~c/loader';
import ErrorLoad from '~c/errors/load';

import { connect } from 'react-redux';
import actions from '~s/actions';

const App = props => {

  useEffect(() => {
    if (props.status === null) {
      props.loadData()
    }
    
    if (props.categories_status === null) {
      props.loadCategories()
    }
  });

  if (props.status === null || props.categories_status === null) return <Loader/>
  if (props.status === false || props.categories_status === false) return <ErrorLoad/>  

  return (
    <Router>

      <Header data={props.main}/>

      <Switch>
        {routes}
        <Redirect to={routesMap.page404}/>
      </Switch>

      <Footer data={props.main}/>

    </Router>
  )
}


function mapStateToProps(state) {
  return {
    main: state.app.data,
    status: state.app.status,
    categories_status: state.categories.status,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(actions.app.loadData()),  
    loadCategories: () => dispatch(actions.categories.loadCategories()),  
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);