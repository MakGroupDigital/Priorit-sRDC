import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-institutional-dark text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-20 h-20 bg-institutional-blue rounded flex items-center justify-center overflow-hidden">
                <img src="/logo-priorites-rdc.png" alt="Priorités RDC" className="w-full h-full object-cover" />
              </div>
              <span className="font-lexend font-bold text-xl tracking-tight">
                PRIORITÉS <span className="text-institutional-gold">RDC</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Structure inquisitoire créée par des jeunes pour mobiliser la jeunesse congolaise. 
              Nous œuvrons pour l'émergence d'une jeunesse responsable, autonome et pleinement engagée 
              dans le développement de la RDC.
            </p>
            <div className="flex gap-4">
              {[
                {
                  name: 'Facebook',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )
                },
                {
                  name: 'Twitter',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  )
                },
                {
                  name: 'LinkedIn',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )
                },
                {
                  name: 'YouTube',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )
                }
              ].map(social => (
                <a key={social.name} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-institutional-blue transition-colors hover:scale-110">
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-lexend font-bold mb-8 text-institutional-gold uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#apropos" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-lexend font-bold mb-8 text-institutional-gold uppercase tracking-widest text-sm">Nos Valeurs</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-institutional-gold">✓</span> Autonomie
              </li>
              <li className="flex items-center gap-2">
                <span className="text-institutional-gold">✓</span> Engagement
              </li>
              <li className="flex items-center gap-2">
                <span className="text-institutional-gold">✓</span> Développement
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-slate-400 text-sm mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@prioritesrdc.org
              </p>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Kinshasa, RDC
              </p>
            </div>
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
