import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es'); // 'es' or 'en'

    const translations = {
        es: {
            // Navbar
            nav_services: 'Servicios',
            nav_projects: 'Proyectos',
            nav_about: 'Nosotros',
            nav_contact: 'Contacto',
            nav_brand_subtitle: 'IT Solutions',

            // Hero
            hero_label: 'Agencia de Desarrollo de Software / Buenos Aires',
            hero_title_1: 'Agencia de Software:',
            hero_title_2: 'Creamos el Futuro Digital de tu Empresa.',
            hero_subtitle: 'Nos especializamos en el desarrollo de software y sitios web a medida. Transformamos tus ideas en soluciones digitales funcionales, seguras y escalables para llevar tu negocio al siguiente nivel.',
            hero_btn_start: 'Iniciar Proyecto',
            hero_btn_view: 'Ver Proyectos',

            // Services
            services_title: 'Nuestros Servicios',
            service_1_title: 'Desarrollo Web & Apps',
            service_1_desc: 'Sitios web institucionales, Landing Pages y Aplicaciones Web Progresivas (PWA) de alto rendimiento. Utilizamos React, Next.js y Node.js para resultados escalables.',
            service_2_title: 'Sistemas a Medida (SaaS)',
            service_2_desc: 'Software de gestión personalizado, CRMs, ERPs y paneles de administración automatizados para optimizar los procesos operativos de tu negocio.',
            service_3_title: 'Diseño UX/UI & Branding',
            service_3_desc: 'Diseño de experiencias de usuario centradas en la conversión. Creamos identidades visuales modernas y prototipos interactivos que enamoran.',

            // GoPedidos Showcase
            showcase_label: 'Producto Destacado',
            showcase_title_1: 'MagoZ',
            showcase_title_2: 'GoPedidos',
            showcase_desc: 'La solución definitiva para gestión de pedidos gastronómicos. Integra tu menú digital directamente con WhatsApp, eliminando comisiones y automatizando tu negocio. Una experiencia nativa, rápida y diseñada para vender más.',
            showcase_list: [
                'Sin comisiones por venta',
                'Panel de administración completo',
                'Pedidos directo a WhatsApp',
                'Catálogo digital autoadministrable'
            ],
            showcase_btn: 'Conoce más',

            // Pricing
            pricing_title: 'Planes y Precios',
            pricing_subtitle: 'Elejí la solución ideal para potenciar tu negocio.',
            pricing_month: '/mes',
            pricing_currency: '$',

            // Plan 1
            plan_1_title: 'Inicial',
            plan_1_products: 'Hasta 20 Productos.',

            // Plan 2
            plan_2_title: 'Emprendedor',
            plan_2_products: 'De 20 a 55 Productos.',
            plan_2_label: 'MÁS ELEGIDO',

            // Plan 3
            plan_3_title: 'Empresarial',
            plan_3_products: 'De 55 productos en adelante.',

            // Common Features labels
            feat_access: 'Link & QR de acceso rápido',
            feat_design: 'Diseño y config. inicial',
            feat_support: 'Soporte técnico y comercial 24/7',
            feat_payments: 'Integración formas de pago',
            feat_brochure: 'Folletería comercial con Link y QR',
            feat_clients: 'Módulo de Clientes',
            feat_sellers: 'Módulo de Vendedores',
            feat_custom_logo: 'Personalización Logo/Favicon',
            feat_branches: 'Multi-Sucursales',
            feat_domain: 'Dominio personalizado',
            feat_maps: 'Integración Google Maps',
            feat_webapp: 'Versión WebApp Instalable',

            pricing_btn: 'Elegir Plan',

            // About Us
            about_label: 'NOSOTROS',
            about_title: 'Innovación y Compromiso',
            about_p1: 'En MaGoz IT Solutions combinamos creatividad, tecnología y experiencia para ofrecer productos digitales que impulsan el crecimiento, mejoran la eficiencia y fortalecen la presencia online de nuestros clientes.',
            about_p2: 'Desde aplicaciones web hasta sistemas personalizados, trabajamos con un enfoque centrado en el usuario, la calidad y la innovación. Nuestro compromiso es acompañarte en cada etapa del proceso, desde el diseño hasta el lanzamiento y mantenimiento.',
            about_list: [
                'Desarrollo de Software Personalizado',
                'Diseño y Desarrollo Web Responsivo',
                'Soporte Técnico y Mantenimiento',
                'Soluciones Seguras y a la Medida'
            ],

            // Trusted Brands
            trusted_brands_title: 'Marcas que confían en nosotros',

            // Projects Gallery
            projects_title: 'Casos de Éxito',
            project_cat_app: 'App de Pedidos',
            project_cat_ecommerce: 'E-Commerce',
            project_cat_realestate: 'Plataforma Inmobiliaria',
            project_cat_dashboard: 'Dashboard',

            // Footer
            footer_text: 'Transformamos ideas complejas en experiencias digitales fluidas y efectivas.',
            footer_links_title: 'Links Rápidos',
            footer_rights: 'Todos los derechos reservados.'
        },
        en: {
            // Navbar
            nav_services: 'Services',
            nav_projects: 'Projects',
            nav_about: 'About',
            nav_contact: 'Contact',
            nav_brand_subtitle: 'IT Solutions',

            // Hero
            hero_label: 'Software Development Agency / Buenos Aires',
            hero_title_1: 'Software Agency:',
            hero_title_2: 'Creating Your Company\'s Digital Future.',
            hero_subtitle: 'We specialize in custom software and website development. We transform your ideas into functional, secure, and scalable digital solutions to take your business to the next level.',
            hero_btn_start: 'Start Project',
            hero_btn_view: 'View Projects',

            // Services
            services_title: 'Our Services',
            service_1_title: 'Web & App Development',
            service_1_desc: 'Institutional websites, Landing Pages, and high-performance Progressive Web Apps (PWA). We use React, Next.js, and Node.js for scalable results.',
            service_2_title: 'Custom Systems (SaaS)',
            service_2_desc: 'Custom management software, CRMs, ERPs, and automated admin panels to optimize your business operational processes.',
            service_3_title: 'UX/UI Design & Branding',
            service_3_desc: 'User experience design focused on conversion. We create modern visual identities and interactive prototypes that captivate.',

            // GoPedidos Showcase
            showcase_label: 'Featured Product',
            showcase_title_1: 'MagoZ',
            showcase_title_2: 'GoPedidos',
            showcase_desc: 'The ultimate solution for gastronomic order management. Integrate your digital menu directly with WhatsApp, eliminating commissions and automating your business. A native, fast experience designed to sell more.',
            showcase_list: [
                'No sales commissions',
                'Complete admin panel',
                'Direct-to-WhatsApp orders',
                'Self-managed digital catalog'
            ],
            showcase_btn: 'Learn more',

            // Pricing
            pricing_title: 'Plans & Pricing',
            pricing_subtitle: 'Choose the perfect plan for your business growth.',
            pricing_month: '/month',
            pricing_currency: '$',

            // Plan 1
            plan_1_title: 'Initial',
            plan_1_products: 'Up to 50 Products',

            // Plan 2
            plan_2_title: 'Entrepreneur',
            plan_2_products: '50 to 100 Products',
            plan_2_label: 'MOST POPULAR',

            // Plan 3
            plan_3_title: 'Business',
            plan_3_products: '100 to 150 Products',

            // Common Features labels
            feat_access: 'Quick Access Link & QR',
            feat_design: 'Initial Design & Config',
            feat_support: '24/7 Tech & Commercial Support',
            feat_payments: 'Payment Integration',
            feat_brochure: 'Commercial Flyer with Link & QR',
            feat_clients: 'Client Module',
            feat_sellers: 'Seller Module',
            feat_custom_logo: 'Logo/Favicon Customization',
            feat_branches: 'Multi-Branch',
            feat_domain: 'Custom Domain',
            feat_maps: 'Google Maps Integration',
            feat_webapp: 'Installable WebApp',

            pricing_btn: 'Choose Plan',

            // About Us
            about_label: 'ABOUT US',
            about_title: 'Innovation and Commitment',
            about_p1: 'At MaGoz IT Solutions, we combine creativity, technology, and experience to offer digital products that drive growth, improve efficiency, and strengthen our clients\' online presence.',
            about_p2: 'From web applications to custom systems, we work with a focus on the user, quality, and innovation. Our commitment is to accompany you at every stage of the process, from design to launch and maintenance.',
            about_list: [
                'Custom Software Development',
                'Responsive Web Design & Development',
                'Technical Support & Maintenance',
                'Secure & Custom Solutions'
            ],

            // Trusted Brands
            trusted_brands_title: 'Brands that trust us',

            // Projects Gallery
            projects_title: 'Success Stories',
            project_cat_app: 'Ordering App',
            project_cat_ecommerce: 'E-Commerce',
            project_cat_realestate: 'Real Estate Platform',
            project_cat_dashboard: 'Dashboard',

            // Footer
            footer_text: 'Transforming complex ideas into fluid and effective digital experiences.',
            footer_links_title: 'Quick Links',
            footer_rights: 'All rights reserved.'
        }
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
