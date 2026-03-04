import { useState } from 'react';
import { BrowserFrame } from './components/BrowserFrame';
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { CVPage } from './components/CVPage';
import { VeillePage } from './components/VeillePage';
import { SynthesisPage } from './components/SynthesisPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage />;
      case 'cv':
        return <CVPage />;
      case 'veille':
        return <VeillePage />;
      case 'synthesis':
        return <SynthesisPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-2">
      <BrowserFrame currentPage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </BrowserFrame>
    </div>
  );
}
