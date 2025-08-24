import React from 'react';
import { ExternalLink, AlertTriangle } from 'lucide-react';
import { AccidentReport } from '../types';

interface AccidentCardProps {
  report: AccidentReport;
  index: number;
}

export const AccidentCard: React.FC<AccidentCardProps> = ({ report, index }) => {
  const handleClick = () => {
    if (report.url !== '#') {
      window.open(report.url, '_blank', 'noopener,noreferrer');
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-railway-red bg-railway-red/10 border-railway-red/20';
      case 'medium': return 'text-railway-yellow bg-railway-yellow/10 border-railway-yellow/20';
      case 'low': return 'text-railway-green bg-railway-green/10 border-railway-green/20';
      default: return 'text-railway-gray-600 bg-railway-gray-100 border-railway-gray-200';
    }
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
            <AlertTriangle className="h-6 w-6 text-railway-red" />
            <div>
              <h3 className="text-lg font-semibold text-railway-gray-800 dark:text-white group-hover:text-railway-orange dark:group-hover:text-railway-orange transition-colors">
                {report.title}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm text-railway-gray-600 dark:text-railway-gray-300">
                  {report.location}
                </span>
                <span className="text-railway-gray-400">•</span>
                <span className="text-sm text-railway-gray-600 dark:text-railway-gray-300">
                  {new Date(report.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          {report.url !== '#' && (
            <ExternalLink className="h-5 w-5 text-railway-gray-400 group-hover:text-railway-orange transition-colors" />
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(report.severity)} capitalize`}>
            {report.severity} Severity
          </span>
          {report.url !== '#' ? (
            <div className="text-railway-orange font-medium text-sm group-hover:underline">
              View Report →
            </div>
          ) : (
            <div className="text-railway-gray-400 font-medium text-sm">
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
};