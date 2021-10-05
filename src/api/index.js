import request from "./request";

const base = 'http://wp-api/wp-json/';

export function getCategories() {
  return request(`${base}wp/v2/categories/`)
}

export function getPosts() {
  return request(`${base}wp/v2/posts/?_embed`)
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

export function getMedia(id) {
  return request(`${base}wp/v2/media/${id}`)
}