import parse from "html-react-parser";
import constants from '~s/constants';
import * as API from '~/api';

let NAMES = constants.post;


export const loadPost = (slug) => { 
  return dispatch => {
    return new Promise((res, rej) => {
      load(slug)
        .then(data => {
          res(dispatch({
            type: NAMES.POST_LOAD,
            data,
            status: true
          }));
        })
        .catch(e => rej(e))
    })
  };
}

export const clearPost = () => { 
  return dispatch => {
    return new Promise((res, rej) => {
      res(dispatch({
        type: NAMES.POST_CLEAR,
        data: {},
        status: null
      }));
    })
  };
}


async function load(slug) {
  try {
    const data = await API.getPost(slug);

    return data;
  } catch(e) {
    throw e;
  }
}