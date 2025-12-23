
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DataViz from './components/DataViz';
import StrategicHub from './components/StrategicHub';
import ProjectGrid from './components/ProjectGrid';
import Newsroom from './components/Newsroom';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import { Language } from './types';

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
    <div className="min-h-screen">
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={() => setDarkMode(!darkMode)}
        language={language}
        setLanguage={setLanguage}
      />
      
      <main>
        <Hero />
        
        {/* Scroll Marquee for Partners */}
        <div className="bg-slate-50 dark:bg-slate-900 py-10 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
            {[1,2,3,4,5,6,1,2,3,4,5,6].map((i) => (
              <div key={i} className="flex items-center gap-4 px-12 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <div className="w-12 h-12 bg-slate-300 dark:bg-slate-700 rounded-full flex-shrink-0"></div>
                <span className="text-xl font-lexend font-bold text-slate-500">PARTENAIRE {i}</span>
              </div>
            ))}
          </div>
        </div>

        <StrategicHub />
        <DataViz />
        <ProjectGrid />
        
        {/* Call to Action: Citizen Space */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto bg-gradient-to-br from-institutional-blue to-blue-900 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden text-center">
            <div className="relative z-10">
              <span className="text-institutional-gold font-bold tracking-widest uppercase text-sm">Espace Citoyen</span>
              <h2 className="text-4xl md:text-6xl font-lexend font-bold mt-4 mb-8">Votre voix compte dans <br />le grand Congo de demain</h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
                Participez aux consultations publiques, proposez des initiatives locales et suivez en direct l'utilisation des fonds publics dans votre province.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-white text-institutional-blue rounded-full font-bold hover:bg-slate-100 transition-all">S'inscrire au Portail</button>
                <button className="px-10 py-4 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all">Télécharger le Guide</button>
              </div>
            </div>
            {/* Abstract glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
          </div>
        </section>

        <Newsroom />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
