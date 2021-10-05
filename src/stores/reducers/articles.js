import constants from '~s/constants';

let initialState = {
  articles: [],
  status: null
}

let NAMES = constants.articles;


export default function(state = initialState, action) {
  
  switch(action.type) {
    case NAMES.ARTICLES_LOAD: // articles (array)
      return {
        ...state,
        status: action.status,
        articles: [...action.articles]
      }
    default:
      return state;
  }

  return state;


}