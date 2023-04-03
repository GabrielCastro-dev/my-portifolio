import './Project.scss';

function Project({image, title, description}) {
    return (
        <div className="project">
            <img src={image} alt="Imagem do Projeto" />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <button>Saiba mais</button>
            </div>
        </div>
    )
}

export default Project;