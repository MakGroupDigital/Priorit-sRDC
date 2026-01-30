import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: Language;
  setLanguage: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-institutional-dark/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-20 h-20 bg-institutional-blue rounded flex items-center justify-center">
            {/* Logo principal */}
            <img src="https://res.cloudinary.com/dy73hzkpm/image/upload/v1766418270/LOGO_PRIORITE%CC%81S_RDC_hulitb.png" alt="Priorités RDC" className="w-24 h-24 object-cover rounded" />
          </div>
          <div className="flex flex-col">
            <span className={`font-lexend font-bold text-xl tracking-tight ${isScrolled ? 'text-institutional-blue dark:text-white' : 'text-white'}`}>
              PRIORITÉS <span className="text-institutional-gold">RDC</span>
            </span>
            <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-200'}`}>Portail Officiel du Développement</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-medium">
          {[
            { label: 'Accueil', href: '/' },
            { label: 'À propos', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Projets', href: '/projects' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' }
          ].map((item) => (
            <Link key={item.label} to={item.href} className={`transition-colors hover:text-institutional-gold ${isScrolled ? 'text-slate-700 dark:text-slate-200' : 'text-white'}`}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="bg-transparent border-none focus:ring-0 cursor-pointer font-bold text-sm text-institutional-gold"
          >
            {Object.values(Language).map(lang => (
              <option key={lang} value={lang} className="text-black">{lang}</option>
            ))}
          </select>
          
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200' : 'hover:bg-white/10 text-white'}`}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <Link to="/investir">
            <button className="hidden md:block bg-institutional-gold hover:bg-yellow-600 text-institutional-blue font-bold px-6 py-2 rounded transition-all transform hover:scale-105">
              Investir
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
