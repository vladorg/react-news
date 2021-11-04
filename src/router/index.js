import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import routes from './routes';


const routesList = routes.map(route => {
  return (
    <Route  
      key={route.name}
      path={route.path}
      component={route.component}
      exact={route.exact}
    />
  )
});

let routesMap = {};
routes.map(route => {
  routesMap[route.name] = route.path;
});

let setUrl = function(name, params){
  if(!routesMap.hasOwnProperty(name)){
      return null;
  }

  let url = routesMap[name]; // news/:id

  for(let key in params){
      url = url.replace(':' + key, params[key]);
  }

  return url;
}



export {routesList, routesMap, setUrl};


