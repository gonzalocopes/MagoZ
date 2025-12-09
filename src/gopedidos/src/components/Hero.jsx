import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative pt-32 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
                    >
                        {t.hero.title} <br />
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                            {t.hero.subtitle}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8"
                    >
                        {t.hero.pricing}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <a href="#demos" className="px-8 py-4 bg-orange-500 text-white rounded-lg text-lg font-bold hover:bg-orange-600 transition-transform hover:scale-105 shadow-lg shadow-orange-500/30 z-20">
                            {t.hero.cta_demos}
                        </a>
                        <a href="#features" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-lg text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-20">
                            {t.hero.cta_features}
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Interactive Background Elements (Automatic Floating) */}
            <motion.div
                className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-20 dark:opacity-10 z-0 pointer-events-none"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-red-400 rounded-full blur-3xl opacity-20 dark:opacity-10 z-0 pointer-events-none"
                animate={{
                    x: [0, -80, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                }}
            />

            {/* Extra floating element */}
            <motion.div
                className="absolute top-1/2 left-1/4 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 dark:opacity-10 z-0 pointer-events-none"
                animate={{
                    x: [0, 150, 0],
                    y: [0, -100, 0],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                }}
            />
        </section>
    );
};

export default Hero;
