import constants from '~s/constants';

let initialState = {
  post: {},
  status: null
}

let NAMES = constants.post;


export default function(state = initialState, action) {
  
  switch(action.type) {
    case NAMES.POST_LOAD: // data
      return {
        ...state,
        status: action.status,
        post: {...action.data[0]}
      }
    case NAMES.POST_CLEAR: // data
      console.log('post data was cleared');
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