'use client';

import { MessageCircle, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { generateContactLink } from '@/utils/whatsapp';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Courses', href: '#courses' },
        { label: 'Why Us', href: '#why-us' },
        { label: 'Become Instructor', href: '#instructor' },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
    ];

    return (
        <footer className="bg-[#0a0a0a] text-white pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                            <span className="gradient-text">Learners</span>Hub
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Transforming education through personalized 1-on-1 learning experiences with expert instructors.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#ff6b35] transition-colors"
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Categories</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>Web Development</li>
                            <li>Design</li>
                            <li>Data Science</li>
                            <li>Marketing</li>
                            <li>Mobile Development</li>
                            <li>Cybersecurity</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Contact Us</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={generateContactLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-400 hover:text-[#ff6b35] transition-colors"
                                >
                                    <MessageCircle size={20} />
                                    <span>+234 812 144 4306</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={20} />
                                <span>hello@learnershub.ng</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <MapPin size={20} />
                                <span>Lagos, Nigeria</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} LearnersHub. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-[#ff6b35] transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#ff6b35] transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
