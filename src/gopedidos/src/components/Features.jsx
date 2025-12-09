import React from 'react';
import { ShoppingCart, QrCode, Smartphone, Zap, DollarSign, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: <ShoppingCart className="w-6 h-6 text-orange-600" />,
            title: t.features.items[0].title,
            description: t.features.items[0].description
        },
        {
            icon: <QrCode className="w-6 h-6 text-orange-600" />,
            title: t.features.items[1].title,
            description: t.features.items[1].description
        },
        {
            icon: <Smartphone className="w-6 h-6 text-orange-600" />,
            title: t.features.items[2].title,
            description: t.features.items[2].description
        },
        {
            icon: <Zap className="w-6 h-6 text-orange-600" />,
            title: t.features.items[3].title,
            description: t.features.items[3].description
        },
        {
            icon: <DollarSign className="w-6 h-6 text-orange-600" />,
            title: t.features.items[4].title,
            description: t.features.items[4].description
        },
        {
            icon: <Clock className="w-6 h-6 text-orange-600" />,
            title: t.features.items[5].title,
            description: t.features.items[5].description
        }
    ];

    return (
        <div className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">{t.features.title}</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        {t.features.heading}
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        {t.features.subheading}
                    </p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center sm:items-start text-center sm:text-left p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-500 mb-5">
                                    {feature.icon}
                                </div>
                                <div className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                    {feature.title}
                                </div>
                                <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                                    {feature.description}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
