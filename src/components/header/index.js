import React from 'react';
import Search from '~c/ui/Search';
import Navigation from '~c/ui/navigation';
import Socials from '~c/ui/socials';
import { withRouter } from 'react-router';
import { routesMap } from '~r/';

const Header = props => {
  return (
    <>
      <div className="header pt-4 pb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-3">
              <div className="logo fs-4 text-dark fw-bold" onClick={() => props.history.push(routesMap.home)}>
                {props.data.logo}
              </div>
            </div>
            <div className="col-4">
              <Search/>
            </div>
            <div className="col-5 ms-auto">
              <div className="row align-items-center">
                <nav className="navigation text-end col-6">
                  <Navigation data={props.data.nav}/>
                </nav>                   
                <div className="socials col-6 text-end">
                  <Socials data={props.data.socials}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default withRouter(Header);