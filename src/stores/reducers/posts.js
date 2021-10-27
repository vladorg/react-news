import constants from '~s/constants';

let initialState = {
  posts: [],
  total: 0,
  status: null
}

let NAMES = constants.posts;


export default function(state = initialState, action) {
  
  switch(action.type) {
    case NAMES.POSTS_LOAD: // posts, total, status
      return {
        ...state,
        status: action.status,
        total: action.total,
        posts: [...action.posts]
      }
    case NAMES.POSTS_CLEAR: // posts, total, status
      return {
        ...state,
        status: action.status,
        total: action.total,
        posts: [...action.posts]
      }
    default:
      return state;
  }
}