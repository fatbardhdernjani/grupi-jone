import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import Slider from './components/Slider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [showSlider, setShowSlider] = useState(true);

  const handleNavigation = (location) => {
    // Përcakto vlerën e showSlider vetëm në faqen kryesore
    setShowSlider(location.pathname === '/');
  };

  return (
    <BrowserRouter>
      <Header />
      {showSlider && <Slider />}
      <div className='container'>
        <Routes onChange={handleNavigation}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
