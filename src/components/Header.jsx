import React from 'react';
import Logo from './icons/Logo.tsx';

const Header = () => {
  return (
    <header className='header container'>
      <Logo />

      <nav role='navigation'>
        <a href='#work' className='link link__nav'>Our work</a>
        <a href='#capabilities' className='link link__nav'>What we do</a>
        <a href='#plans' className='link link__nav'>Plans</a>
      </nav>
    </header>
  );
}

export default Header;