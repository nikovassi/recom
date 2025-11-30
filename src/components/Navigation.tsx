import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'services', label: 'services' },
    { id: 'projects', label: 'projects' },
    { id: 'contacts', label: 'contacts' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1E1E1E] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-white tracking-wider"
            >
              RECOM GROUP
            </button>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#F57C00] transition-colors duration-200 uppercase text-sm font-medium tracking-wide"
              >
                {t(item.label)}
              </button>
            ))}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-600">
              <Globe size={18} className="text-[#F57C00]" />
              <button
                onClick={() => setLanguage('EN')}
                className={`px-2 py-1 font-semibold text-sm transition-colors ${
                  language === 'EN'
                    ? 'text-[#F57C00]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <span className="text-gray-600">/</span>
              <button
                onClick={() => setLanguage('BG')}
                className={`px-2 py-1 font-semibold text-sm transition-colors ${
                  language === 'BG'
                    ? 'text-[#F57C00]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                BG
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLanguage('EN')}
                className={`px-2 py-1 font-semibold text-xs transition-colors ${
                  language === 'EN'
                    ? 'text-[#F57C00]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <span className="text-gray-600">/</span>
              <button
                onClick={() => setLanguage('BG')}
                className={`px-2 py-1 font-semibold text-xs transition-colors ${
                  language === 'BG'
                    ? 'text-[#F57C00]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                BG
              </button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-t border-gray-700">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-white hover:bg-[#F57C00] transition-colors duration-200 uppercase text-sm font-medium tracking-wide rounded"
              >
                {t(item.label)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
