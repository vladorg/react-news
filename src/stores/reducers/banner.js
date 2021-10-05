import constants from '~s/constants';

let initialState = {
  data: {},
  status: null
}

let NAMES = constants.banner;



export default function(state = initialState, action) {
  switch(action.type) {
    case NAMES.BANNER_LOAD: // data   
      return {
        ...state,
        status: action.status,
        data: {...action.data}
      }
    default:
      return state;
  }

  return state;


}