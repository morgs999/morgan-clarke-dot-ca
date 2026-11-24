import { useState } from 'react';
import Navbar from './components/navbar.jsx';
import Podcasts from './sections/podcasts.jsx';
import Software from './sections/software.jsx';
import OrbStudios from './sections/orbstudios.jsx';
import Music from './sections/music.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {


  return (
    <>
    <Navbar />
    <Podcasts />
    <Software />
    <OrbStudios />
    <Music />
    </>
  )
}

export default App
