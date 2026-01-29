import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-institutional-gold font-bold tracking-widest uppercase text-sm">E-Services</span>
          <h2 className="text-4xl md:text-5xl font-lexend font-bold text-institutional-blue dark:text-white mt-4 mb-6">
            Nos Services en Ligne
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Accédez à nos services numériques pour faciliter vos démarches et opportunités
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Coopération chinoise */}
          <div className="bg-white dark:bg-institutional-dark p-10 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-lexend font-bold text-institutional-blue dark:text-white mb-4">
              Coopération Chinoise
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Découvrez les opportunités de coopération et d'échanges avec la Chine pour les jeunes congolais.
            </p>
            <Link to="/services/cooperation-chinoise">
              <button className="px-6 py-3 bg-institutional-blue text-white rounded-full font-bold hover:bg-blue-900 transition-all">
                En savoir plus
              </button>
            </Link>
          </div>

          {/* Bourse d'études */}
          <div className="bg-white dark:bg-institutional-dark p-10 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-institutional-blue to-institutional-emerald rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 className="text-2xl font-lexend font-bold text-institutional-blue dark:text-white mb-4">
              Bourses d'Études
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Consultez les opportunités de bourses d'études disponibles pour poursuivre votre formation.
            </p>
            <Link to="/services/bourses-etudes">
              <button className="px-6 py-3 bg-institutional-blue text-white rounded-full font-bold hover:bg-blue-900 transition-all">
                Voir les bourses
              </button>
            </Link>
          </div>

          {/* Formations professionnelles */}
          <div className="bg-white dark:bg-institutional-dark p-10 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-institutional-emerald to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-lexend font-bold text-institutional-blue dark:text-white mb-4">
              Formations Professionnelles
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Développez vos compétences avec Euroforma, centre de formation professionnelle européen.
            </p>
            <Link to="/services/formations-professionnelles">
              <button className="px-6 py-3 bg-institutional-blue text-white rounded-full font-bold hover:bg-blue-900 transition-all">
                Formez-vous avec Euroforma
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
