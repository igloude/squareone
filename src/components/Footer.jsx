import React from 'react';
import Logo from './icons/Logo.tsx';

const Footer = () => {
  return (
    <footer className='footer dark'>
      <div className='footer__inner container'>
        <Logo />

        {/* 
          TODO: routing

          <nav>
            <a href='#' className='link link__nav'>Privacy Policy</a>
            <a href='#' className='link link__nav'>Terms &amp; Conditions</a>
          </nav> 
        */}
      </div>
    </footer>
  );
}

export default Footer;