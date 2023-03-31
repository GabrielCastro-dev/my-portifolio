import React from 'react';
import { Link } from 'react-router-dom';
import DesktopMenu from '../DesktopMenu/DesktopMenu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className='glass'></div>
      <Link to='/'><h2>Gabriel Castro</h2></Link>
      <DesktopMenu />
      <BurgerMenu />
      <hr className='bottom-line'/>
    </header>
  )
}

export default Header