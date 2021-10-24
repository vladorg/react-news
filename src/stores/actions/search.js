import constants from '~s/constants';
import * as API from '~ROOT/api';

let NAMES = constants.search;

export const searchPosts = text => {  
  return dispatch => {
    return new Promise((res, rej) => {
      search(text)
        .then(data => {
          res(dispatch({
            type: NAMES.POSTS_SEARCH,
            payload: {
              posts: data.data,
              status: true
            }
          }));
        })
        .catch(e => rej(e))     
    })
  }  
}

export const clearPosts = () => {
  return {
    type: NAMES.POSTS_SEARCH_CLEAR
  }
}



// *****

async function search(text) {
  try {
    const data = await API.search(text);

    return {
      data
    }
  }
  catch(e) {
    throw e
  }
}