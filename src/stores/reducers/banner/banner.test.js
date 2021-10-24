import * as React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react';

import reducer from './banner.js';
import constants from '~s/constants';

let NAMES = constants.banner;

describe('Banner reducer', () => {

  let state = {
    data: {},
    status: null
  }

  it('Valid action type and data', () => {      
    let action = {
      type: NAMES.BANNER_LOAD,
      data: {
        title: 'Make better coffee',
        subtitle: 'why learn how to blog?',
        img: '/images/croods1.png'
      },
      status: true
    }

    let newState = reducer(state, action);

    expect(newState.status).toBeTruthy();
    expect(newState.data).toHaveProperty('title');
  });

  it('Without action type', () => {
    let action = {
      type: null,
    }

    let newState = reducer(state, action);

    expect(newState).toMatchObject(state);

  });

  it('Valid action type but action data will be undefined', () => {
    let action = {
      type: NAMES.BANNER_LOAD,
      status: true
    }

    let newState = reducer(state, action);

    expect(newState.data).toEqual({});

  });

  it('Valid action type but action status will be undefined', () => {
    let action = {
      type: NAMES.BANNER_LOAD,
      data: {}
    }

    let newState = reducer(state, action);

    expect(newState.status).toBeFalsy();

  });

  it('Valid action type but action data and status will be undefined', () => {
    let action = {
      type: NAMES.BANNER_LOAD
    }

    let newState = reducer(state, action);

    expect(newState.data).toEqual({});
    expect(newState.status).toBeFalsy();

  });

});


