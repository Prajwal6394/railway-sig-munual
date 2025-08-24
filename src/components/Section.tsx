import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  icon: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, icon }) => {
  return (
    <section className="py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            {icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-railway-gray-800 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-railway-gray-600 dark:text-railway-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};