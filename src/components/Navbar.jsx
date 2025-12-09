import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    const navStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '20px 0',
        transition: 'all 0.3s ease',
        background: scrolled || menuOpen ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
    };

    const menuItems = [
        { key: 'nav_services', id: 'servicios' },
        { key: 'nav_projects', id: 'proyectos' },
        { key: 'nav_about', id: 'nosotros' }
    ];

    return (
        <nav style={navStyles}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <div
                    onClick={() => scrollToSection('hero')}
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        cursor: 'pointer',
                        letterSpacing: '-0.02em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    <span style={{ color: 'var(--color-primary)' }}>MagoZ</span>
                    <span style={{ fontSize: '0.9em', color: '#fff', fontWeight: '400' }}>{t('nav_brand_subtitle')}</span>
                </div>

                {/* Desktop Links */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                    {menuItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => scrollToSection(item.id)}
                            style={{
                                color: 'var(--color-text-muted)',
                                fontSize: '0.95rem',
                                fontWeight: '500',
                                transition: 'color 0.2s'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
                        >
                            {t(item.key)}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('contacto')}
                        style={{
                            background: '#fff',
                            color: '#000',
                            padding: '8px 20px',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--color-primary)';
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(164, 255, 0, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#fff';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {t('nav_contact')}
                    </button>

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        style={{
                            color: '#fff',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            padding: '5px 10px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                        }}
                    >
                        <span style={{ opacity: language === 'es' ? 1 : 0.5 }}>ES</span>
                        <span style={{ opacity: 0.5 }}>/</span>
                        <span style={{ opacity: language === 'en' ? 1 : 0.5 }}>EN</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <button /* Mobile Lang Toggle */
                        className="mobile-toggle"
                        onClick={toggleLanguage}
                        style={{
                            color: '#fff',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            display: 'none', // Will be shown by media query
                            marginRight: '10px'
                        }}
                    >
                        {language.toUpperCase()}
                    </button>

                    <button
                        className="mobile-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ color: '#fff', fontSize: '1.5rem', display: 'none' }}
                    >
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    background: '#050505',
                    padding: '20px',
                    borderBottom: '1px solid #333',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    alignItems: 'center'
                }}>
                    {menuItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => scrollToSection(item.id)}
                            style={{ color: '#fff', fontSize: '1.1rem' }}
                        >
                            {t(item.key)}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('contacto')}
                        style={{ color: '#fff', fontSize: '1.1rem' }}
                    >
                        {t('nav_contact')}
                    </button>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
