import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from './TranslationContext';

interface NavigationProps {
  activeHash?: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeHash = '#inicio' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
  ];

  const navigateTo = (href: string) => {
    window.location.hash = href;
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || activeHash !== '#inicio' ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-100' : 'bg-white/80 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo('#inicio')}>
            <span className="text-base sm:text-lg font-sans font-bold tracking-tight text-emerald-950 hover:text-emerald-700 transition-colors">
              {t('nav.brand')}
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => navigateTo('#inicio')}
              className={`text-xs uppercase tracking-wider font-semibold transition-colors ${
                activeHash === '#inicio' || activeHash === ''
                  ? 'text-emerald-800 font-bold border-b-2 border-emerald-700 pb-0.5'
                  : 'text-slate-600 hover:text-emerald-900'
              }`}
            >
              {language === 'es' ? 'Inicio' : 'Home'}
            </button>

            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => navigateTo(link.href)}
                  className={`text-xs uppercase tracking-wider font-semibold transition-colors ${
                    isActive 
                      ? 'text-emerald-800 font-bold border-b-2 border-emerald-700 pb-0.5' 
                      : 'text-slate-600 hover:text-emerald-900'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}

            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-800/20 text-emerald-900 bg-emerald-50/50 hover:bg-emerald-100/50 transition-all ml-2"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-700" />
              <span className="text-xs font-bold uppercase tracking-wider">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-full"
            >
              <Globe className="w-5 h-5 text-emerald-600" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 focus:outline-none p-1">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full border-t border-slate-100">
          <div className="px-3 pt-2 pb-4 space-y-1">
            <button
              onClick={() => navigateTo('#inicio')}
              className={`block w-full text-left px-3 py-3 text-base font-medium border-b border-slate-50 ${
                activeHash === '#inicio' ? 'text-emerald-700 font-semibold bg-emerald-50/50' : 'text-slate-700'
              }`}
            >
              {language === 'es' ? 'Inicio' : 'Home'}
            </button>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => navigateTo(link.href)}
                className={`block w-full text-left px-3 py-3 text-base font-medium border-b border-slate-50 last:border-0 ${
                  activeHash === link.href ? 'text-emerald-700 font-semibold bg-emerald-50/50' : 'text-slate-700'
                }`}
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