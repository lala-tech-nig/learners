'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Users, TrendingUp, Heart } from 'lucide-react';
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
        <section id="instructor" className="section gradient-orange-to-black relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                        <Sparkles size={18} className="text-white" />
                        <span className="text-white text-sm font-medium">Join Our Expert Community</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        Become an Instructor
                    </h2>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
                        Are you an expert in your field? Share your knowledge through personalized 1-on-1 sessions and help students achieve their goals.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className="glass text-center p-6 rounded-2xl"
                            >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon size={32} className="text-[#ff6b35]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                    {benefit.title}
                                </h3>
                                <p className="text-white/80">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                >
                    <button
                        onClick={handleBecomeInstructor}
                        className="bg-white text-[#ff6b35] px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-3"
                    >
                        <Sparkles size={24} />
                        Start Teaching Today
                    </button>
                    <p className="text-white/70 mt-4 text-sm">Click to connect with us via WhatsApp</p>
                </motion.div>
            </div>
        </section>
    );
}
