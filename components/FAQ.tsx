import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Qu\'est-ce que Priorités RDC ?',
      answer: 'Priorités RDC est une structure créée par des jeunes pour mobiliser la jeunesse congolaise et la rendre actrice de son propre développement et de celui du Congo.'
    },
    {
      question: 'Comment puis-je rejoindre Priorités RDC ?',
      answer: 'Vous pouvez nous rejoindre en nous contactant via notre formulaire de contact, nos réseaux sociaux ou en participant à nos événements et formations.'
    },
    {
      question: 'Quels types de formations proposez-vous ?',
      answer: 'Nous organisons des conférences, forums et ateliers sur l\'épanouissement personnel, le leadership, l\'entrepreneuriat et les valeurs citoyennes.'
    },
    {
      question: 'Les services sont-ils gratuits ?',
      answer: 'La plupart de nos activités de sensibilisation et certaines formations sont gratuites. Pour des programmes spécifiques, contactez-nous pour plus d\'informations.'
    },
    {
      question: 'Comment accéder aux bourses d\'études ?',
      answer: 'Consultez régulièrement notre section E-Services où nous publions les opportunités de bourses disponibles avec les modalités de candidature.'
    },
    {
      question: 'Organisez-vous des événements dans toutes les provinces ?',
      answer: 'Nous travaillons à étendre notre présence dans toutes les provinces du Congo. Suivez nos actualités pour connaître les événements près de chez vous.'
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-institutional-gold font-bold tracking-widest uppercase text-sm">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-lexend font-bold text-institutional-blue dark:text-white mt-4 mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-institutional-dark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                <span className="font-bold text-institutional-blue dark:text-white pr-4">
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-institutional-gold flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white dark:bg-institutional-dark p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <button className="px-8 py-3 bg-institutional-blue text-white rounded-full font-bold hover:bg-blue-900 transition-all">
            Contactez-nous
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
