import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <h2>DESENVOLVIMENTO WEB & SITES SOB ENCOMENDA & WEB DESIGN & SOLUÇÕES TECNOLÓGICAS</h2>

      <div className='about-me'>
        <img src="" alt="me" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget auctor felis. Maecenas id lacus libero. Sed ac sem tempor, sollicitudin eros sed, dignissim mi.</p>
      </div>

      <div className='minding-a-project'>
        <h2>Pensando em um projeto?</h2>
        <Link to='/contact'> <Button>Fale comigo</Button> </Link>
      </div>

      <p>Projetado e criado por Gabriel Castro©</p>
    </footer>
  )
}

export default Footer