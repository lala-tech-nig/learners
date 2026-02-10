'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Clock, Calendar, CheckCircle, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { useEffect } from 'react';
import { generateEnrollmentLink } from '@/utils/whatsapp';

export default function CourseModal({ course, isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleEnroll = () => {
        const link = generateEnrollmentLink(course);
        window.open(link, '_blank');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-50 shadow-2xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Image Area */}
                        <div className="h-48 sm:h-64 bg-gray-50 relative shrink-0">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors text-gray-700"
                            >
                                <X size={20} />
                            </button>

                            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                <div className="text-gray-200 text-9xl font-bold opacity-50 select-none" style={{ fontFamily: 'var(--font-heading)' }}>
                                    {course.courseCode.substring(0, 3)}
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="inline-block bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[#ff6b35] font-bold text-xs uppercase tracking-wider mb-3 shadow-sm">
                                    {course.level}
                                </span>
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                    {course.title}
                                </h2>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 space-y-8">
                            {/* Instructor */}
                            <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
                                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                    <User size={24} className="text-[#ff6b35]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">{course.instructor.name}</h4>
                                    <p className="text-gray-500 text-sm leading-snug">{course.instructor.bio}</p>
                                </div>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-gray-50 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 text-gray-500 mb-1 text-xs font-bold uppercase">
                                        <Clock size={14} /> Duration
                                    </div>
                                    <div className="font-bold text-gray-900">{course.duration}</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 text-gray-500 mb-1 text-xs font-bold uppercase">
                                        <Calendar size={14} /> Sessions
                                    </div>
                                    <div className="font-bold text-gray-900">{course.sessions} Classes</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 text-gray-500 mb-1 text-xs font-bold uppercase">
                                        <Tag size={14} /> Code
                                    </div>
                                    <div className="font-bold text-gray-900">{course.courseCode}</div>
                                </div>
                            </div>

                            {/* What You'll Learn & Benefits */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>What You'll Learn</h3>
                                    <ul className="space-y-3">
                                        {course.outline.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-gray-600">
                                                <CheckCircle size={20} className="text-[#ff6b35] shrink-0 translate-y-0.5" />
                                                <span className="text-sm leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Why This Course?</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                                        This isn't just a generic course. {course.instructor.name} will tailor every explanation to your background, ensuring you grasp the logic behind {course.title} quickly and effectively.
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Action Bar */}
                            <div className="sticky bottom-0 -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-6 md:p-8 bg-white border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                                <div>
                                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Per Session</div>
                                    <div className="text-3xl font-bold text-gray-900">₦{course.cost.toLocaleString()}</div>
                                </div>
                                <div className="flex gap-3 w-full md:w-auto">
                                    <button
                                        onClick={onClose}
                                        className="flex-1 md:flex-none btn-secondary !py-3 !px-6 flex items-center justify-center gap-2"
                                    >
                                        <ArrowLeft size={18} />
                                        Back
                                    </button>
                                    <button
                                        onClick={handleEnroll}
                                        className="flex-1 md:flex-none btn-primary !py-3 !px-8 flex items-center justify-center gap-2"
                                    >
                                        Start Masterclass
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
