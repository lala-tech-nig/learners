'use client';

import { motion } from 'framer-motion';
import { MessageSquarePlus } from 'lucide-react';
import { generateRequestConceptLink } from '@/utils/whatsapp';

export default function RequestConcept() {
    return (
        <section className="section bg-white border-t border-gray-100">
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                        Can't Find What You Need?
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Don't see the specific concept or topic you're struggling with? No problem.
                        Tell us exactly what you need, and we'll find an expert to explain it to you.
                    </p>
                    <a
                        href={generateRequestConceptLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 transform hover:scale-105 transition-transform"
                    >
                        <MessageSquarePlus size={20} />
                        Request a Concept
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
