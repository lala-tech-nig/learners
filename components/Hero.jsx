'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center gradient-orange-to-black relative overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
                />
            </div>

            {/* Content */}
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
                    >
                        <Sparkles size={18} className="text-[#ff6b35]" />
                        <span className="text-white text-sm font-medium">Nigeria's #1 Personalized Learning Platform</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Master Skills with{' '}
                        <span className="relative">
                            <span className="bg-white text-[#ff6b35] px-4">1-on-1</span>
                        </span>{' '}
                        Expert Instruction
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
                    >
                        No pre-recorded videos. No abandoned courses. Just personalized, live learning tailored to your background and goals.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="#courses"
                            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
                        >
                            Browse Courses
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="#instructor"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#ff6b35] transition-all duration-300 text-lg"
                        >
                            Become an Instructor
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
                    >
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                100%
                            </div>
                            <div className="text-white/70 text-sm md:text-base">Completion Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                500+
                            </div>
                            <div className="text-white/70 text-sm md:text-base">Happy Students</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                50+
                            </div>
                            <div className="text-white/70 text-sm md:text-base">Expert Instructors</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-white rounded-full mt-2" />
                </div>
            </motion.div>
        </section>
    );
}
