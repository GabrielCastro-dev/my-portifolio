import './TechCard.scss';

function TechCard({ name, image }) {
  return (
    <div className='tech-card'>
        <img src={image} alt={name} />
        <h3>{ name }</h3>
    </div>
  )
}

export default TechCard;