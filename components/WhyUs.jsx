'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Clock, Trophy, Video, Shield } from 'lucide-react';

const benefits = [
    {
        icon: Users,
        title: 'Personalized Learning',
        description: 'Instructors adapt lessons to your unique background, learning style, and career goals.',
    },
    {
        icon: Trophy,
        title: '100% Completion Rate',
        description: 'Say goodbye to abandoned courses. Live sessions keep you accountable and motivated.',
    },
    {
        icon: Target,
        title: 'Real-Time Clarification',
        description: 'Confused? Ask questions instantly. No waiting, no frustration, just clarity.',
    },
    {
        icon: Clock,
        title: 'Flexible Scheduling',
        description: 'Learn at your own pace with sessions scheduled around your availability.',
    },
    {
        icon: Video,
        title: 'Live Interactive Sessions',
        description: 'Engage with instructors via Google Meet or Zoom. Real teaching, real results.',
    },
    {
        icon: Shield,
        title: 'Vetted Expert Instructors',
        description: 'Learn from verified professionals with years of real-world industry experience.',
    },
];

export default function WhyUs() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="why-us" className="section bg-white">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                        Why <span className="gradient-text">1-on-1 Learning</span> Works Better
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Traditional online courses have a 3-15% completion rate. Our personalized approach ensures you actually finish what you start.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover-lift group cursor-pointer"
                            >
                                <div className="w-14 h-14 bg-gradient-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={28} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff6b35] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
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
