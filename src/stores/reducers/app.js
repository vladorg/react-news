import constants from '~s/constants';

let initialState = {
  data: {},
  status: false
}

let NAMES = constants.app;



export default function(state = initialState, action) {
  switch(action.type) {
    case NAMES.APP_LOAD: // data 
      return {
        ...state,
        data: {...action.data},
        status: action.status
      }
    default:
      return state;
  }

  return state;


}