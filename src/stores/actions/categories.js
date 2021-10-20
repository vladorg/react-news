import constants from '~s/constants';
import * as API from '~/api';
import actions from '~s/actions';

let NAMES = constants.categories;

export const loadCategories = (status) => {  
  if (status) return {type: null}
  
  return dispatch => {
    loadCategoriesApi()
      .then(categories => {
        dispatch({
          type: NAMES.CATEGORIES_LOAD,
          categories,
          status: true
        })
      })
      .catch(e => rej(e)) 
  };
}



// ***

async function loadCategoriesApi() {
  try {
    const data = await API.getCategories();

    let categories = data.map(el => {
      return {
        id: el.id,
        href: el.slug,
        placeholder: el.name
      }
    });

    return categories;
  }
  catch(e) {
    throw e;
  }
}