import React from 'react';
import { Link } from 'react-router-dom';
import DesktopMenu from '../DesktopMenu/DesktopMenu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <Link to='/'><h2>Castro, Gabriel</h2></Link>
      <DesktopMenu />
      <BurgerMenu />
    </header>
  )
}

export default Header