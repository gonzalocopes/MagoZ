import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    const links = [
        { key: 'nav_services', id: 'servicios' },
        { key: 'nav_projects', id: 'proyectos' },
        { key: 'nav_about', id: 'nosotros' }
    ];

    return (
        <footer id="contacto" style={{
            borderTop: '1px solid var(--color-border)',
            marginTop: 'auto',
            padding: '80px 0 40px',
            background: 'var(--color-surface)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    marginBottom: '60px'
                }}>
                    {/* Brand */}
                    <div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#fff' }}>MagoZ <span style={{ color: 'var(--color-primary)' }}>.</span></h2>
                        <p style={{ fontSize: '0.95rem' }}>
                            {t('footer_text')}
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '20px' }}>{t('nav_contact')}</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', listStyle: 'none', padding: 0 }}>
                            <li>
                                <a href="mailto:magoz.191030@gmail.com" style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                                    <span>📧</span> magoz.191030@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/541136424020" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                                    <span>💬</span> +54 11 36 4240 20
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/magozsolucionesit" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                                    <span>📸</span> @magozsolucionesit
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/magoz-it-solutions/" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                                    <span>💼</span> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '20px' }}>{t('footer_links_title')}</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
                            {links.map(item => (
                                <li key={item.key}>
                                    <a href={`#${item.id}`} style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', textDecoration: 'none' }}>
                                        {t(item.key)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #222',
                    paddingTop: '30px',
                    textAlign: 'center',
                    color: '#555',
                    fontSize: '0.85rem'
                }}>
                    &copy; {new Date().getFullYear()} MagoZ IT Solutions. {t('footer_rights')}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
