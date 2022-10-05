import React from 'react'
import Destinations from './components/destinations/Destinations'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search'
import Selects from './components/selects/Selects';
import ImgCarousel from './components/carousel/ImgCarousel';
import Footer from './components/footer/Footer';
import Audio from './components/audio/Audio';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Audio />

      <Footer/>
    </div>
  );
}

export default App;
