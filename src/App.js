import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import WeatherLocations from './components/WeatherLocations';
import Functional from './components/Functional';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WeatherLocations />} />
          <Route path='/Functional' element={<Functional />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
