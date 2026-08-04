import React from 'react';
import { useTranslation } from './TranslationContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="bg-tropico-950 text-slate-300 py-16 border-t border-tropico-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            
            {/* Column 1: Links */}
            <div>
                <h5 className="text-xs font-mono font-bold text-tropico-300 uppercase tracking-widest mb-6">{t('nav.research')}</h5>
                <ul className="space-y-3 text-sm font-sans">
                    <li><a href="https://www.uninorte.edu.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Universidad del Norte</a></li>
                    <li><a href="https://www.evolbio.mpg.de" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Max Planck Institute for Evolutionary Biology</a></li>
                    <li><a href="https://www.pewtrusts.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pew Charitable Trusts</a></li>
                </ul>
            </div>

            {/* Column 2: Contact */}
            <div>
                 <h5 className="text-xs font-mono font-bold text-tropico-300 uppercase tracking-widest mb-6">{t('footer.contact')}</h5>
                 <address className="not-italic text-sm space-y-2 font-sans text-slate-300">
                    <p className="text-white font-bold">Oficina 630J, Edificio Mario Santodomingo</p>
                    <p>Universidad del Norte</p>
                    <p>{t('footer.location')}</p>
                    <p>Barranquilla, Colombia</p>
                    <div className="mt-4 pt-4 border-t border-tropico-800/80">
                        <p><a href="mailto:rneme@uninorte.edu.co" className="text-tropico-300 hover:text-white transition-colors font-mono">rneme@uninorte.edu.co</a></p>
                        <p className="font-mono text-slate-400 text-xs">+57 5 3509509 Ext. 3894</p>
                    </div>
                 </address>
            </div>
        </div>
        
        <div className="pt-8 border-t border-tropico-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-sans">
          <p>&copy; {new Date().getFullYear()} {t('nav.brand')}. {t('footer.rights')}</p>
          <div className="mt-2 md:mt-0 space-x-4 font-mono text-tropico-400">
              <span>Rafik Neme Lab &bull; Barranquilla</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;