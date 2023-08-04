import React from 'react';
import Logo from './icons/Logo.tsx';

const Footer = () => {
  return (
    <footer className='footer dark'>
      <div className='container'>
        <Logo />

        <nav>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms &amp; Conditions</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;