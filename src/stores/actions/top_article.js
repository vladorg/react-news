import parse from "html-react-parser";
import constants from '~s/constants';
import * as API from '~ROOT/api';

let NAMES = constants.top_article;


export const loadPost = id => { 
  return dispatch => {
    return new Promise((res, rej) => {
      load(id)
        .then(data => {
          res(dispatch({
            type: NAMES.TOP_ARTICLE_LOAD,
            data,
            status: true
          }));
        })
        .catch(e => rej(e))
    })
  };
}


// ***** load

async function load(id) {
  try {
    const data = await API.getPostById(id);

    return data;
  } catch(e) {
    throw e;
  }
}