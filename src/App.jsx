import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CurtainLoader from './components/CurtainsLoader.jsx'; 
import CurtainTransition from './components/CurtainTransition.jsx';
import AboutMe from './components/AboutMe.jsx';
import MyProjects from './components/MyProjects.jsx';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Skills from './components/Skills.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoaderComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  const handleNavigation = (path) => {
    // if (isTransitioning || location.pathname === path) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      navigate(path);
    }, 1400);
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {isLoading ? (
        <CurtainLoader onAnimationComplete={handleLoaderComplete}>
          <div className={`w-full h-full ${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <Navbar onNavigate={handleNavigation} isTransitioning={isTransitioning} />
            <main className="pt-16 text-black p-4">
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/projects" element={<MyProjects />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/skills" element={<Skills />} />
              </Routes>
            </main>
          </div>
        </CurtainLoader>
      ) : (
        <>
          <Navbar onNavigate={handleNavigation} isTransitioning={isTransitioning} />
          <main className="pt-16 text-black p-4">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path="/projects" element={<MyProjects />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </main>
          
          <CurtainTransition 
            isTransitioning={isTransitioning} 
            onComplete={handleTransitionComplete}
          />
        </>
      )}
    </div>
  );
};

export default App;