import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = ({ title }) => {
    return (
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-8">
            <div>
                <h1 className="text-xl font-bold text-slate-800">{title}</h1>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search states..."
                        className="pl-10 pr-4 py-2 text-sm bg-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 w-64"
                    />
                </div>

                <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full relative">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-xs ring-2 ring-white shadow-sm">
                    AD
                </div>
            </div>
        </header>
    );
};

export default Header;
