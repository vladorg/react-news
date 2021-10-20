import constants from '~s/constants';
import * as API from '~ROOT/api';

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
    const app = await API.getApp();
    const {banner_title: title, banner_subtitle: subtitle, banner: img} = app.acf;

    return {
      title,
      subtitle,
      img
    }
  }
  catch(e) {
    throw e
  }
}