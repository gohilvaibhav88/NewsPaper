import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/general" element={<News country="in" category="general" />} />
          <Route path="/about" element={<News country="in" category="About" />} />


            <Route path="/entertainment" element={<News country="in" category="Entertainment" />} />
            <Route path="/general" element={<News country="in" category="General" />} />
            <Route path="/health" element={<News country="in" category="Health" />} />
            <Route path="/technology" element={<News country="in" category="Technology" />} />
            <Route path="/science" element={<News country="in" category="Science" />} />
            <Route path="/sports" element={<News country="in" category="Sports" />} />
            <Route path="/business" element={<News country="in" category="Business" />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}
