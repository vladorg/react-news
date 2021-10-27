import parse from "html-react-parser";
import constants from '~s/constants';
import * as API from '~ROOT/api';

let NAMES = constants.posts;

export const loadPosts = (id, limit) => { 
  return dispatch => {
    return new Promise((res, rej) => {
      getPosts(id, limit)
        .then(({posts, total}) => {
          res(dispatch({
            type: NAMES.POSTS_LOAD,
            posts,
            total,
            status: true
          }));
        })
        .catch(e => rej(e))
    })
  };
}

export const clear = () => {
  return {
    type: NAMES.POSTS_CLEAR,
    posts: [],
    total: 0,
    status: null
  }
}



// ***** API begin...

async function getPosts(categoryId, limit) {
  try {
    const data = await API.getPosts(categoryId, limit);
    const getAllData = await API.getPosts(categoryId);

    let posts = data.map(item => {
      const img = item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia']['0'].source_url : '/images/no_img.png';
      const content = parse(item.content.rendered);
      const preview = item.acf.preview ? parse(item.acf.preview) : null;

      return {
        preview,
        id: item.id,
        title: item.title.rendered,
        preview: null,
        content,
        img,
        href: item.slug,
        date: item.date_gmt,
        featured: true,
        latest: false,
        category: null,
        categoryId: item.categories[0] || null
      }
    });

    let total = getAllData.length;

    return {
      posts,
      total
    };
  } catch(e) {
    throw e;
  }
}
