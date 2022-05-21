import react from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './App.css';
import Home from './pages/Home/home';
import About from './pages/Atividades/about';
import Contact from './pages/Contato/contact';
import Engajar from './pages/Donete/engajar';
import Voluntario from './pages/Voluntario/voluntario';
import Termo from './pages/Projetos/termo';
import NavBar from './components/Navbar/navbar';
import Backend from './backend/adm.js';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/engajar" element={<Engajar/>}/>  
        <Route path="/voluntario" element={<Voluntario/>}/>  
        <Route path="/termo" element={<Termo/>}/>
        <Route path="/adm" element={<Backend/>}/>
      </Routes>
    </Router>
  );
}

export default App;
