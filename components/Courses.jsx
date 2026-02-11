'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import CourseCard from './CourseCard';
import CourseModal from './CourseModal';
import { courses } from '@/utils/coursesData';

export default function Courses() {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter by search query (Title only for homepage)
    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 6); // Limit to 6 for homepage

    return (
        <section id="courses" className="section bg-white">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <div className="inline-block px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff6b35] mb-4 shadow-sm">
                            Available Sessions
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            Explore <span className="text-[#ff6b35]">Concepts</span>
                        </h2>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-96">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search size={20} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search concepts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-[#ff6b35] focus:ring-2 focus:ring-orange-100 focus:outline-none transition-all shadow-sm"
                        />
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <AnimatePresence>
                        {filteredCourses.map((course) => (
                            <motion.div
                                layout
                                key={course.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CourseCard
                                    course={course}
                                    onClick={() => setSelectedCourse(course)}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        No courses found matching "{searchQuery}".
                    </div>
                )}

                {/* Browse All Button */}
                <div className="text-center">
                    <a
                        href="/courses"
                        className="btn-secondary inline-flex items-center gap-2 group"
                    >
                        Browse All Courses
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            {selectedCourse && (
                <CourseModal
                    course={selectedCourse}
                    isOpen={!!selectedCourse}
                    onClose={() => setSelectedCourse(null)}
                />
            )}
        </section>
    );
}
