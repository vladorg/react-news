import constants from '~s/constants';

let initialState = {
  data: {},
  status: null
}

let NAMES = constants.banner;



export default function(state = initialState, action) {
  switch(action.type) {
    case NAMES.BANNER_LOAD: // data, status
      let status = action.status || null;
      let data = action.data || {};

      return {
        ...state,
        status,
        data
      }
    default:
      return state;
  }

  return state;


}