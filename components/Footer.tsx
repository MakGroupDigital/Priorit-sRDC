import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-institutional-dark text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 bg-institutional-blue rounded flex items-center justify-center overflow-hidden">
                <img src="/assets/logo-priorites-rdc.svg" alt="Priorités RDC" className="w-full h-full object-cover" />
              </div>
              <span className="font-lexend font-bold text-xl tracking-tight">
                PRIORITÉS <span className="text-institutional-gold">RDC</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              L'interface numérique officielle de la vision de développement de la République Démocratique du Congo. Engagement, Transparence, Progrès.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'YouTube', 'Facebook'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-institutional-blue transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-white/50 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-lexend font-bold mb-8 text-institutional-gold uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Hub Stratégique</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Observatoire de Données</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portefeuille de Projets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Appels d'Offres</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Espace Citoyen</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-lexend font-bold mb-8 text-institutional-gold uppercase tracking-widest text-sm">Transparence</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Rapports Annuels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Audits Publics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Indicateurs de Performance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Budget de l'État</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Données Ouvertes</a></li>
            </ul>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h4 className="font-lexend font-bold mb-4">Newsletter Officielle</h4>
            <p className="text-slate-400 text-sm mb-6">Recevez les rapports de progression mensuels directement par email.</p>
            <div className="space-y-3">
              <input type="email" placeholder="votre@email.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-institutional-gold" />
              <button className="w-full bg-institutional-blue py-3 rounded-xl font-bold text-sm hover:bg-blue-900 transition-all">S'abonner</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-medium uppercase tracking-widest">
          <p>© PrioritésRDC 2025. Tous droits réservés.</p>
          <p className="hidden md:block">Powered by MboMa &amp; Co</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Accessibilité</a>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-institutional-blue/20 rounded-full blur-[100px]"></div>
    </footer>
  );
};

export default Footer;
