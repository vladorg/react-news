import parse from "html-react-parser";
import constants from '~s/constants';
import * as API from '~/api';

let NAMES = constants.recent;


export const loadRecent = limit => { 
  return dispatch => {
    return new Promise((res, rej) => {
      load(limit)
        .then(data => {
          res(dispatch({
            type: NAMES.RECENT_LOAD,
            data,
            status: true
          }));
        })
        .catch(e => rej(e))
    })
  };
}


// ***** load

async function load(limit) {
  try {
    const data = await API.getLastPosts(limit);

    let posts = data.map(item => {
      const img = item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia']['0'].source_url : '/images/no_img.png';
      const content = parse(item.content.rendered);

      return {
        id: item.id,
        title: item.title.rendered,
        preview: null,
        content,
        img,
        href: item.slug,
        date: item.date_gmt,
        featured: true,
        latest: false,
        //category: null,
        categoryId: item.categories[0] || null
      }
    });

    return posts;
  } catch(e) {
    throw e;
  }
}