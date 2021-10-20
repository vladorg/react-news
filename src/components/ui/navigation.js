import React from 'react';
import {setUrl, routesMap} from '~r/';
import { NavLink } from 'react-router-dom';

const Navigation = props => {

  return (
    <>
      <NavLink exact={true} activeClassName="active" className="link me-3" to={routesMap.home}>
        Главная
      </NavLink>
      <NavLink exact={true} activeClassName="active" className="link me-3" to={routesMap.blog}>
        Блог
      </NavLink>
    </>    
  )
}

export default Navigation;