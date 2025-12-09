import ParticlesBackground from './ParticlesBackground';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px' // Offset for fixed navbar
        }}>
            {/* Background Effects */}
            <ParticlesBackground />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'url(/noise.png)', // Assuming noise texture or just keep it clean
                opacity: 0.03,
                zIndex: -1
            }}></div>

            <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
                <div className="fade-in" style={{ animationDelay: '0.1s' }}>
                    <span style={{
                        color: 'var(--color-primary)',
                        fontWeight: '600',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        background: 'rgba(164, 255, 0, 0.1)',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        display: 'inline-block',
                        marginBottom: '20px'
                    }}>
                        {t('hero_label')}
                    </span>
                </div>

                <h1 className="fade-in text-gradient" style={{ animationDelay: '0.2s', marginBottom: '25px' }}>
                    {t('hero_title_1')}<br />
                    <span style={{ color: '#fff' }}>{t('hero_title_2')}</span>
                </h1>

                <p className="fade-in" style={{ animationDelay: '0.3s', margin: '0 auto 40px', fontSize: '1.25rem', color: '#ccc', maxWidth: '800px', lineHeight: '1.6' }}>
                    {t('hero_subtitle')}
                </p>

                <div className="fade-in" style={{ animationDelay: '0.4s', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#contacto" style={{
                        background: 'var(--color-primary)',
                        color: '#000',
                        padding: '14px 32px',
                        borderRadius: '30px',
                        fontWeight: '600',
                        fontSize: '1rem',
                        textDecoration: 'none',
                        boxShadow: '0 0 20px rgba(164, 255, 0, 0.3)',
                        transition: 'transform 0.2s, box-shadow 0.2s'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(164, 255, 0, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(164, 255, 0, 0.3)';
                        }}>
                        {t('hero_btn_start')}
                    </a>

                    <a href="#proyectos" style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#fff',
                        border: '1px solid #333',
                        padding: '14px 32px',
                        borderRadius: '30px',
                        fontWeight: '600',
                        fontSize: '1rem',
                        textDecoration: 'none',
                        backdropFilter: 'blur(10px)',
                        transition: 'background 0.2s'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}>
                        {t('hero_btn_view')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
