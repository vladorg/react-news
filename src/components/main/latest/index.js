import React from "react";
import {Link} from 'react-router-dom';
import {setUrl} from '~r';

const Latest = props => {

  let latest_id = false;
  let article;

  props.data.map((el, i) => {
    if (el.latest) {
      if (!latest_id) {
        latest_id = Infinity;
      }

      latest_id = Math.min(latest_id, el.id);
    }
  });

  if (latest_id) {
    article = props.data.map(item => {
      if (item.id == latest_id) {
        const url = setUrl('article', {category: item.category, name: item.href});
        const {id, title, preview, date, img} = item;

        return (
          <div key={id} className="latest">
            <div className="container">
              <div className="row">
                <div className="col-6 pe-0">
                  <div className="latest__wrap">
                    <div className="latest__title">{title}</div>
                    <div className="latest__content">{preview}</div>
                    <div className="latest__bottom d-flex justify-content-between
                    align-items-center">
                      <div className="latest__date">{date}</div>
                      <div className="latest__link">
                        <Link to={url} className="article__link link">Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 ps-0">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  } else {
    return null;
  }


  return (
    <>
      {article}
    </>
  )
}

export default Latest;