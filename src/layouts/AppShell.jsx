import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
    LayoutDashboard,
    BookOpen,
    FileCheck,
    Library,
    UserCircle,
    Menu,
    Bell
} from 'lucide-react';

const AppShell = () => {
    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { name: 'Practice', path: '/practice', icon: BookOpen },
        { name: 'Assessments', path: '/assessments', icon: FileCheck },
        { name: 'Resources', path: '/resources', icon: Library },
        { name: 'Profile', path: '/profile', icon: UserCircle },
    ];

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white flex flex-col hidden md:flex">
                <div className="p-6 border-b border-slate-800">
                    <h1 className="text-xl font-bold tracking-tight text-white flex items-center">
                        <span className="w-8 h-8 bg-primary rounded-lg mr-2 flex items-center justify-center text-sm">P</span>
                        Placement Prep
                    </h1>
                </div>
                <nav className="flex-1 p-4 space-y-2 mt-4">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center px-4 py-3 rounded-xl transition-all ${isActive
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                }`
                            }
                        >
                            <item.icon size={20} className="mr-3" />
                            <span className="font-medium">{item.name}</span>
                        </NavLink>
                    ))}
                </nav>
                <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
                    v1.0.4 Ready
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10">
                    <div className="flex items-center md:hidden">
                        <button className="p-2 text-slate-600">
                            <Menu size={24} />
                        </button>
                        <h1 className="ml-3 font-bold text-slate-900">Prep</h1>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-slate-400 text-sm">Welcome back, Developer</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                            <Bell size={20} />
                        </button>
                        <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold border-2 border-slate-100 cursor-pointer overflow-hidden">
                            <img src="https://ui-avatars.com/api/?name=User&background=6366f1&color=fff" alt="User" />
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-6 md:p-10">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppShell;
