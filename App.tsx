
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { Language } from './types';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import DataVizPage from './pages/DataVizPage';
import BlogPage from './pages/BlogPage';
import NewsroomPage from './pages/NewsroomPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import StrategicHubPage from './pages/StrategicHubPage';

// Service Pages
import CooperationChinoisePage from './pages/services/CooperationChinoisePage';
import BoursesEtudesPage from './pages/services/BoursesEtudesPage';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>(Language.FR);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={() => setDarkMode(!darkMode)}
          language={language}
          setLanguage={setLanguage}
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/dataviz" element={<DataVizPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/newsroom" element={<NewsroomPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/strategic-hub" element={<StrategicHubPage />} />
            
            {/* Service Routes */}
            <Route path="/services/cooperation-chinoise" element={<CooperationChinoisePage />} />
            <Route path="/services/bourses-etudes" element={<BoursesEtudesPage />} />
          </Routes>
        </main>

        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;

