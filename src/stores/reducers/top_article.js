import constants from '~s/constants';

let initialState = {
  post: {},
  status: null
}

let NAMES = constants.top_article;


export default function(state = initialState, action) {
  
  switch(action.type) {
    case NAMES.TOP_ARTICLE_LOAD: // data
      return {
        ...state,
        status: action.status,
        post: {...action.data}
      }
    default:
      return state;
  }

  return state;


}