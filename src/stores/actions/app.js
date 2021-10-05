import constants from '~s/constants';
import * as API from '~/api';

let NAMES = constants.app;

export const loadData = () => {  
  return dispatch => {
    return new Promise((res, rej) => {
      getData()
        .then(data => {
          res(dispatch({
            type: NAMES.APP_LOAD,
            data,
            status: true
          }))
        })
        .catch(e => rej(e))
    })
  }  
}



async function getData() {
  try {
    const menus = await API.getMenus();
    const other = await API.getApp();

    let nav = menus.items.map(item => {
      return {
        name: item.title,
        href: item.url,
        exact: true
      }
    })

    let {copy, logo, socials} = other.acf;

    return {
      nav,
      logo,
      socials: [...socials],
      copy: {...copy[0]}
    }
  }
  catch(e) {
    throw e;
  }

  // return {
  //   logo: 'HotCoffee',
  //   nav,
  //   socials: [
  //     {
  //       img: '/images/icons/instagram.svg',
  //       href: '#'
  //     },
  //     {
  //       img: '/images/icons/twitter.svg',
  //       href: '#'
  //     },
  //     {
  //       img: '/images/icons/linkedin.svg',
  //       href: '#'
  //     }
  //   ],
  //   copy: {
  //     main: 'hotcoffee',
  //     sub: '2020 copyright all rights reserved'
  //   },
  // } 
}