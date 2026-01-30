import React from 'react';
import { Link } from 'react-router-dom';

const Strategie2030Page: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-institutional-gold font-bold tracking-widest uppercase text-sm">Vision Nationale</span>
          <h1 className="text-5xl md:text-7xl font-lexend font-bold text-institutional-blue dark:text-white mt-4 mb-6">
            Stratégie 2030
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Notre feuille de route pour transformer la RDC en une nation prospère, innovante et durable
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-br from-institutional-blue to-blue-900 p-12 md:p-16 rounded-3xl text-white mb-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-lexend font-bold mb-6">Notre Vision</h2>
            <p className="text-xl leading-relaxed text-slate-100 mb-8">
              Faire de la République Démocratique du Congo une puissance économique africaine d'ici 2030, 
              en valorisant nos ressources naturelles, en développant notre capital humain et en bâtissant 
              des infrastructures modernes pour tous les Congolais.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <div className="text-4xl font-bold text-institutional-gold mb-2">100M+</div>
                <div className="text-sm text-slate-200">Citoyens bénéficiaires</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <div className="text-4xl font-bold text-institutional-gold mb-2">26</div>
                <div className="text-sm text-slate-200">Provinces mobilisées</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <div className="text-4xl font-bold text-institutional-gold mb-2">2030</div>
                <div className="text-sm text-slate-200">Horizon de réalisation</div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
        </div>

        {/* Piliers Stratégiques */}
        <div className="mb-12">
          <h2 className="text-4xl font-lexend font-bold text-institutional-blue dark:text-white mb-8 text-center">
            Les 5 Piliers Stratégiques
          </h2>
          
          <div className="space-y-6">
            {/* Pilier 1 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border-l-4 border-institutional-blue">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-institutional-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-institutional-blue dark:text-white mb-3">
                    Infrastructure & Connectivité
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Développement massif des routes, ponts, ports et aéroports. Connexion internet haut débit 
                    dans toutes les provinces. Électrification complète du territoire national.
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>15,000 km de routes nationales réhabilitées</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>Barrage d'Inga III - 11,000 MW de capacité</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>Fibre optique dans 100% des chefs-lieux</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pilier 2 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border-l-4 border-institutional-emerald">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-institutional-emerald rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-institutional-blue dark:text-white mb-3">
                    Éducation & Capital Humain
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Formation d'une génération de leaders, techniciens et innovateurs. Accès universel à 
                    l'éducation de qualité. Bourses d'excellence et partenariats internationaux.
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>50,000 bourses d'études internationales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>100 centres de formation professionnelle</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>Gratuité de l'enseignement primaire et secondaire</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pilier 3 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border-l-4 border-institutional-gold">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-institutional-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-institutional-blue dark:text-white mb-3">
                    Économie & Industrialisation
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Transformation des matières premières sur place. Création de zones économiques spéciales. 
                    Soutien aux PME et entrepreneuriat local.
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>10 zones économiques spéciales créées</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>Transformation locale de 60% des minerais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>1 million d'emplois créés dans l'industrie</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pilier 4 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border-l-4 border-blue-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-institutional-blue dark:text-white mb-3">
                    Santé & Protection Sociale
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Couverture santé universelle. Hôpitaux modernes dans chaque province. 
                    Programmes de protection sociale pour les plus vulnérables.
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>26 hôpitaux généraux de référence modernisés</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>Assurance maladie universelle</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>5 millions de familles sous protection sociale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pilier 5 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border-l-4 border-green-600">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">5</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-institutional-blue dark:text-white mb-3">
                    Environnement & Développement Durable
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Protection de la forêt du bassin du Congo. Énergies renouvelables. 
                    Agriculture durable et sécurité alimentaire.
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>60 millions d'hectares de forêts protégées</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>80% d'énergie renouvelable d'ici 2030</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-institutional-gold">✓</span>
                      <span>Autosuffisance alimentaire nationale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-slate-100 dark:bg-slate-800 p-10 rounded-3xl text-center">
          <h2 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-4">
            Suivez l'Avancement de la Stratégie
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Découvrez les projets en cours et leur progression en temps réel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <button className="px-10 py-4 bg-institutional-blue text-white rounded-full font-bold hover:bg-blue-900 transition-all">
                Voir les Projets
              </button>
            </Link>
            <Link to="/dataviz">
              <button className="px-10 py-4 border-2 border-institutional-blue text-institutional-blue dark:text-white dark:border-white rounded-full font-bold hover:bg-institutional-blue hover:text-white dark:hover:bg-white dark:hover:text-institutional-blue transition-all">
                Données & Statistiques
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategie2030Page;
