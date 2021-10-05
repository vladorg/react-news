import constants from '~s/constants';

let NAMES = constants.banner;

export const loadBanner = (status) => {
  if (status) return {type: null}
  
  return dispatch => {
    return new Promise((res, rej) => {
      res(dispatch({
        type: NAMES.BANNER_LOAD,
        data: getBanner(),
        status: true
      }));
      //.catch(e => rej(e))     
    })
  }
  
}



function getBanner() {
  return {
    title: 'Make better coffee',
    subtitle: 'why learn how to blog?',
    img: '/images/croods1.png'
  }
}