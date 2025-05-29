import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Poster from './Components/Poster';
import About from './Components/About';
import Work from './Components/Work';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Clients from './Components/Clients';
import Industary from './Components/Industary';
import Gallery from './Components/Gallery';
import Ourteam from './Components/Ourteam';
import Imgallery from './Components/Imgallery'; 
import Workdone from './Components/Workdoen';
const Home = () => (
  <>
    <Navbar />
    <Poster />
    <About />
    <Services />
    <Industary />
    <Gallery />
    <Ourteam />
    <Work />
    <Reviews />
    <Clients />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/imgallery" element={<Imgallery />} />
        <Route path="/workdone" element={<Workdone />} />
      </Routes>
    </Router>
  );
};

export default App;
