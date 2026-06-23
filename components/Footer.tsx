import React from 'react';
import { useTranslation } from './TranslationContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            
            {/* Column 1: Links */}
            <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-6">{t('nav.research')}</h5>
                <ul className="space-y-3 text-sm">
                    <li><a href="https://www.uninorte.edu.co" className="hover:text-emerald-400 transition-colors">Universidad del Norte</a></li>
                    <li><a href="https://www.evolbio.mpg.de" className="hover:text-emerald-400 transition-colors">Max Planck Institute for Evolutionary Biology</a></li>
                    <li><a href="https://www.pewtrusts.org" className="hover:text-emerald-400 transition-colors">Pew Charitable Trusts</a></li>
                </ul>
            </div>

            {/* Column 2: Contact */}
            <div>
                 <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-6">{t('footer.contact')}</h5>
                 <address className="not-italic text-sm space-y-2">
                    <p className="text-white font-medium">Oficina 630J, Edificio Mario Santodomingo</p>
                    <p>Universidad del Norte</p>
                    <p>{t('footer.location')}</p>
                    <p>Barranquilla, Colombia</p>
                    <div className="mt-4 pt-4 border-t border-slate-800">
                        <p><a href="mailto:rneme@uninorte.edu.co" className="hover:text-white transition-colors">rneme@uninorte.edu.co</a></p>
                        <p>+57 5 3509509 Ext. 3894</p>
                    </div>
                 </address>
            </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {t('hero.title')} {t('hero.title.suffix')}. {t('footer.rights')}</p>
          <div className="mt-2 md:mt-0 space-x-4">
              <span>Rafik Neme Lab</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;