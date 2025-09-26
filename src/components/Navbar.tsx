'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
    path: string;
    label: string;
}

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems: NavItem[] = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/appointment', label: 'Make an appointment' },
        { path: '/services', label: 'Services' },
        { path: '/training', label: 'Training' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
            }`}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">
                <div className="flex items-center justify-between py-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center">
                            <span className="serif-font text-xl font-light text-black">SU</span>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm font-light tracking-wide hover:text-gray-600 transition-colors ${pathname === item.path ? 'text-black border-b border-black pb-1' : 'text-gray-700'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button className="text-black">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;