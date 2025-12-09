import React from 'react';
import { IceCream, Pizza, Utensils, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const DemoSection = () => {
    const { t } = useLanguage();

    const demos = [
        {
            icon: <IceCream className="w-12 h-12 text-white" />,
            title: t.demos.icecream,
            description: t.demos.icecream_desc,
            link: 'https://helado-app.vercel.app/',
            color: 'from-pink-500 to-rose-500',
            buttonColor: 'bg-rose-500 hover:bg-rose-600'
        },
        {
            icon: <Pizza className="w-12 h-12 text-white" />,
            title: t.demos.pizza,
            description: t.demos.pizza_desc,
            link: 'https://pizzeria-donpepe.vercel.app/',
            color: 'from-orange-500 to-red-500',
            buttonColor: 'bg-orange-500 hover:bg-orange-600'
        },
        {
            icon: <Utensils className="w-12 h-12 text-white" />,
            title: t.demos.burger,
            description: t.demos.burger_desc,
            link: 'https://burga-app.vercel.app/',
            color: 'from-yellow-400 to-orange-500',
            buttonColor: 'bg-yellow-500 hover:bg-yellow-600'
        }
    ];

    return (
        <section id="demos" className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
             {/* Background decoration */}
             <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 -ml-20 -mt-20"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 -mr-20 -mb-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">{t.demos.tag}</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        {t.demos.heading}
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        {t.demos.subheading}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {demos.map((demo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="flex flex-col rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`h-32 bg-gradient-to-br ${demo.color} flex items-center justify-center`}>
                                {demo.icon}
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{demo.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 flex-1 mb-6">{demo.description}</p>
                                <a 
                                    href={demo.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`w-full py-3 px-4 rounded-lg text-white font-bold text-center transition-transform hover:scale-105 shadow-md flex items-center justify-center gap-2 ${demo.buttonColor}`}
                                >
                                    {t.demos.view_demo} <ArrowRight size={18} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden transition-all duration-300"
                >
                     <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 dark:bg-green-900/20 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">{t.demos.custom_title}</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 relative z-10">
                        {t.demos.custom_text}
                    </p>
                    <a href="#contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl">
                        {t.demos.custom_cta}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default DemoSection;
