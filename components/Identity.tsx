import React from 'react';
import { useTranslation } from './TranslationContext';

const Identity: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="identidad" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mt-6 space-y-6">
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
