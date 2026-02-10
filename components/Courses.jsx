'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from './CourseCard';
import CourseModal from './CourseModal';

const courses = [
    {
        id: 1,
        title: 'React Hooks Logic',
        level: 'Intermediate',
        courseCode: 'RCT-101',
        category: 'Frontend',
        instructor: { name: 'David Adewale', bio: 'Senior Frontend Engineer with 8 years of React experience.' },
        duration: '1 Hour',
        sessions: 2,
        cost: 15000,
        outline: ['Understanding closure in hooks', 'Custom hooks design patterns', 'Performance optimization', 'Rules of hooks deep dive'],
    },
    {
        id: 2,
        title: 'Backend API Architecture',
        level: 'Advanced',
        courseCode: 'BND-202',
        category: 'Backend',
        instructor: { name: 'Sarah O.', bio: 'System Architect specializing in scalable Node.js applications.' },
        duration: '1.5 Hours',
        sessions: 3,
        cost: 25000,
        outline: ['REST vs GraphQL', 'Database design for scale', 'Authentication & Authorization', 'Microservices patterns'],
    },
    {
        id: 3,
        title: 'UI/UX Design Principles',
        level: 'Beginner',
        courseCode: 'DSN-101',
        category: 'Design',
        instructor: { name: 'Michael K.', bio: 'Product Designer who has led design teams at top startups.' },
        duration: '1 Hour',
        sessions: 2,
        cost: 12000,
        outline: ['Visual Hierarchy', 'Color Theory', 'Typography basics', 'Figma Pro tips'],
    },
    {
        id: 4,
        title: 'Advanced JS Closures',
        level: 'Advanced',
        courseCode: 'JS-303',
        category: 'Language',
        instructor: { name: 'Chisom E.', bio: 'JavaScript expert and technical writer.' },
        duration: '1 Hour',
        sessions: 1,
        cost: 10000,
        outline: ['Lexical Scope', 'Execution Context', 'Memory Management', 'Practical Closure Use Cases'],
    },
    {
        id: 5,
        title: 'Data Structures: Graphs',
        level: 'Hard',
        courseCode: 'CS-401',
        category: 'Computer Science',
        instructor: { name: 'Dr. Tunde', bio: 'CS Professor with a passion for simplifying algorithms.' },
        duration: '2 Hours',
        sessions: 4,
        cost: 30000,
        outline: ['Graph theory basics', 'BFS vs DFS', 'Shortest Path Algorithms', 'Real-world applications'],
    },
    {
        id: 6,
        title: 'Next.js App Router',
        level: 'Intermediate',
        courseCode: 'NXT-201',
        category: 'Fullstack',
        instructor: { name: 'Lala Tech', bio: 'Fullstack developer building modern web apps.' },
        duration: '1.5 Hours',
        sessions: 3,
        cost: 20000,
        outline: ['Server Components', 'Routing Patterns', 'Data Fetching', 'SEO Optimization'],
    }
];

export default function Courses() {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(courses.map(c => c.category))];

    const filteredCourses = activeCategory === 'All'
        ? courses
        : courses.filter(c => c.category === activeCategory);

    return (
        <section id="courses" className="section bg-white">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="inline-block px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff6b35] mb-6 shadow-sm">
                        Available Sessions
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                        Explore <span className="text-[#ff6b35]">Concepts</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                        Pick a concept or topic you want to master.
                    </p>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                                        ? 'bg-[#ff6b35] text-white border-[#ff6b35] shadow-lg shadow-orange-200'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#ff6b35] hover:text-[#ff6b35]'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="text-center py-20 text-gray-500">
                        No courses found in this category.
                    </div>
                )}
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
