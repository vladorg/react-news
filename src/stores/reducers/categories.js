import constants from '~s/constants';

let initialState = {
  categories: [],
  status: null
}

let NAMES = constants.categories;


export default function(state = initialState, action) {
  
  switch(action.type) {
    case NAMES.CATEGORIES_LOAD: // articles (array)
      return {
        ...state,
        status: action.status,
        categories: [...action.categories]
      }
    default:
      return state;
  }

  return state;


}