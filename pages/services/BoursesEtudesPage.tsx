import React from 'react';

const BoursesEtudesPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-gradient-to-br from-institutional-blue to-institutional-emerald rounded-3xl flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <span className="text-institutional-gold font-bold tracking-widest uppercase text-sm">E-Service</span>
          <h1 className="text-5xl md:text-6xl font-lexend font-bold text-institutional-blue dark:text-white mt-4 mb-6">
            Bourses d'Études
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Consultez les opportunités de bourses d'études disponibles pour poursuivre votre formation
          </p>
        </div>

        {/* Bourses disponibles */}
        <div className="space-y-12">
          <div className="bg-white dark:bg-institutional-dark p-10 rounded-3xl border border-slate-200 dark:border-slate-800">
            <h2 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-8">
              Bourses Disponibles
            </h2>
            
            <div className="space-y-6">
              {/* Bourse 1 */}
              <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border-l-4 border-institutional-gold">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-institutional-blue dark:text-white mb-2">
                      Bourse d'Excellence Académique
                    </h3>
                    <p className="text-institutional-gold font-semibold">Niveau: Licence & Master</p>
                  </div>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-bold">
                    Ouvert
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Bourse complète couvrant les frais de scolarité, logement et allocation mensuelle pour les étudiants méritants.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-slate-600 dark:text-slate-400">📅 Date limite: 30 Juin 2026</span>
                  <span className="text-slate-600 dark:text-slate-400">🎓 Places: 50</span>
                  <span className="text-slate-600 dark:text-slate-400">🌍 Destinations: Europe, Amérique, Asie</span>
                </div>
                <button className="mt-6 px-6 py-3 bg-institutional-blue text-white rounded-full font-bold hover:bg-blue-900 transition-all">
                  Postuler maintenant
                </button>
              </div>

              {/* Bourse 2 */}
              <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border-l-4 border-institutional-emerald">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-institutional-blue dark:text-white mb-2">
                      Bourse en Sciences et Technologies
                    </h3>
                    <p className="text-institutional-emerald font-semibold">Niveau: Master & Doctorat</p>
                  </div>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-bold">
                    Ouvert
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Programme spécialisé pour les étudiants en STEM avec focus sur l'innovation et la recherche appliquée.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-slate-600 dark:text-slate-400">📅 Date limite: 15 Juillet 2026</span>
                  <span className="text-slate-600 dark:text-slate-400">🎓 Places: 30</span>
                  <span className="text-slate-600 dark:text-slate-400">🌍 Destinations: USA, Canada, Allemagne</span>
                </div>
                <button className="mt-6 px-6 py-3 bg-institutional-blue text-white rounded-full font-bold hover:bg-blue-900 transition-all">
                  Postuler maintenant
                </button>
              </div>

              {/* Bourse 3 */}
              <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-institutional-blue dark:text-white mb-2">
                      Bourse Leadership Féminin
                    </h3>
                    <p className="text-blue-500 font-semibold">Niveau: Tous niveaux</p>
                  </div>
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-bold">
                    Bientôt
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Programme dédié aux jeunes femmes congolaises avec potentiel de leadership dans tous les domaines.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-slate-600 dark:text-slate-400">📅 Date limite: 1 Septembre 2026</span>
                  <span className="text-slate-600 dark:text-slate-400">🎓 Places: 40</span>
                  <span className="text-slate-600 dark:text-slate-400">🌍 Destinations: France, Belgique, UK</span>
                </div>
                <button className="mt-6 px-6 py-3 bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full font-bold cursor-not-allowed">
                  Ouverture prochaine
                </button>
              </div>
            </div>
          </div>

          {/* Guide de candidature */}
          <div className="bg-gradient-to-br from-institutional-blue to-blue-900 p-10 rounded-3xl text-white">
            <h2 className="text-3xl font-lexend font-bold mb-6">Guide de Candidature</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-3">Documents Requis</h3>
                <ul className="space-y-2 text-slate-200">
                  <li>• Copie du diplôme ou relevé de notes</li>
                  <li>• Lettre de motivation</li>
                  <li>• CV détaillé</li>
                  <li>• Deux lettres de recommandation</li>
                  <li>• Copie de la carte d'identité</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Processus de Sélection</h3>
                <ul className="space-y-2 text-slate-200">
                  <li>• Évaluation du dossier académique</li>
                  <li>• Entretien de motivation</li>
                  <li>• Test de langue (si requis)</li>
                  <li>• Évaluation du projet d'études</li>
                  <li>• Décision finale sous 30 jours</li>
                </ul>
              </div>
            </div>
            <button className="px-10 py-4 bg-white text-institutional-blue rounded-full font-bold hover:bg-slate-100 transition-all">
              Télécharger le guide complet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoursesEtudesPage;
