import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 md:h-32 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="flex items-center gap-0 group">
                            <img
                                src="/logo.png"
                                alt="GoPedidos Logo"
                                className="h-20 md:h-[7.5rem] w-auto transition-transform group-hover:scale-105"
                                style={{ filter: 'brightness(0) saturate(100%) invert(63%) sepia(61%) saturate(2334%) hue-rotate(338deg) brightness(101%) contrast(96%)' }}
                            />
                            <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                GoPedidos
                            </span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">{t.navbar.features}</a>
                        <a href="#demos" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium text-orange-500 dark:text-orange-400">{t.navbar.demos}</a>
                        <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">{t.navbar.services}</a>
                        <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">{t.navbar.about}</a>

                        <div className="flex items-center space-x-2 border-l border-gray-200 dark:border-gray-700 pl-4">
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center space-x-1 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium text-sm"
                                aria-label="Toggle Language"
                            >
                                <Globe size={18} />
                                <span>{language === 'es' ? 'ES' : 'EN'}</span>
                            </button>
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                aria-label="Toggle Dark Mode"
                            >
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                            </button>
                        </div>

                        <a href="#contact" className="px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors font-medium">
                            {t.navbar.start}
                        </a>
                    </div>

                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium text-sm"
                        >
                            <Globe size={18} />
                            <span>{language === 'es' ? 'ES' : 'EN'}</span>
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300" aria-label="Abrir menú">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#features" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">{t.navbar.features}</a>
                        <a href="#demos" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 font-medium text-orange-500 dark:text-orange-400">{t.navbar.demos}</a>
                        <a href="#services" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">{t.navbar.services}</a>
                        <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">{t.navbar.about}</a>
                        <a href="#contact" className="block px-3 py-2 text-orange-500 font-medium">{t.navbar.start}</a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
