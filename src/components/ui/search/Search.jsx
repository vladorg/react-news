import React from 'react';
import {DebounceInput} from 'react-debounce-input';

const Search = ({change, blur, posts, status}) => { 

  return (
    <div className="search d-flex align-items-center">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0258 12.8475L17.595 16.4159L16.4158 17.595L12.8475 14.0259C11.5198 15.0902 9.86833 15.6691 8.16666 15.6667C4.02666 15.6667 0.666664 12.3067 0.666664 8.16669C0.666664 4.02669 4.02666 0.666687 8.16666 0.666687C12.3067 0.666687 15.6667 4.02669 15.6667 8.16669C15.6691 9.86835 15.0902 11.5198 14.0258 12.8475ZM12.3542 12.2292C13.4118 11.1416 14.0024 9.68371 14 8.16669C14 4.94335 11.3892 2.33335 8.16666 2.33335C4.94333 2.33335 2.33333 4.94335 2.33333 8.16669C2.33333 11.3892 4.94333 14 8.16666 14C9.68369 14.0024 11.1416 13.4118 12.2292 12.3542L12.3542 12.2292Z" fill="black" />
      </svg>
      <DebounceInput
        minLength={1}
        debounceTimeout={500}
        onChange={e => change(e)} 
        onBlur={e => blur(e)}
        onFocus={e => change(e)}
        placeholder="Поиск..."
        className="ms-2 form-control"
      />     

      {
        status
        ?
        <div className="searchResults">
          <ul>
            {posts}
          </ul>
        </div> 
        :
        null
      }        
           
    </div>
  )
}

export default Search;