import constants from '~s/constants';
import * as API from '~/api';

let NAMES = constants.categories;

export const loadCategories = (status) => {  
  if (status) return {type: null}
  
  return dispatch => {
    return new Promise((res, rej) => {
      API.getCategories()
        .then(data => {
          let categories = data.map(el => {
            return {
              id: el.id,
              href: el.slug,
              placeholder: el.name
            }
          });
          
          res(dispatch({
            type: NAMES.CATEGORIES_LOAD,
            categories,
            status: true
          }));
        })
        .catch(e => rej(e))      
    })
  };
}


// function getCategories() {
//   return [
//     {
//       href: 'sport',
//       placeholder: 'Спорт'
//     },
//     {
//       href: 'health',
//       placeholder: 'Здоровье'
//     },
//     {
//       href: 'science',
//       placeholder: 'Наука'
//     }
//   ]
// }