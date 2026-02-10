'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, BarChart, Tag, CheckCircle, User } from 'lucide-react';
import { useEffect } from 'react';
import { generateEnrollmentLink } from '@/utils/whatsapp';

export default function CourseModal({ course, isOpen, onClose }) {
    // Lock body scroll when modal is open
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

    if (!course) return null;

    const handleEnroll = () => {
        const whatsappLink = generateEnrollmentLink(course);
        window.open(whatsappLink, '_blank');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-3xl max-w-4xl w-full my-8 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Header with Thumbnail */}
                            <div className="h-64 bg-gradient-orange rounded-t-3xl relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white text-8xl font-bold opacity-20" style={{ fontFamily: 'var(--font-heading)' }}>
                                        {course.courseCode}
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                                        <span className="text-[#ff6b35] font-bold text-sm">{course.level}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                        {course.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                {/* Instructor Info */}
                                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                                    <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center">
                                        <User size={32} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">{course.instructor.name}</div>
                                        <div className="text-gray-600 text-sm">{course.instructor.bio}</div>
                                    </div>
                                </div>

                                {/* Meta Info Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-gray-200">
                                    <div>
                                        <div className="text-gray-500 text-sm mb-1">Duration</div>
                                        <div className="font-bold flex items-center gap-1">
                                            <Clock size={18} className="text-[#ff6b35]" />
                                            {course.duration}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-sm mb-1">Level</div>
                                        <div className="font-bold flex items-center gap-1">
                                            <BarChart size={18} className="text-[#ff6b35]" />
                                            {course.level}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-sm mb-1">Course Code</div>
                                        <div className="font-bold flex items-center gap-1">
                                            <Tag size={18} className="text-[#ff6b35]" />
                                            {course.courseCode}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-sm mb-1">Category</div>
                                        <div className="font-bold">{course.category}</div>
                                    </div>
                                </div>

                                {/* Course Outline */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                                        Course Outline
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {course.outline.map((item, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <CheckCircle size={20} className="text-[#ff6b35] flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                                        What You'll Gain
                                    </h3>
                                    <div className="space-y-2">
                                        {course.benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Prerequisites */}
                                <div className="mb-8 bg-gray-50 p-4 rounded-xl">
                                    <h4 className="font-bold mb-2">Prerequisites</h4>
                                    <p className="text-gray-700">{course.prerequisites}</p>
                                </div>

                                {/* Enroll Section */}
                                <div className="bg-gradient-orange rounded-2xl p-6 text-white">
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                        <div>
                                            <div className="text-sm opacity-90 mb-1">Investment in Your Future</div>
                                            <div className="text-4xl font-bold">₦{course.cost.toLocaleString()}</div>
                                        </div>
                                        <button
                                            onClick={handleEnroll}
                                            className="bg-white text-[#ff6b35] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg w-full md:w-auto"
                                        >
                                            Enroll via WhatsApp
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
