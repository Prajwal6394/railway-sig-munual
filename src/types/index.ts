export interface Manual {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'signalling' | 'safety' | 'operations' | 'maintenance';
}

export interface AccidentReport {
  id: string;
  title: string;
  date: string;
  location: string;
  url: string;
  severity: 'high' | 'medium' | 'low';
}