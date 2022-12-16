import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './components/Navigation';
import MidSection from './components/MidSection';
import Center from './components/Center';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Navigation/>
   <MidSection/>
   <Center/>
   <MainContent/>
   <Footer/>
   
  </React.StrictMode>
);
