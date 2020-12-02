import React, { useState, useEffect } from 'react';

import './Nav.css';

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className='nav__logo'
        src='https://cdn.svgporn.com/logos/netflix.svg'
        alt=''
      />
    </div>
  );
};

export default Nav;
