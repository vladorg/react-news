import constants from '~s/constants';
import * as API from '~ROOT/api';

let NAMES = constants.search;

export const searchPosts = text => {  
  return dispatch => {
    return new Promise((res, rej) => {
      search(text)
        .then(posts => {
          res(dispatch({
            type: NAMES.POSTS_SEARCH,
            payload: {
              posts,
              status: true
            }
          }));
        })
        .catch(e => rej(e))     
    })
  }  
}

export const clearPosts = () => {
  return {
    type: NAMES.POSTS_SEARCH_CLEAR
  }
}



// *****

async function search(text) {
  try {
    const search = await API.search(text);

    if (!Array.isArray(search)) return [];

    const posts = search.map(el => {
      const img = el._embedded['wp:featuredmedia'] ? el._embedded['wp:featuredmedia']['0'].source_url : '/images/no_img.png';

      return {
        title: el.title.rendered,
        id: el.id,
        slug: el.slug,
        categoryId: el.categories[0],
        img
      }
    });

    return posts;
  }
  catch(e) {}
}