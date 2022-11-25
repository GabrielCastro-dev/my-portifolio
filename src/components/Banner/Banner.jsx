import './Banner.scss';
import Blob from '../Blob/Blob';

function Banner() {
    return (
        <div className='banner'>
            <div className='noise'/>
            <h1>
                DE
                SEN
                VOL
                VE
                DOR
            </h1>
            <h1>web</h1>
            <p>Problemas modernos exigem soluções modernas</p>
            <Blob 
                width='650px'
                height='650px'
                top='20vh'
                right='7vw'
            />
            <Blob 
                width='520px'
                height='450px'
                top='55vh'
                right='75vw'
            />
            <Blob 
                width='300px'
                height='250px'
                top='-10vh'
                right='95vw'
            />
        </div>
    )
}

export default Banner;