import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './JS/Home'; // Ensure these paths are correct
import Detail from './JS/Detail'; // Ensure these paths are correct
import Search from './JS/Search'; // Ensure these paths are correct
import Menu from './JS/Menu'; // Ensure these paths are correct
import Footer from './JS/Footer'; // Ensure these paths are correct
import Contact from './JS/Contact'; // Ensure these paths are correct
import NotFound from './JS/NotFound'; // Ensure these paths are correct


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/contact" element={<Contact />} />

            {/* 주어진 링크외 다른 주소 접속 시도시 */}
            <Route path="*" element={<NotFound />} />|
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
