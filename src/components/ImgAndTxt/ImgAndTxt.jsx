import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import roundedText from '../../assets/roundedText.png';
import Blob from '../../components/Blob/Blob';
import { Link } from 'react-router-dom';
import './ImgAndTxt.scss';

function ImgAndTxt() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let blobProps = {};

  function detectSize(){
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => window.removeEventListener('resize', detectSize);
  }, [windowWidth])

  if(windowWidth > 1630){
    blobProps = {
      width: '250px',
      height: '250px',
      top: '125px',
      left: '125px',
      duration: '4s'
    }
  } else {
    blobProps = {
      width: '200px',
      height: '200px',
      top: '90px',
      left: '90px',
      duration: '4s'
    }
  }

  return (
      <section className='container'>
        <div className='image-blob'>
          <img src={roundedText} alt="rounded text" />
          <Blob {...blobProps} />
        </div>
        <div className='text'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget auctor felis. Maecenas id lacus libero. Sed ac sem tempor, sollicitudin eros sed, dignissim mi. Curabitur tincidunt diam vel augue sollicitudin, ac pulvinar est vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam et dui finibus, aliquet eros id, ultrices quam. Vivamus mollis odio eu diam placerat, sit amet hendrerit est sagittis.
          </p>
          <Button><Link to='/about'>SAIBA MAIS</Link></Button>
        </div>
      </section>
  )
}

export default ImgAndTxt;