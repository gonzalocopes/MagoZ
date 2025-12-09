import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const PricingPlans = () => {
    const { t } = useLanguage();

    const plans = [
        {
            key: 'plan_initial',
            title: t('plan_1_title'),
            price: '20.000',
            products: t('plan_1_products'),
            features: [
                t('feat_access'),
                t('feat_design'),
                t('feat_support'),
                t('feat_payments'),
                t('feat_brochure')
            ],
            notIncluded: [
                t('feat_clients'),
                t('feat_sellers'),
                t('feat_custom_logo'),
                t('feat_branches'),
                t('feat_domain'),
                t('feat_maps'),
                t('feat_webapp')
            ]
        },
        {
            key: 'plan_entrepreneur',
            title: t('plan_2_title'),
            price: '30.000',
            products: t('plan_2_products'),
            isPopular: true,
            label: t('plan_2_label'),
            features: [
                t('feat_access'),
                t('feat_design'),
                t('feat_support'),
                t('feat_payments'),
                t('feat_brochure'),
                t('feat_clients'),
                t('feat_sellers'),
                t('feat_custom_logo')
            ],
            notIncluded: [
                t('feat_branches'),
                t('feat_domain'),
                t('feat_maps'),
                t('feat_webapp')
            ]
        },
        {
            key: 'plan_business',
            title: t('plan_3_title'),
            price: '40.000',
            products: t('plan_3_products'),
            features: [
                t('feat_access'),
                t('feat_design'),
                t('feat_support'),
                t('feat_payments'),
                t('feat_brochure'),
                t('feat_clients'),
                t('feat_sellers'),
                t('feat_custom_logo'),
                t('feat_branches'),
                t('feat_domain'),
                t('feat_maps'),
                t('feat_webapp')
            ],
            notIncluded: []
        }
    ];

    return (
        <section id="precios" className="section-padding" style={{ position: 'relative' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(255, 102, 0, 0.05) 0%, transparent 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        color: '#ffffff',
                        marginBottom: '20px',
                        letterSpacing: '-1px',
                        textShadow: '0 0 30px rgba(255, 102, 0, 0.3)'
                    }}>
                        {t('pricing_title')}
                    </h2>
                    <p style={{
                        color: '#9ca3af',
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        {t('pricing_subtitle')}
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    justifyContent: 'center'
                }}>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{
                                background: plan.isPopular
                                    ? 'rgba(20, 20, 20, 0.8)' // Dark background for contrast
                                    : 'rgba(255, 255, 255, 0.03)',
                                border: plan.isPopular
                                    ? '2px solid #FF6600' // Orange border to highlight
                                    : '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '24px',
                                padding: '40px 30px',
                                position: 'relative',
                                transform: plan.isPopular ? 'scale(1.05)' : 'scale(1)',
                                zIndex: plan.isPopular ? 2 : 1,
                                boxShadow: plan.isPopular ? '0 0 40px rgba(255, 102, 0, 0.15)' : 'none',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            {plan.isPopular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: '#FF6600',
                                    color: '#fff',
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    fontSize: '0.9rem',
                                    fontWeight: '800',
                                    letterSpacing: '1px',
                                    boxShadow: '0 4px 15px rgba(255, 102, 0, 0.4)',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {plan.label}
                                </div>
                            )}

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#fff' }}>{plan.title}</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', marginBottom: '5px', gap: '5px' }}>
                                <span style={{ fontSize: '1.2rem', color: '#FF6600' }}>{t('pricing_currency')}</span>
                                <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff' }}>{plan.price}</span>
                            </div>
                            <p style={{ color: '#888', marginBottom: '30px' }}>{t('pricing_month')}</p>

                            <div style={{
                                background: 'rgba(255, 102, 0, 0.1)',
                                color: '#FF6600',
                                padding: '10px',
                                borderRadius: '10px',
                                marginBottom: '30px',
                                fontWeight: '600'
                            }}>
                                {plan.products}
                            </div>

                            <ul style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px', padding: 0 }}>
                                {plan.features.map((feat, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#ddd', fontSize: '0.95rem' }}>
                                        <span style={{ color: '#FF6600', flexShrink: 0, fontWeight: 'bold' }}>✓</span>
                                        {feat}
                                    </li>
                                ))}
                                {plan.notIncluded.map((feat, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#555', fontSize: '0.95rem' }}>
                                        <span style={{ color: '#555', flexShrink: 0 }}>×</span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <a href="https://wa.me/541122949729" target="_blank" rel="noreferrer" style={{
                                display: 'block',
                                width: '100%',
                                padding: '15px',
                                borderRadius: '50px',
                                background: plan.isPopular ? '#FF6600' : 'transparent',
                                color: '#fff',
                                border: plan.isPopular ? 'none' : '1px solid #555',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                textAlign: 'center',
                                marginTop: 'auto'
                            }}
                                onMouseEnter={(e) => {
                                    if (!plan.isPopular) {
                                        e.currentTarget.style.borderColor = '#FF6600';
                                        e.currentTarget.style.color = '#FF6600';
                                    } else {
                                        e.currentTarget.style.background = '#e55a00';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(255, 102, 0, 0.3)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!plan.isPopular) {
                                        e.currentTarget.style.borderColor = '#555';
                                        e.currentTarget.style.color = '#fff';
                                    } else {
                                        e.currentTarget.style.background = '#FF6600';
                                        e.currentTarget.style.transform = 'none';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }
                                }}
                            >
                                {t('pricing_btn')}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default PricingPlans;
