import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
    const { t } = useLanguage();

    return (
        <section id="nosotros" className="section-padding" style={{ background: '#0a0a0a' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '60px',
                    alignItems: 'center'
                }}>
                    <div>
                        <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>{t('about_label')}</span>
                        <h2 className="text-gradient">{t('about_title')}</h2>
                        <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#ccc' }}>
                            {t('about_p1')}
                        </p>
                        <p style={{ lineHeight: '1.6', color: '#ccc' }}>
                            {t('about_p2')}
                        </p>
                    </div>

                    <div style={{
                        background: 'linear-gradient(45deg, #111, #1a1a1a)',
                        padding: '40px',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid #333',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                    }}>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {t('about_list').map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#fff' }}>
                                    <span style={{
                                        color: 'var(--color-primary)',
                                        background: 'rgba(164, 255, 0, 0.1)',
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px'
                                    }}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
