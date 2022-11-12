import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './DefaultPage.scss';

function DefaultPage({ children }) {
  return (
    <>
        <Header />
        <main>{ children }</main>
        <Footer />
    </>
  )
}

export default DefaultPage