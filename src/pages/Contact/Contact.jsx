import DefaultPage from '../../layout/DefaultPage/DefaultPage';
import Blob from '../../components/Blob/Blob';
import './Contact.scss';

function Contact(){
  return(
    <DefaultPage>
      <div className='contact'>
        <Blob
          width='500px'
          height='350px'
          top='-100px'
          left='-100px'
        />
        <div className="left">
          <h1>ENTRE EM</h1>
          <h1 className='empty'>CONTATO</h1>
        </div>
        <form>
          <div>
            <input type="text" placeholder='Nome'/>
            <input type="text" placeholder='Email'/>
          </div>
          <input type="text" placeholder='Assunto'/>
          <textarea type="text" placeholder='Mensagem'/>
          <button>Enviar</button>
        </form>
      </div>
    </DefaultPage>
  )
}

export default Contact;