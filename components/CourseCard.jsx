'use client';

import { motion } from 'framer-motion';
import { Clock, BarChart, Tag } from 'lucide-react';

export default function CourseCard({ course, onClick }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            onClick={onClick}
            className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group border-2 border-transparent hover:border-[#ff6b35] transition-all duration-300"
        >
            {/* Thumbnail */}
            <div className="relative h-48 bg-gradient-orange overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20" style={{ fontFamily: 'var(--font-heading)' }}>
                        {course.courseCode}
                    </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-[#ff6b35] font-bold text-sm">{course.level}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#ff6b35] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                            {course.title}
                        </h3>
                        <p className="text-gray-600 text-sm">by {course.instructor.name}</p>
                    </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Tag size={16} />
                        <span>{course.courseCode}</span>
                    </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                        <div className="text-2xl font-bold text-[#ff6b35]">
                            ₦{course.cost.toLocaleString()}
                        </div>
                    </div>
                    <button className="bg-[#ff6b35] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e55a2b] transition-colors">
                        View Details
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
