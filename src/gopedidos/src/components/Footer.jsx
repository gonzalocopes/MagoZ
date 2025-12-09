import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-50 dark:bg-gray-950 pt-16 pb-8 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="flex items-center gap-1 mb-4 group">
                            <img
                                src="/logo.png"
                                alt="GoPedidos Logo"
                                className="h-20 md:h-[7.5rem] w-auto transition-transform group-hover:scale-105"
                                style={{ filter: 'brightness(0) saturate(100%) invert(63%) sepia(61%) saturate(2334%) hue-rotate(338deg) brightness(101%) contrast(96%)' }}
                            />
                            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                GoPedidos
                            </span>
                        </a>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
                            {t.features.subheading}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">{t.footer.product}</h3>
                        <ul className="space-y-3">
                            <li><a href="#features" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm">{t.navbar.features}</a></li>
                            <li><a href="#services" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm">{t.navbar.services}</a></li>
                            <li><a href="#hero" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm">Precios</a></li>
                            <li><a href="#demos" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm">{t.navbar.demos}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">{t.footer.company}</h3>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm">{t.navbar.about}</a></li>
                            <li><a href="#contact" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">{t.footer.follow}</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        {t.footer.rights} <a href="https://magozitsolutions.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline font-semibold">MaGoz IT Solutions</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
