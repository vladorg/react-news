import constants from '~s/constants';

let initialState = {
  posts: [],
  status: null
}

let NAMES = constants.recent;


export default function(state = initialState, action) {
  
  switch(action.type) {
    case NAMES.RECENT_LOAD: // data
      return {
        ...state,
        status: action.status,
        posts: [...action.data]
      }
    default:
      return state;
  }

  return state;


}