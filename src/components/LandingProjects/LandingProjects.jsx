import GlassCard from '../GlassCard/GlassCard';
import { projects } from '../../data/projects';
import globe from '../../assets/globe.png';
import blackGrid from '../../assets/blackGrid.png';
import './LandingProjects.scss';

function LandingProjects() {
  const rightsLink = 'https://br.freepik.com/vetores-gratis/malha-colorida-de-vetor-abstrato-em-fundo-escuro-cartao-de-estilo-futurista-fundo-elegante-para-apresentacoes-de-negocios-esfera-de-pontos-corrompidos-estetica-do-caos_24720602.htm#from_view=detail_alsolike'

  return (
    <section className='landing-projects'>
        <div className='projects'>
          {projects.map(project => <GlassCard title={project.title} /> )}
          
          <a href={rightsLink} target='_blank' rel='noreferrer'>
            <img src={globe} alt="Imagem de GarryKillian no Freepik" />
          </a>
        </div>
        <div className='title'>
          <img src={blackGrid} alt="black grid" />
          <div className='gradient'></div>
          <h2>
            PRO 
            JE 
            TOS 
          </h2>
        </div>
    </section>
  )
}

export default LandingProjects;