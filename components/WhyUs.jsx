'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Clock, Trophy, Video, Shield, ArrowRight } from 'lucide-react';

const benefits = [
    {
        icon: Users,
        title: 'Master Difficult Concepts',
        description: 'Our instructors excel at breaking down complex logic and abstract ideas into simple, understandable pieces.',
    },
    {
        icon: Trophy,
        title: 'Background-Leveraged Learning',
        description: 'We use your existing expertise and background as a leverage to explain new, difficult concepts effectively.',
    },
    {
        icon: Target,
        title: '1-on-1 Personalized Attention',
        description: 'No generic videos. Get direct access to an expert who focuses entirely on your specific learning needs.',
    },
    {
        icon: Clock,
        title: 'Accelerated Completion',
        description: 'Live interactive sessions with real-time feedback help you grasp logic faster and complete your learning journey.',
    },
    {
        icon: Video,
        title: 'Live Virtual Classroom',
        description: 'Learn directly via Zoom or Google Meet. Real-time interaction ensures you never get stuck on a topic.',
    },
    {
        icon: Shield,
        title: 'Expert Simplifiers',
        description: 'Instructors aren\'t just experts; they are vetted professionals who know how to teach and simplify anything.',
    },
];

export default function WhyUs() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="why-us" className="section bg-gray-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wider text-gray-500 mb-6 shadow-sm">
                        Experience the Difference
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                        Simplifying <span className="text-[#ff6b35]">Difficult Ideas</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Forget traditional LMS platforms. We focus on deep understanding. Whether it's a specific logic, a single topic, or a full career path, we make it easy.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                            >
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={24} className="text-[#ff6b35]" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#ff6b35] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
