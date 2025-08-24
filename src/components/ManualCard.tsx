import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Manual } from '../types';
import { getCategoryIcon, getCategoryColor } from '../data/manuals';

interface ManualCardProps {
  manual: Manual;
  index: number;
}

export const ManualCard: React.FC<ManualCardProps> = ({ manual, index }) => {
  const handleClick = () => {
    window.open(manual.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="bg-white dark:bg-railway-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-railway-gray-200 dark:border-railway-gray-700 animate-slide-up hover:-translate-y-1"
      onClick={handleClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{getCategoryIcon(manual.category)}</span>
            <div>
              <h3 className="text-lg font-semibold text-railway-gray-800 dark:text-white group-hover:text-railway-orange dark:group-hover:text-railway-orange transition-colors">
                {manual.title}
              </h3>
              <span className={`text-sm font-medium ${getCategoryColor(manual.category)} capitalize`}>
                {manual.category}
              </span>
            </div>
          </div>
          <ExternalLink className="h-5 w-5 text-railway-gray-400 group-hover:text-railway-orange transition-colors" />
        </div>
        
        <p className="text-railway-gray-600 dark:text-railway-gray-300 text-sm leading-relaxed mb-4">
          {manual.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-railway-gray-500 dark:text-railway-gray-400">
            <div className="w-2 h-2 bg-railway-green rounded-full animate-pulse"></div>
            <span>Official Document</span>
          </div>
          <div className="text-railway-orange font-medium text-sm group-hover:underline">
            View Manual →
          </div>
        </div>
      </div>
    </div>
  );
};