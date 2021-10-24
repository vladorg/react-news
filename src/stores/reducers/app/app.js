import constants from '~s/constants';

let initialState = {
  data: {},
  status: null
}

let NAMES = constants.app;

export default function(state = initialState, action) {
  switch(action.type) {
    case NAMES.APP_LOAD: // data, status
      let data = action.data || {};
      let status = action.status || false;

      return {
        ...state,
        data,
        status
      }
    default:
      return state;
  }
}