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
            <Blob />
        </div>
    )
}

export default Banner;