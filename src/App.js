import { useState } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';

import Home from './pages/Home';
import Success from './pages/Success'
import Failed from './pages/Failed'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className='pages'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/Failed" element={<Failed />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
