
import React, { useState } from 'react';
import { PROVINCES } from '../constants';
import { ProvinceData } from '../types';

const StrategicHub: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState<ProvinceData>(PROVINCES[0]);

  return (
    <section id="stratégie" className="py-24 bg-institutional-light dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-institutional-emerald font-bold tracking-widest uppercase text-sm">Le Hub Stratégique</span>
            <h2 className="text-4xl md:text-5xl font-lexend font-bold mt-2">Maillage Territorial</h2>
          </div>
          <p className="max-w-md text-slate-500 dark:text-slate-400">
            Une approche décentralisée pour un impact local direct. Sélectionnez une province pour voir les investissements prioritaires.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mock Interactive Map Representation */}
          <div className="lg:col-span-7 relative bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-xl border border-slate-200 dark:border-slate-700 h-[500px] flex items-center justify-center">
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-institutional-emerald animate-pulse"></div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Temps Réel</span>
            </div>
            
            {/* Simple SVG Stylized DRC Map with clickable regions */}
            <svg viewBox="0 0 500 500" className="w-full h-full text-slate-200 dark:text-slate-700 fill-current">
              <path 
                d="M200,100 L300,100 L350,200 L300,350 L150,400 L50,300 Z" 
                className={`cursor-pointer transition-all hover:text-institutional-blue ${selectedProvince.id === 'KIN' ? 'text-institutional-blue fill-institutional-blue/20 stroke-institutional-blue stroke-2' : ''}`}
                onClick={() => setSelectedProvince(PROVINCES[0])}
              />
              <path 
                d="M300,100 L450,150 L480,300 L350,450 L300,350 Z" 
                className={`cursor-pointer transition-all hover:text-institutional-emerald ${selectedProvince.id === 'NK' ? 'text-institutional-emerald fill-institutional-emerald/20 stroke-institutional-emerald stroke-2' : ''}`}
                onClick={() => setSelectedProvince(PROVINCES[3])}
              />
              <path 
                d="M50,300 L150,400 L100,480 L20,450 Z" 
                className={`cursor-pointer transition-all hover:text-institutional-gold ${selectedProvince.id === 'KC' ? 'text-institutional-gold fill-institutional-gold/20 stroke-institutional-gold stroke-2' : ''}`}
                onClick={() => setSelectedProvince(PROVINCES[1])}
              />
              <path 
                d="M150,400 L300,350 L350,450 L250,480 L150,480 Z" 
                className={`cursor-pointer transition-all hover:text-red-500 ${selectedProvince.id === 'LUA' ? 'text-red-500 fill-red-500/20 stroke-red-500 stroke-2' : ''}`}
                onClick={() => setSelectedProvince(PROVINCES[2])}
              />
            </svg>
            
            <div className="absolute bottom-12 right-12 text-right">
              <p className="text-slate-400 text-xs font-medium">Cliquer sur une zone</p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border-l-4 border-institutional-blue">
              <h3 className="text-3xl font-lexend font-bold mb-4">{selectedProvince.name}</h3>
              <div className="space-y-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-slate-400 font-bold">Priorité Sectorielle</label>
                  <p className="text-xl text-institutional-blue dark:text-blue-400 font-medium">{selectedProvince.priority}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-slate-400 font-bold">Investissements</label>
                    <p className="text-2xl font-bold text-slate-800 dark:text-white">{selectedProvince.investment}</p>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-slate-400 font-bold">Projets Actifs</label>
                    <p className="text-2xl font-bold text-slate-800 dark:text-white">{selectedProvince.projects}</p>
                  </div>
                </div>
                <button className="w-full py-4 bg-slate-900 dark:bg-institutional-blue text-white rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  Voir tous les projets de la province
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicHub;
