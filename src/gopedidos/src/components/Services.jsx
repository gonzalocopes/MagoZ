import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Zap, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            icon: <Globe className="w-8 h-8 text-blue-500" />,
            title: t.services.items[0].title,
            description: t.services.items[0].description
        },
        {
            icon: <Code className="w-8 h-8 text-purple-500" />,
            title: t.services.items[1].title,
            description: t.services.items[1].description
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: t.services.items[2].title,
            description: t.services.items[2].description
        }
    ];

    return (
        <section id="services" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">{t.services.tag}</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        {t.services.heading}
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        {t.services.subheading}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
                        >
                            <div className="bg-white dark:bg-gray-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center justify-center p-1 rounded-full bg-orange-50 dark:bg-orange-900/30 border border-orange-100 dark:border-orange-800">
                        <span className="px-4 py-2 text-orange-700 dark:text-orange-300 font-medium text-sm md:text-base">
                            {t.services.cta_text} <span className="font-bold">{t.services.cta_highlight}</span>
                        </span>
                        <a href="#contact" className="px-6 py-2 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors flex items-center gap-2 ml-2">
                            {t.services.cta_button} <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
