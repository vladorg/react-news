import React from "react";

const LoadMore = ({limit, total, load, isLoading}) => {

  let button;
  let classNames = 'btn d-block mt-4 ms-auto me-auto';

  if (isLoading) {
    button = <button disabled className={`${classNames} btn-primary`}>Ок, загружаю...</button>;
  } else {
    if (limit < total) {
      button = <button className={`${classNames} btn-primary`} onClick={load}>Загрузить еще ({limit}/{total})</button>;
    } else {
      button = <button disabled className={`${classNames} btn-success`}>Загружены все публикации</button>
    }
  }
  
  return button;
}

export default LoadMore;