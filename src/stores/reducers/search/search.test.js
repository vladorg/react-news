import * as React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react';

import reducer from './search.js';
import constants from '~s/constants';

const NAMES = constants.search;
const state = {
  posts: [],
  status: null
}

describe('Search reducer', () => {

  it('Valid action type and data', () => {      
    let action = {
      type: NAMES.POSTS_SEARCH,
      payload: {
        posts: [1, 2, 3],
        status: true
      }
    }

    let newState = reducer(state, action);

    expect(newState.status).toBeTruthy();
    expect(newState.posts.length).toBe(3);
  });

});