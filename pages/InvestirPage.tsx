import React from 'react';
import { Link } from 'react-router-dom';
import { generateInvestorGuide } from '../utils/generateInvestorGuide';

const InvestirPage: React.FC = () => {
  const handleDownloadGuide = () => {
    generateInvestorGuide();
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-institutional-gold font-bold tracking-widest uppercase text-sm">Opportunités d'Investissement</span>
          <h1 className="text-5xl md:text-7xl font-lexend font-bold text-institutional-blue dark:text-white mt-4 mb-6">
            Investir en RDC
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Découvrez les opportunités d'investissement dans l'une des économies les plus prometteuses d'Afrique
          </p>
        </div>

        {/* Pourquoi investir en RDC */}
        <div className="bg-gradient-to-br from-institutional-blue to-blue-900 p-12 md:p-16 rounded-3xl text-white mb-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-lexend font-bold mb-6">Pourquoi Investir en RDC ?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-institutional-gold">Ressources Naturelles Exceptionnelles</h3>
                <ul className="space-y-2 text-slate-100">
                  <li>• 80 millions d'hectares de terres arables</li>
                  <li>• 60% des réserves mondiales de cobalt</li>
                  <li>• 10% des réserves mondiales de cuivre</li>
                  <li>• Plus grand potentiel hydroélectrique d'Afrique</li>
                  <li>• Forêt tropicale du bassin du Congo</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-institutional-gold">Marché en Croissance</h3>
                <ul className="space-y-2 text-slate-100">
                  <li>• Population de 100+ millions d'habitants</li>
                  <li>• Croissance démographique de 3.2% par an</li>
                  <li>• Classe moyenne en expansion rapide</li>
                  <li>• Position stratégique au cœur de l'Afrique</li>
                  <li>• Accès à 14 pays frontaliers</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
        </div>

        {/* Secteurs Prioritaires */}
        <div className="mb-12">
          <h2 className="text-4xl font-lexend font-bold text-institutional-blue dark:text-white mb-8 text-center">
            Secteurs Prioritaires
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Secteur 1 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all">
              <div className="w-16 h-16 bg-institutional-blue rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-3">Énergie</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Hydroélectricité, solaire, éolien. Potentiel de 100,000 MW.
              </p>
              <div className="text-institutional-gold font-bold">ROI: 15-25%</div>
            </div>

            {/* Secteur 2 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all">
              <div className="w-16 h-16 bg-institutional-emerald rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-3">Infrastructure</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Routes, ponts, ports, aéroports. Besoins massifs en développement.
              </p>
              <div className="text-institutional-gold font-bold">ROI: 12-20%</div>
            </div>

            {/* Secteur 3 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all">
              <div className="w-16 h-16 bg-institutional-gold rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-3">Mines & Métaux</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Cobalt, cuivre, or, diamants. Ressources minérales abondantes.
              </p>
              <div className="text-institutional-gold font-bold">ROI: 18-30%</div>
            </div>

            {/* Secteur 4 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-3">Agriculture</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Agro-industrie, élevage, pêche. Terres fertiles inexploitées.
              </p>
              <div className="text-institutional-gold font-bold">ROI: 10-18%</div>
            </div>

            {/* Secteur 5 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-3">Technologies</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Fintech, e-commerce, télécoms. Marché digital en explosion.
              </p>
              <div className="text-institutional-gold font-bold">ROI: 20-35%</div>
            </div>

            {/* Secteur 6 */}
            <div className="bg-white dark:bg-institutional-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-3">Immobilier</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Logements, bureaux, centres commerciaux. Demande croissante.
              </p>
              <div className="text-institutional-gold font-bold">ROI: 12-22%</div>
            </div>
          </div>
        </div>

        {/* Avantages pour les Investisseurs */}
        <div className="bg-white dark:bg-institutional-dark p-10 rounded-3xl border border-slate-200 dark:border-slate-800 mb-12">
          <h2 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-8 text-center">
            Avantages pour les Investisseurs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-institutional-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">
                  Code des Investissements Attractif
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Exonérations fiscales, facilités douanières, garanties de transfert de capitaux
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-institutional-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">
                  Partenariats Public-Privé
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Cadre légal favorable aux PPP pour les grands projets d'infrastructure
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-institutional-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">
                  Accords Internationaux
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Membre de la SADC, COMESA, CEEAC - accès à 600 millions de consommateurs
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-institutional-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-institutional-blue dark:text-white mb-2">
                  Protection des Investissements
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Conventions bilatérales d'investissement avec plus de 30 pays
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Processus d'Investissement */}
        <div className="bg-slate-100 dark:bg-slate-800 p-10 rounded-3xl mb-12">
          <h2 className="text-3xl font-lexend font-bold text-institutional-blue dark:text-white mb-8 text-center">
            Comment Investir ?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-institutional-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-institutional-blue dark:text-white mb-2">Consultation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Contactez notre équipe pour discuter de votre projet
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-institutional-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-institutional-blue dark:text-white mb-2">Étude de Faisabilité</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Analyse approfondie du secteur et des opportunités
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-institutional-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-institutional-blue dark:text-white mb-2">Enregistrement</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Formalités administratives et agrément
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-institutional-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold text-institutional-blue dark:text-white mb-2">Lancement</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Démarrage des opérations avec notre accompagnement
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-institutional-blue to-blue-900 p-12 rounded-3xl text-white text-center">
          <h2 className="text-4xl font-lexend font-bold mb-4">Prêt à Investir ?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous accompagner dans votre projet d'investissement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-10 py-4 bg-white text-institutional-blue rounded-full font-bold hover:bg-slate-100 transition-all">
                Nous Contacter
              </button>
            </Link>
            <button 
              onClick={handleDownloadGuide}
              className="px-10 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Télécharger le Guide de l'Investisseur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestirPage;
