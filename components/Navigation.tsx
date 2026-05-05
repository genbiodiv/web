import React, { useState, useEffect } from 'react';
import { Menu, X, Dna, Globe } from 'lucide-react';
import { useTranslation } from './TranslationContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.identity'), href: '#identidad' },
    { name: t('nav.research'), href: '#investigacion' },
    { name: t('nav.capabilities'), href: '#capacidades' },
    { name: t('nav.publications'), href: '#publicaciones' },
    { name: t('nav.team'), href: '#equipo' },
    { name: t('nav.contact'), href: '#footer' },
  ];

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-white/0 py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo('#hero')}>
            <Dna className={`h-8 w-8 ${scrolled ? 'text-emerald-800' : 'text-emerald-900'} mr-2`} />
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-800' : 'text-slate-900'}`}>
              GyB <span className="hidden sm:inline">| Uninorte</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium hover:text-emerald-700 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-800'}`}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${
                scrolled 
                  ? 'border-slate-200 text-slate-600 hover:bg-slate-50' 
                  : 'border-slate-300 text-slate-700 hover:bg-white/50'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-full"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-50 border-b border-slate-50 last:border-0"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;