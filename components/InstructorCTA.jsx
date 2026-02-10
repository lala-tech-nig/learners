'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Users, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { generateInstructorLink } from '@/utils/whatsapp';

export default function InstructorCTA() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const benefits = [
        {
            icon: Users,
            title: 'Teach What You Love',
            description: 'Share your expertise with eager students',
        },
        {
            icon: TrendingUp,
            title: 'Earn Competitively',
            description: 'Get paid for your knowledge and time',
        },
        {
            icon: Heart,
            title: 'Make an Impact',
            description: 'Transform lives through personalized education',
        },
    ];

    const handleBecomeInstructor = () => {
        const whatsappLink = generateInstructorLink();
        window.open(whatsappLink, '_blank');
    };

    return (
        <section id="instructor" className="section relative overflow-hidden bg-gray-900 text-white">
            {/* Abstract Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff6b35] rounded-full blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl opacity-5 -translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/10">
                            <Sparkles size={16} className="text-[#ff6b35]" />
                            <span className="text-[#ff6b35] text-xs font-bold tracking-widest uppercase">Join Our Expert Community</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                            Become an Instructor <br /> & Inspire the Next Generation
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Are you an expert in your field? Share your knowledge through personalized 1-on-1 sessions and help students achieve their goals.
                        </p>

                        <button
                            onClick={handleBecomeInstructor}
                            className="bg-[#ff6b35] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e55a2b] transition-all hover:scale-105 shadow-lg shadow-orange-900/20 inline-flex items-center gap-3"
                        >
                            Start Teaching Today
                            <ArrowRight size={20} />
                        </button>
                    </motion.div>

                    {/* Cards Content */}
                    <div className="flex-1 w-full">
                        <div className="grid gap-4">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <motion.div
                                        key={benefit.title}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="w-12 h-12 bg-[#ff6b35]/20 rounded-full flex items-center justify-center shrink-0">
                                            <Icon size={24} className="text-[#ff6b35]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">{benefit.title}</h3>
                                            <p className="text-gray-400 text-sm">{benefit.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
