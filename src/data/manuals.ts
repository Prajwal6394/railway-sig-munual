import { Manual } from '../types';

export const manuals: Manual[] = [
  {
    id: 'sem',
    title: 'Signal Engineering Manual (SEM)',
    description: 'Comprehensive guide for signal engineering practices and standards in Indian Railways',
    url: 'https://indianrailways.gov.in/railwayboard/uploads/directorate/signal/2020/Draft%20SEM_V1_0_2.pdf',
    category: 'signalling'
  },
  {
    id: 'gnsr',
    title: 'General & Subsidiary Rules (G&SR)',
    description: 'Fundamental operating rules and regulations for safe train operations',
    url: 'https://nr.indianrailways.gov.in/uploads/files/1650952420196-G%20and%20SR.pdf',
    category: 'operations'
  },
  {
    id: 'pway',
    title: 'Permanent Way Manual',
    description: 'Guidelines for track construction, maintenance, and safety standards',
    url: 'https://indianrailways.gov.in/railwayboard/uploads/directorate/prd/PR/IRPWM2020.pdf',
    category: 'maintenance'
  },
  {
    id: 'accident',
    title: 'Accident Manual',
    description: 'Procedures for accident prevention, investigation, and response protocols',
    url: 'https://scr.indianrailways.gov.in/cris/uploads/files/1348039393516-Accident%20Manual--final.pdf',
    category: 'safety'
  },
  {
    id: 'dimensions',
    title: 'Schedule of Dimensions (SOD)',
    description: 'Standard dimensions and clearances for railway infrastructure',
    url: 'https://iricen.gov.in/iricen/other_manual/SOD%20REVISED%202004%20CORRECTED%20UPTO%20CS-16.pdf',
    category: 'maintenance'
  },
  {
    id: 'telecom',
    title: 'Telecom Manual',
    description: 'Guidelines for telecommunication systems and equipment in railways',
    url: 'https://indianrailways.gov.in/railwayboard/uploads/codesmanual/telecom/TelecomManual/IRTeleManual2021.pdf',
    category: 'signalling'
  }
];

export const getCategoryIcon = (category: Manual['category']) => {
  switch (category) {
    case 'signalling': return '🚦';
    case 'safety': return '🛡️';
    case 'operations': return '⚙️';
    case 'maintenance': return '🔧';
    default: return '📋';
  }
};

export const getCategoryColor = (category: Manual['category']) => {
  switch (category) {
    case 'signalling': return 'text-railway-green dark:text-railway-green';
    case 'safety': return 'text-railway-red dark:text-railway-red';
    case 'operations': return 'text-railway-blue dark:text-railway-blue';
    case 'maintenance': return 'text-railway-yellow dark:text-railway-yellow';
    default: return 'text-railway-gray-600 dark:text-railway-gray-400';
  }
};