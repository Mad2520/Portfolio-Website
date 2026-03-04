import { useState, useRef, useEffect } from 'react';
import { Lock, Search, Clock, FileText, Briefcase, Code, Home as HomeIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SearchBarProps {
  currentUrl: string;
  onNavigate: (page: string) => void;
}

interface SearchSuggestion {
  id: string;
  title: string;
  url: string;
  icon: React.ReactNode;
  type: 'page' | 'recent';
}

export function SearchBar({ currentUrl, onNavigate }: SearchBarProps) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [recentSearches, setRecentSearches] = useState<SearchSuggestion[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const suggestions: SearchSuggestion[] = [
    { 
      id: 'home', 
      title: 'Accueil - Mon Portfolio', 
      url: 'portfolio.dev/home',
      icon: <HomeIcon className="w-4 h-4" />,
      type: 'page'
    },
    { 
      id: 'projects', 
      title: 'Mes Projets - Réalisations Professionnelles', 
      url: 'portfolio.dev/projets',
      icon: <Briefcase className="w-4 h-4" />,
      type: 'page'
    },
    { 
      id: 'cv', 
      title: 'Mon CV - Curriculum Vitae', 
      url: 'portfolio.dev/cv',
      icon: <FileText className="w-4 h-4" />,
      type: 'page'
    },
    { 
      id: 'veille', 
      title: 'Veille Technologique - Articles & Analyses', 
      url: 'portfolio.dev/veille',
      icon: <Code className="w-4 h-4" />,
      type: 'page'
    },
  ];

  const filteredSuggestions = searchValue.trim()
    ? suggestions.filter(s => 
        s.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        s.url.toLowerCase().includes(searchValue.toLowerCase())
      )
    : suggestions;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearching(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    onNavigate(suggestion.id);
    setIsSearching(false);
    setSearchValue('');
    
    // Ajouter aux recherches récentes
    const newRecent = { ...suggestion, type: 'recent' as const };
    setRecentSearches(prev => {
      const filtered = prev.filter(s => s.id !== suggestion.id);
      return [newRecent, ...filtered].slice(0, 5);
    });
  };

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (!isSearching) setIsSearching(true);
  };

  return (
    <div ref={searchRef} className="flex-1 relative">
      <div 
        className="flex items-center gap-2 bg-[#2b2a33] rounded-md px-4 py-2 border border-[#3a3944] hover:border-[#4a4958] transition-colors cursor-text"
        onClick={handleSearchFocus}
      >
        <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
        <input 
          type="text" 
          value={isSearching ? searchValue : currentUrl}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          placeholder="Rechercher ou saisir une URL..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder:text-gray-500"
        />
        <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
      </div>

      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-[#2b2a33] rounded-lg shadow-2xl border border-[#3a3944] overflow-hidden z-50"
          >
            {/* Recherches récentes */}
            {recentSearches.length > 0 && !searchValue.trim() && (
              <div className="border-b border-[#3a3944]">
                <div className="px-4 py-2 text-xs text-gray-500 flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  Recherches récentes
                </div>
                {recentSearches.map((item) => (
                  <motion.div
                    key={`recent-${item.id}`}
                    whileHover={{ backgroundColor: '#38373f' }}
                    className="px-4 py-3 cursor-pointer flex items-center gap-3 transition-colors"
                    onClick={() => handleSuggestionClick(item)}
                  >
                    <div className="text-purple-400">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-200">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.url}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Suggestions */}
            <div>
              {!searchValue.trim() && recentSearches.length === 0 && (
                <div className="px-4 py-2 text-xs text-gray-500">
                  Suggestions
                </div>
              )}
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((suggestion) => (
                  <motion.div
                    key={suggestion.id}
                    whileHover={{ backgroundColor: '#38373f' }}
                    className="px-4 py-3 cursor-pointer flex items-center gap-3 transition-colors"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <div className="text-blue-400">
                      {suggestion.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-200">{suggestion.title}</div>
                      <div className="text-xs text-gray-500">{suggestion.url}</div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-sm text-gray-500">
                  Aucun résultat trouvé
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}