import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Project.scss';

function Project({id, image, title, description}) {
    return (
        <div className='project-background'>
            <div className="project">
                <img src={image} alt="Imagem do Projeto" />
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Button><Link to={`project/${id}`}>Saiba mais</Link></Button>
                </div>
            </div>
        </div>
    )
}

export default Project;