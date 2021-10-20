import constants from '~s/constants';

let initialState = {
  posts: [],
  status: null
}

let NAMES = constants.posts;


export default function(state = initialState, action) {
  
  switch(action.type) {
    case NAMES.POSTS_LOAD: // posts (array)
      return {
        ...state,
        status: action.status,
        posts: [...action.posts]
      }
    case NAMES.POSTS_BY_CATNAME_LOAD: // posts (array)
      return {
        ...state,
        status: action.status,
        posts: [...action.posts]
      }
    case NAMES.POSTS_CLEAR: // data
      console.log('posts data was cleared');
      return {
        ...state,
        status: action.status,
        posts: [...action.posts]
      }
    default:
      return state;
  }
}