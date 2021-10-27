import request from "./request";

 const base = 'http://wp-api/wp-json/';
//const base = 'http://w99762ln.beget.tech/wp-rest-blog/wp-json/';


export function getCategories() {
  return request(`${base}wp/v2/categories/`)
}


// Posts

export function getPosts(categoryId, limit = 99) {
  let url;

  if (categoryId) {
    url = `${base}wp/v2/posts/?_embed&categories=${categoryId}&per_page=${limit}`;
  } else {
    url = `${base}wp/v2/posts/?_embed&per_page=${limit}`;
  }

  return request(url)
}

export function getPostByName(slug) {
  return request(`${base}wp/v2/posts?slug=${slug}&_embed`)
}

export function getPostById(id) {
  return request(`${base}wp/v2/posts/${id}?&_embed`)
}

export function getLastPosts(limit = 4) {
  return request(`${base}wp/v2/posts?per_page=${limit}&orderby=date&_embed`)
}


// Optional

export function getMenus() {
  return request(`${base}wp-api-menus/v2/menus/6`)
}

export function getApp() {
  return request(`${base}acf/v3/pages/2`)
}

export function search(text) {
  // wp/v2/search?subtype=post&search=${text}&_embed
  return request(`${base}relevanssi/v1/search?keyword=${text}&type=post`)
}


// for tests

export function get(id) {
  return request(`${base}acf/v3/pages/2`)
}