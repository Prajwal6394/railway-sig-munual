import React from 'react';
import { Train, Shield, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-railway-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Train className="h-6 w-6 text-railway-orange" />
              <span className="text-xl font-bold">Railway Signalling Hub</span>
            </div>
            <p className="text-railway-gray-300 text-sm leading-relaxed">
              Your comprehensive resource for Indian Railway signalling manuals, safety protocols, and accident reports.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Shield className="h-5 w-5 text-railway-orange" />
              <span>Safety First</span>
            </h3>
            <p className="text-railway-gray-300 text-sm">
              All resources are official documents from Indian Railways. Always refer to the latest versions for operational use.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Official Resources</h3>
            <div className="space-y-2">
              <a
                href="https://indianrailways.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-railway-gray-300 hover:text-railway-orange transition-colors text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Indian Railways</span>
              </a>
              <a
                href="https://rsc.indianrailways.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-railway-gray-300 hover:text-railway-orange transition-colors text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Railway Safety Commissioner</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-railway-gray-700 mt-8 pt-8 text-center">
          <p className="text-railway-gray-400 text-sm">
            © 2025 Indian Railway Signalling Resource Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};