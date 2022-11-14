import { Link } from 'react-router-dom';
import './DesktopMenu.scss';

function DesktopNav() {
  return (
    <nav className='desktop-nav'>
        <Link to='/'>início, </Link>
        <Link to='/works'>trabalhos, </Link>
        <Link to='/about'>sobre, </Link>
        <Link to='/contact'>contato, </Link>
    </nav>
  )
}

export default DesktopNav