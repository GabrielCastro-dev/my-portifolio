import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Blob from '../../components/Blob/Blob';
import { BsLinkedin, BsEnvelopeFill } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className='glass'></div>
      <div className='minding-a-project'>
        <h2>Pensando em um projeto?</h2>
        <Link to='/contact'> <Button>Fale comigo</Button> </Link>
      </div>

      <div className='icon-div'>
        <a href="#" target='_blank' rel='noreferrer'>
          <BsLinkedin className='icon' />
        </a>
        <a href="#" target='_blank' rel='noreferrer'>
          <BsEnvelopeFill className='icon' />
        </a>
        <a href="https://github.com/GabrielCastro-dev" target='_blank' rel='noreferrer'>
          <FaGithubSquare className='icon' />
        </a>
      </div>

      <Blob 
        width='380px'
        height='380px'
        top='150px'
        left='0'
        duration='5s'
      />
      <Blob 
        width='220px'
        height='150px'
        top='130px'
        left='65vw'
        duration='15s'
      />
      <Blob 
        width='100px'
        height='150px'
        top='300px'
        left='95vw'
        duration='2s'
      />

      <p className='credits'>Projetado e criado por Gabriel Castro©</p>
    </footer>
  )
}

export default Footer