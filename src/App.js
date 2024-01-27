// App.js
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import Slider from './components/Slider';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [showSlider, setShowSlider] = useState(true);

  const handleNavigation = (location) => {
    setShowSlider(location.pathname === '/');
  };

  return (
    <BrowserRouter>
      <Header />
      {showSlider && <Slider />}
      <div className='container'>
        <Routes onChange={handleNavigation}>
          <Route
            path="/"
            element={<Home showSlider={showSlider} />}
          />
          <Route
            path="/movies"
            element={<Movies showSlider={false} />} // Përdorimi i prop "showSlider"
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
