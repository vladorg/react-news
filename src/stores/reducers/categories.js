import constants from '~s/constants';

let initialState = {
  categories: [],
  status: null
}

let NAMES = constants.categories;


export default function(state = initialState, action) {
  
  switch(action.type) {
    case NAMES.CATEGORIES_LOAD: // categories, status
      const categories = action.categories || [];
      const status = action.status || false;

      return {
        ...state,
        status,
        categories
      }
    default:
      return state;
  }

  return state;


}