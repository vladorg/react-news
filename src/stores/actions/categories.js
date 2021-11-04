import constants from '~s/constants';
import * as API from '~ROOT/api';
import actions from '~s/actions';

let NAMES = constants.categories;

export const loadCategories = () => {   
  return dispatch => {
    return new Promise((res, rej) => {
      loadCategoriesApi()
        .then(categories => {
          res(dispatch({
            type: NAMES.CATEGORIES_LOAD,
            categories,
            status: true
          }))
        })
        .catch(e => {
          dispatch({
            type: NAMES.CATEGORIES_LOAD,
            status: false
          })
        }) 
    })    
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
        placeholder: el.name,
        description: el.description,
        thumb: el.acf.thumb
      }
    });

    return categories;
  }
  catch(e) {
    throw e;
  }
}