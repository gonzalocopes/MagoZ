import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const TrustedBrands = () => {
    const { t } = useLanguage();

    const brands = [
        { name: "Pizzería El Maestro", logo: "/brands/pizzeria.png" },
        { name: "Papelera Los Álamos", logo: "/brands/papelera.png" },
        { name: "Librería RC", logo: "/brands/libreria.png" },
        { name: "Bicletería El Jake", logo: "/brands/eljake.png" }
    ];

    return (
        <section className="section-padding" style={{ background: '#000', borderTop: '1px solid #222' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span style={{ color: '#A4FF00', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                        {/* Optional subtitle */}
                    </span>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginTop: '10px' }}>
                        {t('trusted_brands_title')}
                    </h2>
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '50px',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, filter: 'brightness(1.2)' }}
                            style={{
                                flex: '0 1 200px',
                                textAlign: 'center',
                                padding: '20px',
                                borderRadius: '12px',
                                cursor: 'default',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '120px',
                                height: '120px',
                                marginBottom: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '50%',
                                padding: '20px'
                            }}>
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        filter: 'grayscale(100%) brightness(2)', // Make them crisp white
                                    }}
                                />
                            </div>
                            <span style={{ color: '#888', fontSize: '0.9rem', fontWeight: '500' }}>{brand.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBrands;
