
import React from 'react';
import { NEWS } from '../constants';

const Newsroom: React.FC = () => {
  return (
    <section id="actualités" className="py-24 bg-white dark:bg-institutional-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-lexend font-bold border-l-8 border-institutional-gold pl-6">Newsroom</h2>
          <div className="flex gap-4">
            <button className="p-2 border rounded-full hover:bg-slate-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 border rounded-full hover:bg-slate-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Featured Article */}
          <div className="lg:col-span-8 group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl h-[500px] mb-8">
              <img 
                src="https://picsum.photos/seed/main-news/1200/800" 
                alt="Main" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white max-w-2xl">
                <span className="px-3 py-1 bg-institutional-gold text-institutional-blue text-xs font-bold rounded-full mb-4 inline-block uppercase">À la Une</span>
                <h3 className="text-4xl font-lexend font-bold leading-tight">Clôture du Sommet pour le Climat : La RDC confirmée comme "Pays-Solution"</h3>
                <p className="mt-4 text-slate-300">Un investissement de 2 milliards d'euros annoncé pour la préservation du Bassin du Congo.</p>
              </div>
            </div>
          </div>

          {/* Sidebar News */}
          <div className="lg:col-span-4 space-y-8">
            {NEWS.map((item) => (
              <div key={item.id} className="flex gap-6 group cursor-pointer border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="w-32 h-24 flex-shrink-0 overflow-hidden rounded-xl">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-bold text-institutional-emerald uppercase tracking-widest">{item.category}</span>
                  <h4 className="font-lexend font-bold text-lg mt-1 group-hover:text-institutional-blue transition-colors line-clamp-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm mt-1">{item.date}</p>
                </div>
              </div>
            ))}
            <button className="w-full py-4 text-center border-2 border-slate-100 dark:border-slate-800 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all uppercase tracking-widest text-xs">
              Accéder à la Médiathèque
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsroom;
