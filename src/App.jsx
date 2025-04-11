import Aboutme from './pages/AboutMe/Aboutme';
import Skills from './pages/Skills/SolarSystem.jsx';
import Project from './pages/Projects/Project.jsx';
import Contact from './pages/Contact/Contact.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

function App() {
  return (
    <div className="App">
      <Aboutme />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default App
