import React from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from '../DesktopNav/DesktopNav';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <Link to='/'><h2>Castro, Gabriel</h2></Link>
      <DesktopNav />
    </header>
  )
}

export default Header