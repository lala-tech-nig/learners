'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-white pt-20">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full mb-8 border border-orange-100"
                        >
                            <Sparkles size={16} className="text-[#ff6b35]" />
                            <span className="text-[#ff6b35] text-xs font-bold tracking-widest uppercase">Expert 1-on-1 Mentorship</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-hero text-gray-900 mb-6 tracking-tight"
                        >
                            Master Any <span className="text-[#ff6b35]">Concept</span> <br className="hidden lg:block" />
                            With Personalized Logic
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Stop struggling with complex topics. We connect you with expert instructors who explain everything using your own background and logic.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#courses"
                                className="btn-primary inline-flex items-center justify-center gap-2"
                            >
                                Explore Concepts
                                <ArrowRight size={20} />
                            </a>
                            <a
                                href="#instructor"
                                className="btn-secondary inline-flex items-center justify-center"
                            >
                                Become an Instructor
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500 font-medium"
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-[#ff6b35]" />
                                <span>Vettted Experts</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-[#ff6b35]" />
                                <span>1-on-1 Sessions</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual (Abstract Representation) */}
                    <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl border border-gray-100"
                        >
                            {/* Decorative Grid */}
                            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-px bg-gray-200 opacity-50">
                                <div className="bg-white"></div>
                                <div className="bg-white"></div>
                                <div className="bg-white"></div>
                                <div className="bg-white"></div>
                            </div>

                            {/* Floating Cards (Mockup) */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-64 h-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center justify-center gap-4 relative z-10"
                                >
                                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl">🧩</div>
                                    <div className="text-center">
                                        <div className="font-bold text-gray-900 text-lg mb-1">Concept Mastery</div>
                                        <div className="text-gray-400 text-sm">Simplified for You</div>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-2">
                                        <div className="w-3/4 h-full bg-[#ff6b35] rounded-full"></div>
                                    </div>
                                </motion.div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute top-1/2 right-12 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 z-20"
                                >
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">A+</div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">Top Rated</div>
                                        <div className="text-xs text-gray-500">Instructors</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
