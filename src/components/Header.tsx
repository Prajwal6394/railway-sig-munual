import React from 'react';
import { Sun, Moon, Train } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-railway-gray-900 shadow-lg border-b-4 border-railway-orange transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="relative">
              <Train className="h-8 w-8 text-railway-orange" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-railway-green rounded-full animate-signal-blink"></div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-railway-gray-800 dark:text-white">
                Indian Railway Signalling
              </h1>
              <p className="text-sm text-railway-gray-600 dark:text-railway-gray-300">
                Complete Resource Hub for Railway Safety & Signalling
              </p>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-railway-gray-100 dark:bg-railway-gray-800 hover:bg-railway-gray-200 dark:hover:bg-railway-gray-700 transition-all duration-300 group"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-6 w-6 text-railway-gray-600 dark:text-railway-gray-300 group-hover:scale-110 transition-transform" />
            ) : (
              <Sun className="h-6 w-6 text-railway-yellow group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};