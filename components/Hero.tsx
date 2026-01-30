
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-institutional-blue/60 z-10"></div>
      
      {/* Fallback Image / Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        poster="https://picsum.photos/seed/drc-hero/1920/1080"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-african-landscape-from-above-at-sunset-31562-large.mp4" type="video/mp4" />
      </video>

      <div className="relative z-20 text-center max-w-5xl px-6">
        <div className="inline-block mb-6 px-4 py-1 border border-institutional-gold/50 rounded-full bg-white/5 backdrop-blur-md">
          <span className="text-institutional-gold font-lexend text-sm tracking-widest uppercase">République Démocratique du Congo</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-lexend font-extrabold text-white mb-8 leading-tight">
          Bâtir l'Avenir du <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-institutional-gold via-white to-institutional-emerald">
            Cœur de l'Afrique
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Découvrez la vision stratégique d'une nation en pleine mutation. Transparence, innovation et développement durable pour les 100 millions de Congolais.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/strategie-2030">
            <button className="w-full sm:w-auto px-10 py-4 bg-institutional-blue text-white rounded-full font-bold text-lg hover:bg-blue-900 transition-all border border-white/20 shadow-2xl">
              Découvrir la Stratégie 2030
            </button>
          </Link>
          <Link to="/projets-en-direct">
            <button className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Voir les Projets en Direct
            </button>
          </Link>
        </div>
      </div>

      {/* Floating Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
