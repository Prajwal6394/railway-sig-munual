import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10 dark:opacity-5">
      {/* Moving train animation */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-train-move">
        <div className="flex items-center">
          <div className="w-16 h-8 bg-railway-orange rounded-l-lg"></div>
          <div className="w-12 h-6 bg-railway-gray-600 mx-1"></div>
          <div className="w-12 h-6 bg-railway-gray-600 mx-1"></div>
          <div className="w-12 h-6 bg-railway-gray-600 mx-1"></div>
        </div>
      </div>

      {/* Railway track lines */}
      <div className="absolute bottom-1/4 left-0 right-0">
        <div className="h-1 bg-railway-gray-400 mb-2"></div>
        <div className="h-1 bg-railway-gray-400"></div>
      </div>

      {/* Signal lights decoration */}
      <div className="absolute top-1/4 right-20">
        <div className="flex flex-col space-y-2">
          <div className="w-4 h-4 bg-railway-red rounded-full animate-signal-blink"></div>
          <div className="w-4 h-4 bg-railway-yellow rounded-full opacity-30"></div>
          <div className="w-4 h-4 bg-railway-green rounded-full opacity-30"></div>
        </div>
      </div>
    </div>
  );
};