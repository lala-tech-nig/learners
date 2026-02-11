'use client';

import { MessageCircle, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
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
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#ff6b35] rounded-lg flex items-center justify-center text-white font-bold">L</div>
                            <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>Learners</span>
                        </div>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            The ultimate destination for 1-on-1 mentorship. We connect you with experts who can simplify any concept using your background as leverage.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#ff6b35] hover:text-white transition-all duration-300"
                                    >
                                        <Icon size={16} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Explore</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-500 hover:text-[#ff6b35] transition-colors text-sm font-medium"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm font-medium text-gray-500">
                            <li><a href="#" className="hover:text-[#ff6b35] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#ff6b35] transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-[#ff6b35] transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <a
                                    href={generateContactLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-500 hover:text-[#ff6b35] transition-colors"
                                >
                                    <MessageCircle size={18} className="text-[#ff6b35]" />
                                    <span className="font-medium">+234 812 144 4306</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <Mail size={18} className="text-[#ff6b35]" />
                                <span className="font-medium">learners1on1@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <MapPin size={18} className="text-[#ff6b35]" />
                                <span className="font-medium">Lagos, Nigeria</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>
                        © {currentYear} Learners. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1">
                        <span>Made with</span>
                        <Heart size={12} className="text-red-500 fill-red-500" />
                        <span>for students everywhere</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
