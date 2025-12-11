import React from 'react';

const Identity: React.FC = () => {
  return (
    <section id="identidad" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-10 flex justify-center">
            <div className="w-px h-16 bg-emerald-600"></div>
        </div>
        <p className="text-2xl md:text-4xl font-light leading-tight text-slate-900 serif">
          Investigando la diversidad biológica del Caribe Colombiano a través de un enfoque interdisciplinario que combina <span className="italic text-emerald-800">genómica, ecología y evolución</span>.
        </p>
        <div className="mt-10 space-y-6">
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Nuestro laboratorio integra la biología molecular y la entomología con el análisis de datos para entender la historia y el futuro de nuestros ecosistemas.
            </p>
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Buscamos dar soluciones a problemas concretos desde abordajes académicos investigativos, teniendo en cuenta el bienestar social y económico de la región.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Identity;