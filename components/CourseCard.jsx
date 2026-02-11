'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowRight, Tag } from 'lucide-react';

export default function CourseCard({ course, onClick }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            onClick={onClick}
            className="card-clean group cursor-pointer h-full flex flex-col"
        >
            {/* Thumbnail - Clean & Minimal */}
            {/* Thumbnail */}
            <div className="relative h-48 bg-gray-100 overflow-hidden">
                {course.image ? (
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center p-6 bg-gray-100">
                        <div className="text-center">
                            <div className="text-gray-300 text-6xl font-bold opacity-30 select-none" style={{ fontFamily: 'var(--font-heading)' }}>
                                {course.courseCode.substring(0, 3)}
                            </div>
                        </div>
                    </div>
                )}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 z-10">
                    <span className="text-[#ff6b35] font-bold text-xs uppercase tracking-wider">{course.level}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4 flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-orange-50 text-[#ff6b35] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                            {course.category || 'Concept'}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#ff6b35] transition-colors leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                        {course.title}
                    </h3>
                    <p className="text-gray-500 text-sm">Instructor: <span className="font-semibold text-gray-700">{course.instructor.name}</span></p>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-6 py-4 border-t border-b border-gray-50">
                    <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-[#ff6b35]" />
                        <span>{course.duration}</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center gap-1.5">
                        <Tag size={14} className="text-[#ff6b35]" />
                        <span>{course.courseCode}</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                    <div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Per Session</div>
                        <div className="text-lg font-bold text-gray-900 group-hover:text-[#ff6b35] transition-colors">
                            ₦{course.cost.toLocaleString()}
                        </div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#ff6b35] group-hover:text-white transition-all duration-300">
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
