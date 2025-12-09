import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-3xl opacity-30 -mr-10 -mt-10"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-100 dark:bg-red-900/20 rounded-full blur-3xl opacity-30 -ml-10 -mb-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">{t.about.tag}</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        {t.about.heading}
                    </p>
                </div>

                <div className="prose prose-lg mx-auto text-gray-500 dark:text-gray-400 text-center max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        {t.about.text1_pre}<a href="https://magozitsolutions.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 font-bold hover:underline">{t.about.text1_link}</a>{t.about.text1_post}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-6"
                    >
                        {t.about.text2}
                    </motion.p>
                    <motion.p
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.2 }}
                    >
                        {t.about.text3_pre}<span className="text-gray-900 dark:text-white font-bold">{t.about.text3_highlight}</span>{t.about.text3_post}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default About;
