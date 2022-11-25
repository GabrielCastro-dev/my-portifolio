import React from 'react';
import DefaultPage from '../../layout/DefaultPage/DefaultPage';
import Banner from '../../components/Banner/Banner';
import ImgAndTxt from '../../components/ImgAndTxt/ImgAndTxt';

import './LandingPage.scss';

function LandingPage() {
  return (
    <DefaultPage>
      <Banner />
      <ImgAndTxt />
    </DefaultPage>
  )
}

export default LandingPage