import React from 'react';
import DefaultPage from '../../layout/DefaultPage/DefaultPage';
import Banner from '../../components/Banner/Banner';
import ImgAndTxt from '../../components/ImgAndTxt/ImgAndTxt';
import LandingProjects from '../../components/LandingProjects/LandingProjects';
import TechCard from '../../components/TechCard/TechCard';
import { techStack } from '../../data/techStack';
import './LandingPage.scss';

function LandingPage() {
  return (
    <DefaultPage>
      <Banner title='DESENVOLVEDOR' subtitle='WEB' phrase='Problemas modernos exigem soluções modernas' />
      <ImgAndTxt />
      <LandingProjects />
      <h2 className='tech-title'>Trabalhando com as tecnologias mais populares do mercado</h2 >
      <div className='tech-stack'>
        {techStack.map(tech =>
          <TechCard
            name={tech.name}
            image={tech.image}
          />
        )}
      </div>
    </DefaultPage>
  )
}

export default LandingPage;