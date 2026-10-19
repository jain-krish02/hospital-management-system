import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Clock, CheckCircle2 } from 'lucide-react';

const titleMap = {
  '/': 'Clinical Dashboard & Reporting',
  '/patients': 'Patient Management & Records (FR1)',
  '/doctors': 'Doctor & Department Directory (FR2)',
  '/appointments': 'Appointment Scheduling & Conflict Guard (FR3/FR4)',
  '/pharmacy': 'Medicine Inventory & E-Prescriptions (FR5/FR6)',
  '/billing': 'Automated Invoicing & Revenue (FR7)',
  '/transactions': 'Real-World Transactions',
  '/sql': 'Interactive SQL Query Runner & 17 Predefined Queries (FR8)',
};

export default function Header() {
  const location = useLocation();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pageTitle = titleMap[location.pathname] || 'Hospital Management System';

  return (
    <header className="h-16 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-8 flex items-center justify-between sticky top-0 z-20 shadow-xs">
      <div>
        <h2 className="text-base md:text-lg font-bold text-slate-800 flex items-center gap-2">
          {pageTitle}
        </h2>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6 text-sm text-slate-600">
        <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200/90 px-3 py-1.5 rounded-xl">
          <Clock className="w-3.5 h-3.5 text-teal-600" />
          <span className="font-mono text-xs text-slate-700 font-medium">{time}</span>
        </div>

        <div className="flex items-center space-x-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-xl text-xs font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>DB Integrity Active</span>
        </div>


      </div>
    </header>
  );
}
