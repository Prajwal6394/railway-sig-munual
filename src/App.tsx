import React from 'react';
import { BookOpen, AlertCircle, FileText, Shield } from 'lucide-react';
import { Header } from './components/Header';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Section } from './components/Section';
import { ManualCard } from './components/ManualCard';
import { AccidentCard } from './components/AccidentCard';
import { Footer } from './components/Footer';
import { manuals } from './data/manuals';
import { accidentReports } from './data/accidents';

function App() {
  return (
    <div className="min-h-screen bg-railway-gray-50 dark:bg-railway-gray-900 transition-colors duration-300">
      <AnimatedBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-railway-orange/10 to-railway-blue/10 dark:from-railway-orange/5 dark:to-railway-blue/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-railway-gray-800 dark:text-white mb-6">
              Railway Safety & Signalling
              <span className="text-railway-orange"> Resources</span>
            </h1>
            <p className="text-xl text-railway-gray-600 dark:text-railway-gray-300 mb-8 leading-relaxed">
              Access comprehensive manuals, safety protocols, and official documentation for Indian Railway signalling systems
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-railway-gray-600 dark:text-railway-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-railway-green rounded-full animate-pulse"></div>
                <span>Official Documentation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-railway-orange rounded-full animate-pulse"></div>
                <span>Updated Manuals</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-railway-blue rounded-full animate-pulse"></div>
                <span>Safety Protocols</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 1: Railway Signalling Manuals */}
      <Section
        title="Railway Signalling Manuals"
        subtitle="Essential documentation covering signal engineering, operating rules, maintenance guidelines, and safety protocols"
        icon={<FileText className="h-12 w-12 text-railway-orange" />}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manuals.map((manual, index) => (
            <ManualCard key={manual.id} manual={manual} index={index} />
          ))}
        </div>
      </Section>

      {/* Part 2: Railway Accident Reports */}
      <Section
        title="Railway Accident Reports"
        subtitle="Official accident investigation reports and safety analysis documents for continuous learning and improvement"
        icon={<AlertCircle className="h-12 w-12 text-railway-red" />}
      >
        <div className="bg-railway-yellow/10 dark:bg-railway-yellow/5 rounded-xl p-6 mb-8 border border-railway-yellow/20">
          <div className="flex items-center space-x-3 mb-3">
            <Shield className="h-6 w-6 text-railway-yellow" />
            <span className="font-semibold text-railway-gray-800 dark:text-white">Notice</span>
          </div>
          <p className="text-railway-gray-700 dark:text-railway-gray-300 text-sm">
            Accident report links will be updated with official documentation from Railway Safety Commissioner and relevant authorities. 
            This section serves as a placeholder for future implementation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accidentReports.map((report, index) => (
            <AccidentCard key={report.id} report={report} index={index} />
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;