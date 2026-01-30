import React from 'react';
import ProjectGrid from '../components/ProjectGrid';
import DataViz from '../components/DataViz';

const ProjetsEnDirectPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-institutional-gold font-bold tracking-widest uppercase text-sm">Suivi en Temps Réel</span>
          <h1 className="text-5xl md:text-7xl font-lexend font-bold text-institutional-blue dark:text-white mt-4 mb-6">
            Projets en Direct
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Suivez l'avancement de tous nos projets de développement en temps réel avec transparence totale
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-4xl font-bold text-institutional-blue dark:text-white mb-2">142</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Projets Actifs</div>
          </div>
          <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-4xl font-bold text-institutional-emerald mb-2">68%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Taux d'Avancement</div>
          </div>
          <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-4xl font-bold text-institutional-gold mb-2">$12.4B</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Investissements</div>
          </div>
          <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">26</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Provinces Couvertes</div>
          </div>
        </div>

        {/* Filtres */}
        <div className="bg-white dark:bg-institutional-dark p-6 rounded-3xl border border-slate-200 dark:border-slate-800 mb-12">
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-institutional-blue text-white rounded-full font-bold hover:bg-blue-900 transition-all">
              Tous les Projets
            </button>
            <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
              Infrastructure
            </button>
            <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
              Énergie
            </button>
            <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
              Éducation
            </button>
            <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
              Santé
            </button>
            <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
              Innovation
            </button>
          </div>
        </div>

        {/* Projets Phares */}
        <div className="mb-16">
          <h2 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-8">
            Projets Phares
          </h2>
          
          <div className="space-y-6">
            {/* Projet 1 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src="https://picsum.photos/seed/inga/400/300" 
                  alt="Barrage Inga III"
                  className="w-full md:w-64 h-48 object-cover rounded-2xl"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="px-3 py-1 bg-institutional-blue/10 text-institutional-blue dark:bg-institutional-blue/20 dark:text-institutional-gold rounded-full text-sm font-bold">
                        Énergie
                      </span>
                      <h3 className="text-2xl font-bold text-institutional-blue dark:text-white mt-3 mb-2">
                        Barrage d'Inga III - Phase 1
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">📍 Kongo-Central</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-institutional-emerald">45%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Avancement</div>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Construction du plus grand barrage hydroélectrique d'Afrique avec une capacité de 11,000 MW. 
                    Ce projet transformera la RDC en exportateur majeur d'énergie propre.
                  </p>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-4">
                    <div className="bg-institutional-emerald h-3 rounded-full" style={{width: '45%'}}></div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span>💰 Budget: $14.5B</span>
                    <span>📅 Fin prévue: Décembre 2028</span>
                    <span>👷 Emplois créés: 15,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src="https://picsum.photos/seed/banana/400/300" 
                  alt="Port de Banana"
                  className="w-full md:w-64 h-48 object-cover rounded-2xl"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 rounded-full text-sm font-bold">
                        Infrastructure
                      </span>
                      <h3 className="text-2xl font-bold text-institutional-blue dark:text-white mt-3 mb-2">
                        Port en Eau Profonde de Banana
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">📍 Banana, Kongo-Central</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-institutional-gold">20%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Avancement</div>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Construction d'un port moderne en eau profonde pour faciliter le commerce international 
                    et positionner la RDC comme hub logistique de l'Afrique centrale.
                  </p>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-4">
                    <div className="bg-institutional-gold h-3 rounded-full" style={{width: '20%'}}></div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span>💰 Budget: $3.2B</span>
                    <span>📅 Fin prévue: Juin 2029</span>
                    <span>👷 Emplois créés: 8,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projet 3 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src="https://picsum.photos/seed/tech/400/300" 
                  alt="Digital Hub"
                  className="w-full md:w-64 h-48 object-cover rounded-2xl"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-500 dark:bg-purple-500/20 rounded-full text-sm font-bold">
                        Innovation
                      </span>
                      <h3 className="text-2xl font-bold text-institutional-blue dark:text-white mt-3 mb-2">
                        Digital Hub Kinshasa
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">📍 Kinshasa</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-500">85%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Avancement</div>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Centre d'innovation technologique regroupant startups, incubateurs et centres de formation 
                    pour faire de Kinshasa la Silicon Valley africaine.
                  </p>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-4">
                    <div className="bg-green-500 h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span>💰 Budget: $450M</span>
                    <span>📅 Fin prévue: Mars 2026</span>
                    <span>👷 Emplois créés: 5,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grille de tous les projets */}
        <ProjectGrid />

        {/* Visualisation des données */}
        <div className="mt-16">
          <DataViz />
        </div>
      </div>
    </div>
  );
};

export default ProjetsEnDirectPage;
