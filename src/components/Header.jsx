import React from 'react';
import Logo from './icons/Logo.tsx';

const Header = () => {
  return (
    <header className='header container'>
      <Logo />

      <nav className='header__nav' role='navigation'>
        <a href='#' className='link link__header'>Our work</a>
        <a href='#' className='link link__header'>What we do</a>
        <a href='#' className='link link__header'>Plans</a>
      </nav>
    </header>
  );
}

export default Header;