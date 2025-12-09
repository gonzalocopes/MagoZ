import { useLanguage } from '../context/LanguageContext';

const ProjectGallery = ({ onProjectClick }) => {
    const { t } = useLanguage();

    const projects = [
        {
            title: 'De Copas Café & Bar',
            categoryKey: 'project_cat_ecommerce',
            image: '/projects/proyecto1.png',
            link: 'https://papayawhip-peafowl-543742.hostingersite.com/'
        },
        {
            title: 'Bienes Raices',
            categoryKey: 'project_cat_realestate',
            image: '/projects/proyecto2.png',
            link: 'https://bienesraicesbymagoz.netlify.app/'
        },
        {
            title: 'Panel Logístico',
            categoryKey: 'project_cat_dashboard',
            image: '/projects/proyecto4.png',
            link: 'https://www.youtube.com/watch?v=Gc3ej98ksUM'
        },
        {
            title: 'Tienda de Ropa',
            categoryKey: 'project_cat_ecommerce',
            image: '/projects/proyecto5.png',
            link: 'https://www.youtube.com/watch?v=rsA72lvRvnI'
        },
        {
            title: 'Tienda Bicicletas',
            categoryKey: 'project_cat_ecommerce',
            image: '/projects/bici.png',
            link: 'https://lightsalmon-gull-292593.hostingersite.com/'
        }
    ];

    return (
        <section id="proyectos" className="section-padding">
            <div className="container">
                <h2 className="text-gradient" style={{ marginBottom: '60px' }}>{t('projects_title')}</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '40px'
                }}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card"
                            style={{ cursor: 'pointer', textDecoration: 'none' }}
                            onClick={(e) => {
                                if (project.internal) {
                                    e.preventDefault();
                                    onProjectClick(project);
                                } else {
                                    // Default behavior for other links (navigate away)
                                    window.open(project.link, '_blank');
                                }
                            }}
                        >
                            <div style={{
                                borderRadius: 'var(--radius-md)',
                                overflow: 'hidden',
                                background: '#111',
                                border: '1px solid #333',
                                position: 'relative',
                                aspectRatio: '16/9',
                                marginBottom: '20px'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                        opacity: 0.9
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.opacity = '1';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.opacity = '0.9';
                                    }}
                                />
                            </div>
                            <h3 style={{ color: '#fff', fontSize: '1.25rem' }}>{project.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>{t(project.categoryKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
