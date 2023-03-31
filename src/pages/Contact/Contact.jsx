import { useRef } from 'react';
import DefaultPage from '../../layout/DefaultPage/DefaultPage';
import Blob from '../../components/Blob/Blob';
import emailjs from '@emailjs/browser';
import './Contact.scss';

function Contact(){
  const form = useRef();

  function sendEmail(event){
    event.preventDefault();

    emailjs.sendForm('contact_email', 'template_6gnxxo6', form.current, 'uyXISEL1Oy6E6pO8K')
      .then((result) => {
          event.target.reset();
          alert('Email enviado com sucesso, entraremos em contato.');
      }, (error) => {
          alert('Erro ao enviar mensagem, por favor tente mais tarde.');
      });
  }

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

        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input required name='name' type="text" placeholder='Nome'/>
            <input required name='email' type="text" placeholder='Email'/>
          </div>
          <input required name='subject' type="text" placeholder='Assunto'/>
          <textarea required  name='message' type="text" placeholder='Mensagem'/>

          <input type='submit' value='Enviar' className='send-button'/> 
        </form>

        <Blob
          width='500px'
          height='350px'
          top='500px'
          right='0'
        />
      </div>
    </DefaultPage>
  )
}

export default Contact;