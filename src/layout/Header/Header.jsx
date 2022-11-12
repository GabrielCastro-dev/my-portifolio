import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <Link to='/'><h2>Castro, Gabriel</h2></Link>
      <nav>
        <Link to='/'>início, </Link>
        <Link to='/works'>trabalhos, </Link>
        <Link to='/about'>sobre, </Link>
        <Link to='/contact'>contato, </Link>
      </nav>
    </header>
  )
}

export default Header