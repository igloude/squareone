import React from 'react';
import Logo from './icons/Logo.tsx';

const Header = () => {
  return (
    <header className='header container'>
      <Logo />

      <nav role='navigation'>
        <a href='#' className='link link__nav'>Our work</a>
        <a href='#' className='link link__nav'>What we do</a>
        <a href='#' className='link link__nav'>Plans</a>
      </nav>
    </header>
  );
}

export default Header;