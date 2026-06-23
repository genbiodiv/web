import React from 'react';
import { useTranslation } from './TranslationContext';

const Identity: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="identidad" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-10 flex justify-center">
            <div className="w-px h-16 bg-emerald-600"></div>
        </div>
        <p className="text-2xl md:text-4xl font-light leading-tight text-slate-900 font-sans">
          {t('identity.main')} <span className="italic text-emerald-800">{t('identity.emphasis')}</span>.
        </p>
        <div className="mt-10 space-y-6">
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              {t('identity.p1')}
            </p>
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              {t('identity.p2')}
            </p>
        </div>
      </div>
    </section>
  );
};

export default Identity;
