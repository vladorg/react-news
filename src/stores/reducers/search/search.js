import constants from '~s/constants';

const initialState = {
  search: [],
  status: null
}

const NAMES = constants.search;

export default function (state = initialState, action) {
  switch (action.type) {
    case NAMES.POSTS_SEARCH: // payload
      let search = action.payload.posts || [];
      let status = action.payload.status || null;

      return {
        ...state,
        search,
        status,
      }
    case NAMES.POSTS_SEARCH_CLEAR:
      return {
        ...state,
        search: [],
        status: null
      }
    default:
      return state;
  }
}