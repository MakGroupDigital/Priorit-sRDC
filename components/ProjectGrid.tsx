
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectGrid: React.FC = () => {
  return (
    <section id="projets" className="py-24 bg-institutional-blue dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-institutional-gold font-bold tracking-widest uppercase text-sm">Portfolio National</span>
            <h2 className="text-4xl md:text-5xl font-lexend font-bold mt-2">Transformer les Ambitions en Réalités</h2>
            <p className="text-slate-400 mt-6 text-lg">
              Explorez les projets structurants qui redéfinissent le paysage économique et social de la RDC. Chaque carte représente une promesse tenue pour les générations futures.
            </p>
          </div>
          <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-all flex items-center gap-2 group">
            Tous les projets
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-institutional-blue text-xs font-bold rounded-full border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
                <h3 className="text-2xl font-lexend font-bold mb-6 line-clamp-2">{project.title}</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                    <span>Avancement</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-institutional-gold transition-all duration-1000 ease-out"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
