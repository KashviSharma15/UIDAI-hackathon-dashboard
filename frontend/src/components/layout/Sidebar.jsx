import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Fingerprint, Activity, Map, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { ROUTES } from '../../utils/constants';

const Sidebar = () => {
    const navItems = [
        { name: 'Enrolment', path: ROUTES.ENROLMENT, icon: Users },
        { name: 'Biometric', path: ROUTES.BIOMETRIC, icon: Fingerprint },
        { name: 'Demographic', path: ROUTES.DEMOGRAPHIC, icon: LayoutDashboard },
        { name: 'Lifecycle', path: ROUTES.LIFECYCLE, icon: Activity },
        { name: 'Geo Map', path: ROUTES.MAP, icon: Map },
    ];

    return (
        <aside className="w-64 bg-slate-900 text-slate-100 flex flex-col h-screen fixed left-0 top-0 border-r border-slate-800">
            <div className="p-6 border-b border-slate-800 flex items-center gap-3">
                <img src="/vite.svg" alt="Logo" className="w-8 h-8" />
                <span className="font-bold text-xl tracking-tight">Aadhaar<br /><span className="text-brand-500 text-sm">Analytics</span></span>
            </div>

            <div className="flex-1 py-6 space-y-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            clsx(
                                "flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all relative",
                                isActive
                                    ? "text-brand-400 bg-slate-800/50 border-r-4 border-brand-500"
                                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
                            )
                        }
                    >
                        <item.icon size={20} />
                        {item.name}
                    </NavLink>
                ))}
            </div>

            <div className="p-6 border-t border-slate-800">
                <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-xs text-slate-400 mb-2">Dataset Version</p>
                    <p className="text-sm font-mono text-slate-200">2024.Q1</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
