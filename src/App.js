import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About'
import Home from './Home';
import Contact from './Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' exact element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
