import parse from "html-react-parser";
import constants from '~s/constants';
import * as API from '~ROOT/api';

let NAMES = constants.posts;

export const loadPosts = () => { 
  return dispatch => {
    return new Promise((res, rej) => {
      getPosts()
        .then(posts => {
          res(dispatch({
            type: NAMES.POSTS_LOAD,
            posts,
            status: true
          }));
        })
        .catch(e => rej(e))
    })
  };
}

export const loadPostsByCategory = id => { 
  return dispatch => {
    return new Promise((res, rej) => {
      getPostsByCategory(id)
        .then(posts => {
          res(dispatch({
            type: NAMES.POSTS_BY_CATNAME_LOAD,
            posts,
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
    status: null
  }
}



// ***** API begin...

async function getPosts() {
  try {
    const data = await API.getPosts();

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

    return posts;
  } catch(e) {
    throw e;
  }
}

async function getPostsByCategory(id) {
  try {
    const data = await API.getPostsByCategory(id);

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

    return posts;
  } catch(e) {
    throw e;
  }
}
