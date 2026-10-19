import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  CalendarDays,
  Pill,
  Receipt,
  Layers,
  Database,
  Activity,
  HeartPulse
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Patients', path: '/patients', icon: Users },
  { name: 'Doctors & Depts', path: '/doctors', icon: Stethoscope },
  { name: 'Appointments', path: '/appointments', icon: CalendarDays },
  { name: 'Pharmacy & Presc.', path: '/pharmacy', icon: Pill },
  { name: 'Billing & Invoicing', path: '/billing', icon: Receipt },
  { name: 'Transactions', path: '/transactions', icon: Layers, highlight: true },
  { name: 'SQL Query Engine', path: '/sql', icon: Database },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200/90 flex flex-col shrink-0 min-h-screen shadow-sm">
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-100 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-600/10 font-bold">
          <HeartPulse className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-extrabold text-slate-900 text-lg tracking-tight flex items-center gap-1.5">
            HMS <span className="text-[11px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 font-semibold">v2.0</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium">Hospital Management</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3.5 py-6 space-y-1 overflow-y-auto">
        <div className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase px-3 mb-2">
          Clinical Modules
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${isActive
                  ? 'bg-teal-50/90 text-teal-800 border border-teal-200/80 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                } ${item.highlight ? 'relative' : ''}`
              }
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{item.name}</span>
              {item.highlight && (
                <span className="ml-auto flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>



    </aside>
  );
}
