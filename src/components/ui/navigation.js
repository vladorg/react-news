import React from 'react';
import {setUrl} from '~r/';
import { NavLink } from 'react-router-dom';

const Navigation = props => {

  if (!props.data) return null;

  let links = props.data.map((item, i) => {
    return (
      <NavLink key={i} exact={item.exact} activeClassName="active" className="link me-3" to={item.href}>
        {item.name}
      </NavLink>
    )
  });
  return (
    <>
      {links}
    </>    
  )
}

export default Navigation;