import { motion } from 'motion/react';
import { Code, Briefcase, FileText, Newspaper, BarChart3, Award, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import { HybridAvatar } from './HybridAvatar';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const sections = [
    { 
      id: 'projects', 
      title: 'Mes Projets', 
      icon: Code, 
      color: 'from-blue-500 to-cyan-500',
      description: '10+ réalisations professionnelles'
    },
    { 
      id: 'cv', 
      title: 'Mon CV', 
      icon: FileText, 
      color: 'from-purple-500 to-pink-500',
      description: 'Parcours et compétences'
    },
    { 
      id: 'certifications', 
      title: 'Certifications', 
      icon: Award, 
      color: 'from-sky-500 to-blue-500',
      description: 'Formations et certificats obtenus'
    },
    { 
      id: 'veille', 
      title: 'Veille Technologique', 
      icon: Newspaper, 
      color: 'from-orange-500 to-red-500',
      description: 'Sources et synthèses'
    },
    { 
      id: 'synthesis', 
      title: 'Tableau de Synthèse', 
      icon: BarChart3, 
      color: 'from-green-500 to-emerald-500',
      description: 'Synthèse générale'
    },
  ];

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    if (term.includes('projet')) {
      onNavigate('projects');
    } else if (term.includes('cv')) {
      onNavigate('cv');
    } else if (term.includes('certif') || term.includes('formation')) {
      onNavigate('certifications');
    } else if (term.includes('veille')) {
      onNavigate('veille');
    } else if (term.includes('synth') || term.includes('tableau')) {
      onNavigate('synthesis');
    } else {
      // Perhaps show a message or do nothing
      alert('Terme de recherche non reconnu. Essayez "projets", "cv", "certifications", "veille", ou "synthèse".');
    }
  };

  return (
    <div className="min-h-full bg-[#1c1b22]">
      {/* Hero Section */}
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <HybridAvatar />
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold"
          >
            Portfolio BTS SIO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.35em] text-white font-semibold mb-8 sm:mb-10 md:mb-12"
          >
            AUDRAIN MADDIE
          </motion.p>
          {/* Search Bar Centrale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12"
          >
            <div className="relative">
                <div className="flex items-center gap-3 bg-[#2b2a33] rounded-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-[#3a3944] hover:border-[#4a4958] transition-all shadow-xl">
                <Search className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder={searchFocused ? "Bienvenue dans mon espace professionnel" : "Rechercher dans le portfolio..."}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  value={searchTerm}
                  className="flex-1 bg-transparent outline-none text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 placeholder:text-gray-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-2 sm:gap-3 md:gap-4 justify-center flex-wrap mb-16 sm:mb-20 md:mb-24"
          >
            <span className="px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2 text-xs sm:text-sm md:text-base bg-[#2b2a33] text-gray-300 rounded-full shadow-md border border-[#3a3944]">Développement Web</span>
            <span className="px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2 text-xs sm:text-sm md:text-base bg-[#2b2a33] text-gray-300 rounded-full shadow-md border border-[#3a3944]">Solutions Logicielles</span>
            <span className="px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2 text-xs sm:text-sm md:text-base bg-[#2b2a33] text-gray-300 rounded-full shadow-md border border-[#3a3944]">Innovation</span>
          </motion.div>
        </motion.div>

        {/* Navigation Cards */}
        <style>{`.home-sections-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
          @media (min-width: 45rem) { .home-sections-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); } }`}</style>
        <div className="w-full mx-auto mt-16 sm:mt-20 md:mt-24 px-2">
          <div className="home-sections-grid">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => onNavigate(section.id)}
                className="bg-[#2b2a33] rounded-2xl shadow-xl p-4 cursor-pointer overflow-hidden relative group border border-[#3a3944] hover:border-[#4a4958] transition-colors flex flex-col items-stretch w-full h-full"
               >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="w-full aspect-square flex flex-col">
                  <div className="flex-1 flex flex-col items-center justify-center p-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                    </motion.div>

                    <h3 className="text-lg md:text-xl lg:text-2xl mb-2 text-gray-100 leading-tight font-semibold text-center">{section.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 text-center">{section.description}</p>
                  </div>

                  <div className="px-6 pb-4">
                    <div className="flex items-center justify-center text-purple-400 group-hover:text-purple-300 text-sm md:text-base">
                      <span className="mr-2">Découvrir</span>
                      <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-gray-100 font-semibold">À propos de ce portfolio</h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
            Ce portfolio retrace mon parcours de professionnalisation à travers mes réalisations professionnelles. 
            Pour chaque projet, vous trouverez les compétences mobilisées et les éléments de preuve correspondants. 
            Explorez mes travaux, consultez mon CV et découvrez ma veille technologique.
          </p>
        </motion.div>
      </div>
    </div>
  );
}