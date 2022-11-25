import React from 'react';
import ReactDOM from 'react-dom/client';
import { routes as Routes } from './routes/routes';
import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Routes />
);