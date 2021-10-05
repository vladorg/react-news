import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import actions from '~s/actions';

const Banner = props => {

  useEffect(() => {
    if (props.status === null) {
      props.loadBanner()
    }  
  });

  if (!props.status) return null;

  let {title, subtitle, img, ...other} = props.data;

  return (
    <div className="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="banner__title">{title}</div>
            <div className="banner__subtitle mt-2">{subtitle}</div>
          </div>
          <div className="col-7">
            <img width="476" height="325" src={img} alt="" className="banner__img"/>
          </div>
        </div>
      </div>
    </div> 
  )
}

function mapStateToProps(state) {
  return {
    data: state.banner.data,
    status: state.banner.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadBanner: status => dispatch(actions.banner.loadBanner(status)),
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);