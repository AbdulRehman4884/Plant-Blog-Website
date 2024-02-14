
import './App.css';
import About from './Component/About';
import Footer from './Component/Footer';
import Home from './Component/Home';

import Navbar from './Component/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
  <>
      <BrowserRouter>
          < Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
          </Routes>
      </BrowserRouter>
  </>

  );
}

export default App;
