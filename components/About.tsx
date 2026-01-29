import React from 'react';

const About: React.FC = () => {
  return (
    <section id="apropos" className="py-24 px-6 bg-white dark:bg-institutional-dark">
      <div className="max-w-7xl mx-auto">
        {/* Qui sommes-nous */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-lexend font-bold text-institutional-blue dark:text-white mb-8">
            Qui sommes-nous ?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
            Nous sommes <span className="font-bold text-institutional-blue dark:text-institutional-gold">Priorités RDC</span>, 
            une structure inquisitoire créée par des jeunes. Nous rassemblons et mobilisons la jeunesse congolaise 
            pour qu'elle devienne actrice de son propre avenir et du développement de la République Démocratique du Congo.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-20 bg-gradient-to-br from-institutional-blue to-blue-900 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-lexend font-bold mb-6 text-institutional-gold">Notre Mission</h3>
          <p className="text-lg leading-relaxed">
            Notre mission est de transformer le potentiel des jeunes en actions concrètes pour un Congo plus fort. 
            Nous œuvrons au moyen de la sensibilisation, la formation, le plaidoyer, l'emploi et l'entrepreneuriat, 
            pour l'émergence d'une jeunesse congolaise responsable, autonome et pleinement engagée dans le développement 
            de la République Démocratique du Congo.
          </p>
        </div>

        {/* Objectifs principaux */}
        <div className="mb-20">
          <h3 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-8">
            Nos Objectifs Principaux
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 bg-institutional-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Mobiliser la jeunesse pour améliorer ses conditions de vie grâce à leur participation active 
                à l'amélioration de leurs conditions sociales, économiques et culturelles.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 bg-institutional-emerald rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Encourager l'engagement citoyen et patriotique. Nous promouvons un engagement citoyen fondé 
                sur le civisme, la responsabilité et l'amour de la patrie.
              </p>
            </div>
          </div>
        </div>

        {/* Axes d'intervention */}
        <div className="mb-20">
          <h3 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-8">
            Nos Axes d'Intervention
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Éducation et valeurs familiales',
                desc: 'Sensibilisation sur le rôle fondamental de la famille dans l\'éducation des enfants.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: 'Formation et conférences',
                desc: 'Organisation de conférences, forums et ateliers sur l\'épanouissement, le leadership et l\'entrepreneuriat.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                ),
                title: 'Plaidoyer citoyen',
                desc: 'Dialogue avec les pouvoirs publics pour l\'émancipation de la jeunesse.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Emploi et entrepreneuriat',
                desc: 'Promotion de l\'emploi, de l\'auto-emploi et de l\'entrepreneuriat des jeunes.'
              }
            ].map((axe, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-institutional-blue to-institutional-emerald rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                  {axe.icon}
                </div>
                <h4 className="font-bold text-institutional-blue dark:text-white mb-3">{axe.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{axe.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Valeurs */}
        <div className="mb-20 text-center">
          <h3 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-8">
            Nos Valeurs
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['Autonomie', 'Engagement', 'Développement'].map((valeur) => (
              <div key={valeur} className="px-8 py-4 bg-institutional-gold text-institutional-blue font-bold rounded-full text-lg">
                {valeur}
              </div>
            ))}
          </div>
        </div>

        {/* Ambition */}
        <div className="text-center bg-slate-50 dark:bg-slate-900 p-12 rounded-3xl">
          <h3 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-4">
            Notre Ambition
          </h3>
          <p className="text-xl text-slate-700 dark:text-slate-300 font-medium">
            Bâtir une jeunesse unie et actrice du changement
          </p>
        </div>

        {/* Témoignages */}
        <div className="mt-20">
          <h3 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-8 text-center">
            Témoignages
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-institutional-blue rounded-full"></div>
                  <div>
                    <p className="font-bold text-institutional-blue dark:text-white">Participant {i}</p>
                    <p className="text-sm text-slate-500">Jeune entrepreneur</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic">
                  "Priorités RDC m'a permis de développer mes compétences et de réaliser mes projets."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
