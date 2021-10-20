import * as React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react';

import constants from '~s/constants';
import {loadData} from './app';

describe('App action', () => {

  it('Will return correct action object', () => {
    const action = loadData();

    expect(action).toHaveProperty('nav');

    /* return {
      nav,
      logo,
      socials: [...socials],
      copy: {...copy[0]},
      top_post
    } */
  })

})