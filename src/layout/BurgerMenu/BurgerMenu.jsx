import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
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
                <Link to='/'>início, </Link>
                <Link to='/works'>trabalhos, </Link>
                <Link to='/about'>sobre, </Link>
                <Link to='/contact'>contato, </Link>
            </nav>
        </>
    )
}

export default BurgerMenu