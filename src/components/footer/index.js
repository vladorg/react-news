import React from 'react';
import Socials from '~c/ui/socials';

const Footer = props => {
  return (
    <>
      <div className="footer pt-4 pb-4 mt-auto">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="copy text-dark">
                <span className="fw-bold">{props.data.copy.main}</span> {props.data.copy.sub}
              </div>
            </div>
            <div className="socials col-6 text-end">
              <Socials data={props.data.socials}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Footer;