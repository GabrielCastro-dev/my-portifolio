import './Banner.scss';
import Blob from '../Blob/Blob';

function Banner() {
    return (
        <div className='banner'>
            <h1>DESENVOLVEDOR</h1>

            <div className='subtitle'>
                <h1 className='empty'>WEB</h1>
                <p>Problemas modernos exigem soluções modernas</p>
            </div>

            <Blob 
                width='680px'
                height='680px'
                top='20vh'
                right='5vw'
                duration='5s'
            />
            <Blob 
                width='520px'
                height='450px'
                top='55vh'
                right='75vw'
                duration='15s'
            />
            <Blob 
                width='300px'
                height='250px'
                top='-10vh'
                right='95vw'
                duration='2s'
            />
        </div>
    )
}

export default Banner;