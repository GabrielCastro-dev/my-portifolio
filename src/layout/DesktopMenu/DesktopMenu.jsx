import { Link } from 'react-router-dom';
import './DesktopMenu.scss';

function DesktopNav() {
  return (
    <nav className='desktop-nav'>
        <Link to='/'>Início </Link>
        <Link to='/works'>Trabalhos </Link>
        <Link to='/about'>Sobre </Link>
        <Link to='/contact'>Contato </Link>
    </nav>
  )
}

export default DesktopNav