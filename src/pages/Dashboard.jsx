import React from 'react';

const Dashboard = () => (
    <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-sm font-medium text-slate-500 mb-1">Total Problems</p>
                <h3 className="text-3xl font-bold text-primary">124</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-sm font-medium text-slate-500 mb-1">Assessments</p>
                <h3 className="text-3xl font-bold text-primary">12</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-sm font-medium text-slate-500 mb-1">Next Interview</p>
                <h3 className="text-3xl font-bold text-primary">Tomorrow</h3>
            </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-8">
            <h4 className="text-lg font-bold mb-4">Preparation Roadmap</h4>
            <div className="space-y-4">
                {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 italic text-slate-400">
                        Feature component placeholder {i}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const Practice = () => <h2 className="text-2xl font-bold">Practice Module</h2>;
export const Assessments = () => <h2 className="text-2xl font-bold">Assessments</h2>;
export const Resources = () => <h2 className="text-2xl font-bold">Resource Center</h2>;
export const Profile = () => <h2 className="text-2xl font-bold">User Profile</h2>;

export default Dashboard;
