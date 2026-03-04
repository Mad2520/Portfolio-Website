import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, RotateCw, Home, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';

interface BrowserFrameProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BrowserFrame({ children, currentPage, onNavigate }: BrowserFrameProps) {
  const [tabs, setTabs] = useState([
    { id: 'home', title: 'Accueil', url: 'portfolio.dev/home', active: true },
  ]);
  const [urlBar, setUrlBar] = useState('portfolio.dev/home');

  const pageData = {
    home: { title: 'Accueil - Mon Portfolio', url: 'portfolio.dev/home' },
    projects: { title: 'Mes Projets', url: 'portfolio.dev/projets' },
    cv: { title: 'Mon CV', url: 'portfolio.dev/cv' },
    veille: { title: 'Veille Technologique', url: 'portfolio.dev/veille' },
    synthesis: { title: 'Tableau de Synthèse', url: 'portfolio.dev/synthese' },
  };

  useEffect(() => {
    const data = pageData[currentPage as keyof typeof pageData];
    setUrlBar(data.url);
    
    const existingTab = tabs.find(tab => tab.id === currentPage);
    if (!existingTab) {
      setTabs([...tabs.map(t => ({ ...t, active: false })), { 
        id: currentPage, 
        title: data.title, 
        url: data.url, 
        active: true 
      }]);
    } else {
      setTabs(tabs.map(t => ({ ...t, active: t.id === currentPage })));
    }
  }, [currentPage]);

  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = tabs.filter(t => t.id !== tabId);
    if (newTabs.length === 0) {
      setTabs([{ id: 'home', title: 'Accueil - Mon Portfolio', url: 'portfolio.dev/home', active: true }]);
      onNavigate('home');
    } else if (tabs.find(t => t.id === tabId)?.active) {
      const lastTab = newTabs[newTabs.length - 1];
      onNavigate(lastTab.id);
      setTabs(newTabs.map(t => ({ ...t, active: t.id === lastTab.id })));
    } else {
      setTabs(newTabs);
    }
  };

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-7xl h-screen bg-slate-900 rounded-lg shadow-2xl overflow-visible flex flex-col"
    >
      {/* Window Controls - macOS Style */}
      <div className="bg-slate-900 px-6 py-2 flex items-center border-b border-slate-800">
        <div className="flex-1"></div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#28ca42] hover:bg-[#34d64e] cursor-pointer transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffc73a] cursor-pointer transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff6b63] cursor-pointer transition-colors"></div>
        </div>
      </div>

      {/* Tabs Bar - Firefox Style */}
      <div className="bg-[#2b2a33] flex items-end">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`px-4 py-2.5 flex items-center gap-2 cursor-pointer min-w-[200px] max-w-[350px] relative ${
              tab.active 
                ? 'bg-[#42414d] text-white' 
                : 'bg-[#2b2a33] text-gray-400 hover:bg-[#38373f]'
            } transition-colors rounded-t-lg mx-0.5`}
            onClick={() => onNavigate(tab.id)}
          >
            <div className="flex-1 text-sm">{tab.title}</div>
            {tabs.length > 1 && (
              <X 
                className="w-4 h-4 text-gray-400 hover:text-white flex-shrink-0 transition-colors" 
                onClick={(e) => closeTab(tab.id, e)}
              />
            )}
          </motion.div>
        ))}
        <div className="flex-1 bg-[#2b2a33]"></div>
      </div>

      {/* Navigation Bar - Firefox Dark */}
      <div className="bg-[#42414d] px-4 py-2.5 flex items-center gap-3 border-b border-[#2b2a33]">
        <div className="flex items-center gap-1">
          <button className="p-2 rounded hover:bg-[#52515e] transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-300" />
          </button>
          <button className="p-2 rounded hover:bg-[#52515e] transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>
          <button className="p-2 rounded hover:bg-[#52515e] transition-colors">
            <RotateCw className="w-5 h-5 text-gray-300" />
          </button>
          <button 
            className="p-2 rounded hover:bg-[#52515e] transition-colors"
            onClick={() => onNavigate('home')}
          >
            <Home className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        <SearchBar currentUrl={urlBar} onNavigate={onNavigate} />

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center cursor-pointer hover:ring-2 ring-purple-400 transition-all overflow-hidden">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 overflow-auto bg-slate-900 pt-4">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}