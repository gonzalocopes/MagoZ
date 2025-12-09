import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            title: t('service_1_title'),
            description: t('service_1_desc'),
            icon: '💻'
        },
        {
            title: t('service_2_title'),
            description: t('service_2_desc'),
            icon: '⚙️'
        },
        {
            title: t('service_3_title'),
            description: t('service_3_desc'),
            icon: '🎨'
        }
    ];

    return (
        <section id="servicios" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '60px' }}>{t('services_title')}</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {services.map((service, index) => (
                        <div key={index} style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.0) 100%)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '40px 30px',
                            transition: 'transform 0.3s, border-color 0.3s',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                            }}>
                            <div style={{
                                fontSize: '2.5rem',
                                marginBottom: '20px',
                                background: 'rgba(255,255,255,0.05)',
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '15px' }}>{service.title}</h3>
                            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
