import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Video, BarChart3, ChevronRight } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <header className="px-6 py-24 md:py-32 bg-slate-50 border-b">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                        Ace Your <span className="text-primary italic">Placement</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Practice, assess, and prepare for your dream job with our comprehensive placement readiness platform.
                    </p>
                    <Link
                        to="/dashboard"
                        className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                        Get Started
                        <ChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </header>

            {/* Features Grid */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Everything you need to succeed</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Feature 1 */}
                        <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Code size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Practice Problems</h3>
                            <p className="text-slate-600 leading-relaxed">Master coding challenges with our curated list of 500+ placement-specific problems.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Video size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Mock Interviews</h3>
                            <p className="text-slate-600 leading-relaxed">Simulate real-world technical and HR interviews with AI-driven mock sessions.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <BarChart3 size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Track Progress</h3>
                            <p className="text-slate-600 leading-relaxed">Visualize your preparation journey with detailed analytics and skill gap analysis.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-slate-200 bg-slate-50 text-center">
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Placement Readiness Platform. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default LandingPage;
