import { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.scss';

function BurgerMenu() {
    const [isOpened, setIsOpened] = useState(false);

    function handleClick() {
        setIsOpened(prevState => !prevState);
    }

    return (
        <>
            <button className='burger-btn' onClick={handleClick}> 
                <hr className={ isOpened ? 'first line X' : 'first line' }/>
                <hr className={ isOpened ? 'second line X' : 'second line' }/>
                <hr className={ isOpened ? 'last line X' : 'last line' }/>
            </button>
            <nav className={isOpened ? 'side-bar open' : 'side-bar closed'}>
                <Link to='/' className='side-bar-link' >início, </Link>
                <Link to='/works' className='side-bar-link' >trabalhos, </Link>
                <Link to='/about' className='side-bar-link' >sobre, </Link>
                <Link to='/contact' className='side-bar-link' >contato, </Link>
            </nav>
        </>
    )
}

export default BurgerMenu