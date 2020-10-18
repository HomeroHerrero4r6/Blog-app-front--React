import React from 'react';
import './assets/css/App.css';

// Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import SeccionPrueba from './components/SeccionPrueba';
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="center">
        <SeccionPrueba />

        <SideBar />
        <div className="clearfix"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
