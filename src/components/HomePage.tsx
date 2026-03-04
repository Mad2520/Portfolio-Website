import { motion } from 'motion/react';
import { Code, Briefcase, FileText, Newspaper, BarChart3, ArrowRight, Search } from 'lucide-react';
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
    } else if (term.includes('veille')) {
      onNavigate('veille');
    } else if (term.includes('synth') || term.includes('tableau')) {
      onNavigate('synthesis');
    } else {
      // Perhaps show a message or do nothing
      alert('Terme de recherche non reconnu. Essayez "projets", "cv", "veille", ou "synthèse".');
    }
  };

  return (
    <div className="min-h-full bg-[#1c1b22]">
      {/* Hero Section */}
      <div className="container mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <HybridAvatar />
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Portfolio BTS SIO
          </motion.h1>
          
          {/* Search Bar Centrale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
                <div className="flex items-center gap-3 bg-[#2b2a33] rounded-full px-6 py-4 border-2 border-[#3a3944] hover:border-[#4a4958] transition-all shadow-xl">
                <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder={searchFocused ? "Bienvenue dans mon espace professionnel" : "Rechercher dans le portfolio..."}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  value={searchTerm}
                  className="flex-1 bg-transparent outline-none text-gray-200 placeholder:text-gray-500 text-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <span className="px-6 py-2 bg-[#2b2a33] text-gray-300 rounded-full shadow-md border border-[#3a3944]">Développement Web</span>
            <span className="px-6 py-2 bg-[#2b2a33] text-gray-300 rounded-full shadow-md border border-[#3a3944]">Solutions Logicielles</span>
            <span className="px-6 py-2 bg-[#2b2a33] text-gray-300 rounded-full shadow-md border border-[#3a3944]">Innovation</span>
          </motion.div>
        </motion.div>

        {/* Navigation Cards */}
        <div className="flex gap-4 w-full overflow-x-auto">
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
                className="flex-1 min-w-[calc(25%-12px)] bg-[#2b2a33] rounded-2xl shadow-xl p-8 cursor-pointer overflow-hidden relative group border border-[#3a3944] hover:border-[#4a4958] transition-colors flex flex-col h-80"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="min-h-[5rem]">
                  <h3 className="text-2xl mb-3 text-gray-100">{section.title}</h3>
                  <p className="text-gray-400">{section.description}</p>
                </div>

                <div className="flex items-center justify-start text-purple-400 group-hover:text-purple-300 mt-auto">
                  <span className="mr-2">Découvrir</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl mb-6 text-gray-100">À propos de ce portfolio</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Ce portfolio retrace mon parcours de professionnalisation à travers mes réalisations professionnelles. 
            Pour chaque projet, vous trouverez les compétences mobilisées et les éléments de preuve correspondants. 
            Explorez mes travaux, consultez mon CV et découvrez ma veille technologique.
          </p>
        </motion.div>
      </div>
    </div>
  );
}