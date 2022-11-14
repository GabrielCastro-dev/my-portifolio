import React from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from '../DesktopNav/DesktopNav';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <Link to='/'><h2>Castro, Gabriel</h2></Link>
      <DesktopNav />
      <BurgerMenu />
    </header>
  )
}

export default Header