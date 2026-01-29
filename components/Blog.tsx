import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'L\'entrepreneuriat des jeunes au Congo : défis et opportunités',
      date: '20 Janvier 2025',
      category: 'Entrepreneuriat',
      excerpt: 'Découvrez comment les jeunes entrepreneurs transforment le paysage économique congolais...',
      image: 'https://picsum.photos/seed/blog1/600/400',
      author: 'Équipe Priorités RDC'
    },
    {
      id: 2,
      title: 'Formation en leadership : retour sur notre dernier atelier',
      date: '15 Janvier 2025',
      category: 'Formation',
      excerpt: 'Plus de 200 jeunes ont participé à notre atelier de leadership à Kinshasa...',
      image: 'https://picsum.photos/seed/blog2/600/400',
      author: 'Équipe Priorités RDC'
    },
    {
      id: 3,
      title: 'Les valeurs familiales : pilier de notre société',
      date: '10 Janvier 2025',
      category: 'Éducation',
      excerpt: 'L\'importance de la famille dans l\'éducation et le développement des jeunes...',
      image: 'https://picsum.photos/seed/blog3/600/400',
      author: 'Équipe Priorités RDC'
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-white dark:bg-institutional-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-institutional-gold font-bold tracking-widest uppercase text-sm">Notre Blog</span>
          <h2 className="text-4xl md:text-5xl font-lexend font-bold text-institutional-blue dark:text-white mt-4 mb-6">
            Actualités & Réflexions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Suivez nos dernières publications sur le développement de la jeunesse congolaise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-institutional-gold transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-institutional-gold text-institutional-blue text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{post.date}</p>
                <h3 className="text-xl font-lexend font-bold text-institutional-blue dark:text-white mb-3 group-hover:text-institutional-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{post.author}</span>
                  <button className="text-institutional-blue dark:text-institutional-gold font-bold text-sm hover:underline">
                    Lire plus →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-institutional-blue text-white rounded-full font-bold hover:bg-blue-900 transition-all">
            Voir tous les articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
