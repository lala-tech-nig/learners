'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, ArrowLeft } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { courses as allCoursesData } from '@/utils/coursesData';
import CourseCard from '@/components/CourseCard';
import CourseModal from '@/components/CourseModal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ITEMS_PER_PAGE = 6;

export default function CoursesPage() {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [displayedCourses, setDisplayedCourses] = useState([]);
    const [page, setPage] = useState(1);

    // Filters
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 50000]);
    const [isFilterOpen, setIsFilterOpen] = useState(false); // Mobile filter toggle

    const [ref, inView] = useInView({
        threshold: 0,
    });

    // Unique Categories
    const categories = useMemo(() => ['All', ...new Set(allCoursesData.map(c => c.category))], []);

    // Filter Logic
    const filteredCourses = useMemo(() => {
        return allCoursesData.filter(course => {
            const matchesSearch =
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
            const matchesPrice = course.cost >= priceRange[0] && course.cost <= priceRange[1];

            return matchesSearch && matchesCategory && matchesPrice;
        });
    }, [searchQuery, selectedCategory, priceRange]);

    // Infinite Scroll Logic
    useEffect(() => {
        // Reset pagination when filters change
        setPage(1);
        setDisplayedCourses(filteredCourses.slice(0, ITEMS_PER_PAGE));
    }, [filteredCourses]);

    useEffect(() => {
        if (inView && displayedCourses.length < filteredCourses.length) {
            const nextPage = page + 1;
            const nextItems = filteredCourses.slice(0, nextPage * ITEMS_PER_PAGE);
            setDisplayedCourses(nextItems);
            setPage(nextPage);
        }
    }, [inView, filteredCourses, page, displayedCourses.length]);


    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header / Search Area */}
            <section className="bg-white pt-32 pb-12 border-b border-gray-100 sticky top-0 z-30 shadow-sm relative">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <a href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#ff6b35] mb-2 transition-colors">
                                <ArrowLeft size={16} /> Back to Home
                            </a>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                Browse <span className="text-[#ff6b35]">Courses</span>
                            </h1>
                        </div>

                        <div className="flex gap-3 w-full md:w-auto">
                            <div className="relative w-full md:w-80">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search by title, code, instructor..."
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b35] focus:ring-2 focus:ring-orange-100 focus:outline-none transition-all"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="md:hidden p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50"
                            >
                                <Filter size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Filter Drawer */}
                <AnimatePresence>
                    {isFilterOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden overflow-hidden border-t border-gray-100 mt-4 bg-gray-50"
                        >
                            <div className="container py-6 space-y-6">
                                {/* Categories Mobile */}
                                <div>
                                    <h4 className="font-bold mb-3 text-sm uppercase text-gray-500">Category</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => setSelectedCategory(cat)}
                                                className={`px-3 py-1.5 rounded-full text-xs font-medium border ${selectedCategory === cat ? 'bg-[#ff6b35] text-white border-[#ff6b35]' : 'bg-white border-gray-200 text-gray-600'}`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {/* Price Mobile */}
                                <div>
                                    <h4 className="font-bold mb-3 text-sm uppercase text-gray-500">Max Price: ₦{priceRange[1].toLocaleString()}</h4>
                                    <input
                                        type="range"
                                        min="0"
                                        max="50000"
                                        step="1000"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                        className="w-full accent-[#ff6b35]"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            <div className="container py-12 flex flex-col md:flex-row gap-8 items-start">
                {/* Sidebar Filters (Desktop) */}
                <aside className="hidden md:block w-64 shrink-0 sticky top-48">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-8">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Filter size={18} /> Filters
                            </h3>

                            {/* Category Filter */}
                            <div className="mb-6">
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Category</h4>
                                <div className="space-y-2">
                                    {categories.map(cat => (
                                        <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="category"
                                                checked={selectedCategory === cat}
                                                onChange={() => setSelectedCategory(cat)}
                                                className="accent-[#ff6b35] w-4 h-4"
                                            />
                                            <span className={`text-sm group-hover:text-[#ff6b35] transition-colors ${selectedCategory === cat ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                                                {cat}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                    Max Price: <span className="text-[#ff6b35]">₦{priceRange[1].toLocaleString()}</span>
                                </h4>
                                <input
                                    type="range"
                                    min="0"
                                    max="50000"
                                    step="1000"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                    className="w-full accent-[#ff6b35] cursor-pointer"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>₦0</span>
                                    <span>₦50k+</span>
                                </div>
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="pt-6 border-t border-gray-100 text-xs text-center text-gray-500">
                            Showing {filteredCourses.length} results
                        </div>
                    </div>
                </aside>

                {/* Course Grid */}
                <div className="flex-1 w-full">
                    {displayedCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            <AnimatePresence>
                                {displayedCourses.map((course) => (
                                    <motion.div
                                        layout
                                        key={course.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <CourseCard
                                            course={course}
                                            onClick={() => setSelectedCourse(course)}
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No courses found</h3>
                            <p className="text-gray-500">Try adjusting your search or filters.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('All');
                                    setPriceRange([0, 50000]);
                                }}
                                className="mt-6 text-[#ff6b35] font-medium hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}

                    {/* Infinite Scroll Trigger */}
                    {displayedCourses.length < filteredCourses.length && (
                        <div ref={ref} className="py-12 flex justify-center">
                            <div className="w-8 h-8 border-4 border-orange-100 border-t-[#ff6b35] rounded-full animate-spin"></div>
                        </div>
                    )}
                </div>
            </div>

            {selectedCourse && (
                <CourseModal
                    course={selectedCourse}
                    isOpen={!!selectedCourse}
                    onClose={() => setSelectedCourse(null)}
                />
            )}

            <Footer />
        </main>
    );
}
