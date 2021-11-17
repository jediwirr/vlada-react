import React from 'react';
import './App.css';
import Home from './screens/HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import BlueGreen from './screens/BlueGreen';
import Country from './screens/Country';
import Pastel from './screens/Pastel';
import BlueLights from './components/BlueLights';
import Dostoevsky from './screens/Dostoevsky';
import ZinVlada from './screens/ZinVlada';
import Noise from './screens/Noise';
import Portraits from './screens/Portraits';
import About from './screens/About';
import Texts from './screens/TextsScreen';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bluegreen" element={<BlueGreen />} />
            <Route path="/country" element={<Country />} />
            <Route path="/pastel" element={<Pastel />} />
            <Route path="/bluelights" element={<BlueLights />} />
            <Route path="/dostoevsky" element={<Dostoevsky />} />
            <Route path="/zin" element={<ZinVlada />} />
            <Route path="/noise" element={<Noise />} />
            <Route path="/portraits" element={<Portraits />} />
            <Route path="/about" element={<About />} />
            <Route path="/texts" element={<Texts />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
