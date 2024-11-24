import React, { useEffect } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/AboutMe';
import Feedback from './components/ContactMe';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Portfolio />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
