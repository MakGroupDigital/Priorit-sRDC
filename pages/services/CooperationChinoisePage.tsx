import React from 'react';

const CooperationChinoisePage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-institutional-gold font-bold tracking-widest uppercase text-sm">E-Service</span>
          <h1 className="text-5xl md:text-6xl font-lexend font-bold text-institutional-blue dark:text-white mt-4 mb-6">
            Coopération Chinoise
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Découvrez les opportunités de coopération et d'échanges avec la Chine pour les jeunes congolais
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Opportunités */}
          <div className="bg-white dark:bg-institutional-dark p-10 rounded-3xl border border-slate-200 dark:border-slate-800">
            <h2 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-6">
              Opportunités Disponibles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-3">Échanges Culturels</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Programmes d'échanges culturels et linguistiques avec des universités chinoises partenaires.
                </p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-3">Formations Techniques</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Formations spécialisées dans les domaines de l'ingénierie, technologie et innovation.
                </p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-3">Stages Professionnels</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Opportunités de stages dans des entreprises chinoises opérant en RDC et en Chine.
                </p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-3">Projets Conjoints</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Collaboration sur des projets de développement et d'infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Critères d'éligibilité */}
          <div className="bg-white dark:bg-institutional-dark p-10 rounded-3xl border border-slate-200 dark:border-slate-800">
            <h2 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-6">
              Critères d'Éligibilité
            </h2>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-institutional-gold text-2xl">✓</span>
                <span>Être citoyen congolais âgé de 18 à 35 ans</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-institutional-gold text-2xl">✓</span>
                <span>Avoir un diplôme d'études secondaires ou universitaires</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-institutional-gold text-2xl">✓</span>
                <span>Démontrer un intérêt pour la coopération sino-congolaise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-institutional-gold text-2xl">✓</span>
                <span>Avoir un bon dossier académique ou professionnel</span>
              </li>
            </ul>
          </div>

          {/* Comment postuler */}
          <div className="bg-gradient-to-br from-institutional-blue to-blue-900 p-10 rounded-3xl text-white">
            <h2 className="text-3xl font-lexend font-bold mb-6">Comment Postuler ?</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Créez votre compte</h3>
                  <p className="text-slate-200">Inscrivez-vous sur notre plateforme e-services</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Complétez votre profil</h3>
                  <p className="text-slate-200">Remplissez toutes les informations requises</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Soumettez votre candidature</h3>
                  <p className="text-slate-200">Choisissez le programme qui vous intéresse et postulez</p>
                </div>
              </div>
            </div>
            <button className="px-10 py-4 bg-white text-institutional-blue rounded-full font-bold hover:bg-slate-100 transition-all">
              Commencer ma candidature
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooperationChinoisePage;
