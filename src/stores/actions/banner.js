import constants from '~s/constants';

let NAMES = constants.banner;

export const loadBanner = () => {  
  return dispatch => {
    return new Promise((res, rej) => {
      getBanner()
        .then(data => {
          res(dispatch({
            type: NAMES.BANNER_LOAD,
            data,
            status: true
          }));
        })
        .catch(e => rej(e))     
    })
  }  
}



async function getBanner() {
  try {
    return {
      title: 'Make better coffee',
      subtitle: 'why learn how to blog?',
      img: '/images/croods1.png'
    }
  }
  catch(e) {
    throw e
  }
}