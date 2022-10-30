import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import Nav from './components/Nav';
import Post from './pages/Post';
import Profil from './pages/Profil';
// import Firebase from '../Firebase';

// const fire = new Firebase()

// fire.getListingById("MMyGJPXTconHB6RnI2SF").then(console.log).catch(console.error)

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post" element={<Post />} />
        <Route path="profil" element={<Profil />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
