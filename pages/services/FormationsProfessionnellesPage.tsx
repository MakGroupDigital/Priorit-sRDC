import React from 'react';

const FormationsProfessionnellesPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-gradient-to-br from-institutional-emerald to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-institutional-gold font-bold tracking-widest uppercase text-sm">E-Service</span>
          <h1 className="text-5xl md:text-6xl font-lexend font-bold text-institutional-blue dark:text-white mt-4 mb-6">
            Formations Professionnelles
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Développez vos compétences avec notre partenaire Euroforma, centre de formation professionnelle européen
          </p>
        </div>

        {/* Euroforma Section */}
        <div className="space-y-12">
          <div className="bg-gradient-to-br from-institutional-blue to-blue-900 p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-institutional-blue">EF</span>
                </div>
                <div>
                  <h2 className="text-4xl font-lexend font-bold">Euroforma RDC</h2>
                  <p className="text-slate-200">Centre de Formation Professionnelle Européen</p>
                </div>
              </div>
              <p className="text-lg text-slate-100 mb-8 leading-relaxed">
                Euroforma est un centre de formation professionnelle européen implanté en RDC, offrant des programmes de formation de haute qualité conformes aux standards internationaux. Notre partenariat avec Euroforma permet aux jeunes congolais d'accéder à des formations certifiantes reconnues en Europe et en Afrique.
              </p>
              <a 
                href="https://euroforma-rdc.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-institutional-blue rounded-full font-bold hover:bg-slate-100 transition-all"
              >
                Visiter le site officiel
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
          </div>

          {/* Domaines de formation */}
          <div className="bg-white dark:bg-institutional-dark p-10 rounded-3xl border border-slate-200 dark:border-slate-800">
            <h2 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-8">
              Domaines de Formation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="w-12 h-12 bg-institutional-blue rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">Informatique & Digital</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Développement web, programmation, design graphique, marketing digital
                </p>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="w-12 h-12 bg-institutional-emerald rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">Gestion & Management</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Gestion d'entreprise, comptabilité, ressources humaines, entrepreneuriat
                </p>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="w-12 h-12 bg-institutional-gold rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">Langues & Communication</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Anglais, français, communication professionnelle, relations publiques
                </p>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">Sciences & Techniques</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Électricité, mécanique, électronique, maintenance industrielle
                </p>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">Finance & Banque</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Analyse financière, gestion bancaire, microfinance, audit
                </p>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">Santé & Social</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Soins infirmiers, assistance sociale, gestion hospitalière
                </p>
              </div>
            </div>
          </div>

          {/* Avantages */}
          <div className="bg-white dark:bg-institutional-dark p-10 rounded-3xl border border-slate-200 dark:border-slate-800">
            <h2 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-8">
              Pourquoi Choisir Euroforma ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-institutional-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">
                    Certifications Reconnues
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Diplômes et certificats reconnus aux standards européens et internationaux
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-institutional-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👨‍🏫</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">
                    Formateurs Qualifiés
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Équipe pédagogique expérimentée avec expertise européenne et locale
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-institutional-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💼</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">
                    Insertion Professionnelle
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Accompagnement vers l'emploi et réseau d'entreprises partenaires
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-institutional-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔧</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">
                    Équipements Modernes
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Installations et matériel pédagogique de dernière génération
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-slate-100 dark:bg-slate-800 p-10 rounded-3xl text-center">
            <h2 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-4">
              Prêt à Commencer Votre Formation ?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Visitez le site officiel d'Euroforma pour découvrir tous les programmes disponibles et vous inscrire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://euroforma-rdc.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-4 bg-institutional-blue text-white rounded-full font-bold hover:bg-blue-900 transition-all inline-flex items-center justify-center gap-2"
              >
                Visiter Euroforma
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <button className="px-10 py-4 border-2 border-institutional-blue text-institutional-blue dark:text-white dark:border-white rounded-full font-bold hover:bg-institutional-blue hover:text-white dark:hover:bg-white dark:hover:text-institutional-blue transition-all">
                Nous Contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationsProfessionnellesPage;
