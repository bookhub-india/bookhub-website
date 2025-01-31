import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import JoinUs from './pages/JoinUs';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Submission from './pages/Submission';
import Research from './pages/Research';
import { SpeedInsights } from "@vercel/speed-insights/react"
const pageVariants = {
    initial: {
        opacity: 0,
        rotateY: 180, 
    },
    in: {
        opacity: 1,
        rotateY: 0, 
    },
    out: {
        opacity: 0,
        rotateY: -180,
    },
};

const App = () => {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <AnimatePresence>
                <motion.div
                    key={location.key}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={{ duration: 0.6 }}
                >
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/join-us" element={<JoinUs />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/Submission" element={<Submission />} />
                        <Route path="/Research" element={<Research />} />
                    </Routes>
                </motion.div>
            </AnimatePresence>
            <Footer />
        </>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;