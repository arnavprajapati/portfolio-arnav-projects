import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CurtainLoader from './components/CurtainsLoader.jsx'; 
import AboutUs from './components/AboutUs.jsx';
import MyProjects from './components/MyProjects.jsx';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };


  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {isLoading ? (
        <CurtainLoader onAnimationComplete={handleLoaderComplete} />
      ) : (
        <>
          <Navbar />
          <main className="pt-16 text-black p-4">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path="/projects" element={<MyProjects />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/skills" element={<div>Skills Page</div>} />
            </Routes>
          </main>
        </>
      )}
    </div>
  );
};

export default App;