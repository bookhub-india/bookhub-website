import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import JoinUs from './pages/JoinUs';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Donate from './pages/Donate';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/join-us" element={<JoinUs />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/donate" element={<Donate />} />
            </Routes>
        </Router>
    );
};

export default App;