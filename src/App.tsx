import React from 'react';
import Footer from './layouts/header-footer/Footer';

import './App.css';
import Navbar from './layouts/header-footer/Navbar';
import HomePage from './layouts/homepage/HomePage';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <HomePage></HomePage>
        <Footer></Footer>
      
    </div>
  );
}

export default App;
