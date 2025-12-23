
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: '2020', gdp: 48, growth: 2.1 },
  { name: '2021', gdp: 55, growth: 6.2 },
  { name: '2022', gdp: 64, growth: 8.9 },
  { name: '2023', gdp: 72, growth: 7.5 },
  { name: '2024', gdp: 81, growth: 6.8 },
  { name: '2025*', gdp: 95, growth: 9.1 },
];

const DataViz: React.FC = () => {
  return (
    <section id="observatoire" className="py-24 bg-white dark:bg-institutional-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-institutional-gold font-bold tracking-widest uppercase text-sm">Observatoire 2030</span>
          <h2 className="text-4xl md:text-5xl font-lexend font-bold mt-2">Transparence & Performance</h2>
          <div className="w-24 h-1 bg-institutional-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Croissance PIB', value: '+6.8%', sub: 'Previsions 2024', color: 'text-institutional-emerald' },
            { label: 'Projets Terminés', value: '1,248', sub: 'Depuis 2019', color: 'text-institutional-blue' },
            { label: 'Investissements', value: '$12.4B', sub: 'IDE Captés', color: 'text-institutional-gold' },
            { label: 'Taux Scolarité', value: '84%', sub: 'Objectif: 95%', color: 'text-indigo-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className={`text-4xl font-extrabold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-slate-500 mt-2">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-50 dark:bg-slate-800/30 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 h-[400px]">
            <h3 className="text-xl font-bold mb-6 font-lexend">Progression du PIB (Milliards USD)</h3>
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorGdp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#003366" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#003366" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="gdp" stroke="#003366" strokeWidth={3} fillOpacity={1} fill="url(#colorGdp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/30 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 h-[400px]">
            <h3 className="text-xl font-bold mb-6 font-lexend">Allocation Budgétaire 2024 (%)</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={[
                { name: 'Éducation', val: 22 },
                { name: 'Santé', val: 18 },
                { name: 'Infrastr.', val: 35 },
                { name: 'Sécurité', val: 15 },
                { name: 'Autres', val: 10 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '12px', border: 'none' }} />
                <Bar dataKey="val" fill="#D4AF37" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataViz;
