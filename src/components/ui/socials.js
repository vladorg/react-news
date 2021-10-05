import React from 'react';

const Socials = props => {

  if (!props.data) return null;
  
  let links = props.data.map((item, i) => {
    return (
      <a key={i} href={item.href} className="ms-3 me-3">
        <img src={item.img} alt="" />    
      </a>
    )
  })

  return (
    <>
      {links}
    </>
  )
}

export default Socials;