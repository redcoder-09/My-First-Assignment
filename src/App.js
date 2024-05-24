import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Whatwedo from './components/pages/Whatwedo';
import Ourteam from './components/pages/Ourteam';



function App() {
  return (
    <>
    <Router>
     <Navbar />
       <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/whatwedo' component={<Whatwedo/>} />
        <Route path='/ourteam' component={<Ourteam/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
