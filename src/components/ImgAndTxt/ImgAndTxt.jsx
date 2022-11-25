import Button from '../Button/Button';
import roundedText from '../../assets/roundedText.png';
import './ImgAndTxt.scss';

function ImgAndTxt() {
  return (
      <section className='container'>
        <img src={roundedText} alt="rounded text" />
        <div className='text'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget auctor felis. Maecenas id lacus libero. Sed ac sem tempor, sollicitudin eros sed, dignissim mi. Curabitur tincidunt diam vel augue sollicitudin, ac pulvinar est vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam et dui finibus, aliquet eros id, ultrices quam. Vivamus mollis odio eu diam placerat, sit amet hendrerit est sagittis.
          </p>
          <Button>SAIBA MAIS</Button>
        </div>
      </section>
  )
}

export default ImgAndTxt;