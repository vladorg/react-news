import * as React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react';

import reducer from './app.js';
import constants from '~s/constants';

let NAMES = constants.app;

describe('App reducer', () => {

  let state = {
    data: {},
    status: null
  }

  it('Valid action type and data', () => {      
    let action = {
      type: NAMES.APP_LOAD,
      data: {
        nav: {
          name: 'test',
          href: 'test',
          exact: true
        },
        logo: 'test',
        socials: 'test',
        copy: 'test',
        top_post: 1
      },
      status: true
    }

    let newState = reducer(state, action);

    expect(newState.status).toBeTruthy();
    expect(newState.data).toHaveProperty('nav');
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
      type: NAMES.APP_LOAD,
      status: true
    }

    let newState = reducer(state, action);

    expect(newState.data).toEqual({});

  });

  it('Valid action type but action status will be undefined', () => {
    let action = {
      type: NAMES.APP_LOAD,
      data: {}
    }

    let newState = reducer(state, action);

    expect(newState.status).toBeNull();

  });

  it('Valid action type but action data and status will be undefined', () => {
    let action = {
      type: NAMES.APP_LOAD
    }

    let newState = reducer(state, action);

    expect(newState.data).toEqual({});
    expect(newState.status).toBeNull();

  });

});


