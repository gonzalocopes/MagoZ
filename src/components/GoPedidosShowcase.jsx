import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const GoPedidosShowcase = () => {
    const { t } = useLanguage();

    return (
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(164, 255, 0, 0.05) 0%, transparent 60%)',
                zIndex: -1
            }}></div>

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '60px',
                    alignItems: 'center'
                }}>
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <div style={{ width: '40px', height: '2px', background: '#A4FF00' }}></div>
                            <span style={{ color: '#A4FF00', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
                                {t('showcase_label')}
                            </span>
                        </div>

                        <h2 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: '1.1' }}>
                            {t('showcase_title_1')} <span style={{ color: '#fff' }}>{t('showcase_title_2')}</span>
                        </h2>

                        <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '30px', lineHeight: '1.6' }}>
                            {t('showcase_desc')}
                        </p>

                        <ul style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {t('showcase_list').map((item, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ddd' }}>
                                    <span style={{ color: '#A4FF00' }}>✓</span> {item}
                                </li>
                            ))}
                        </ul>

                        <Link to="/gopedidos" style={{ textDecoration: 'none' }}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: 'transparent',
                                    border: '2px solid #A4FF00',
                                    color: '#A4FF00',
                                    padding: '16px 32px',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#A4FF00';
                                    e.currentTarget.style.color = '#000';
                                    e.currentTarget.style.boxShadow = '0 0 30px rgba(164, 255, 0, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = '#A4FF00';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {t('showcase_btn')}
                                <span>→</span>
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ position: 'relative' }}
                    >
                        {/* Glass Card Backdrop */}
                        <div style={{
                            position: 'absolute',
                            inset: '-20px',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                            borderRadius: '30px',
                            zIndex: -1,
                            transform: 'rotate(2deg)'
                        }}></div>

                        <img
                            src="/projects/gopedidos.png"
                            alt="GoPedidos Interface"
                            loading="lazy"
                            style={{
                                width: '100%',
                                borderRadius: '20px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        />
                    </motion.div>
                </div>

                {/* Mobile responsiveness check */}
                <style>{`
          @media (max-width: 968px) {
            .container > div {
              grid-template-columns: 1fr !important;
              text-align: center;
            }
            .container > div > div:first-child {
              align-items: center !important;
            }
            .container ul {
              align-items: center !important;
            }
          }
        `}</style>
            </div>
        </section>
    );
};

export default GoPedidosShowcase;
