import request from "./request";

// const base = 'http://wp-api/wp-json/';
const base = 'http://w99762ln.beget.tech/wp-rest-blog/wp-json/';

export function getCategories() {
  return request(`${base}wp/v2/categories/`)
}

export function getPosts() {
  return request(`${base}wp/v2/posts/?_embed`)
}

export function getPostsByCategory(categoryId) {
  const id = categoryId || 0;
  return request(`${base}wp/v2/posts/?_embed&categories=${id}`)
}

export function getPost(slug) {
  return request(`${base}wp/v2/posts?slug=${slug}&_embed`)
}

export function getMenus() {
  return request(`${base}wp-api-menus/v2/menus/6`)
}

export function getApp() {
  return request(`${base}acf/v3/pages/2`)
}

export function search(text) {
  return request(`${base}wp/v2/search?subtype=post&search=${text}&_embed`)
}

export function get(id) {
  return request(`${base}wp/v2/categories?slug=test`)
}