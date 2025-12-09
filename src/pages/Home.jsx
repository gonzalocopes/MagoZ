import { useState, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import GoPedidosShowcase from '../components/GoPedidosShowcase';
import AboutUs from '../components/AboutUs';
import ProjectGallery from '../components/ProjectGallery';
import Footer from '../components/Footer';

const ProjectFrame = lazy(() => import('../components/ProjectFrame'));

const Home = () => {
    const [activeProject, setActiveProject] = useState(null);

    const goPedidosProject = {
        title: 'GoPedidos',
        category: 'App de Pedidos',
        image: '/projects/gopedidos.png',
        link: 'https://gopedidos-psi.vercel.app/',
        internal: true
    };

    const handleProjectClick = (project) => {
        setActiveProject(project);
        window.scrollTo(0, 0);
    };

    if (activeProject) {
        return (
            <Suspense fallback={
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#000', color: '#A4FF00' }}>
                    Cargando...
                </div>
            }>
                <ProjectFrame
                    title={activeProject.title}
                    url={activeProject.link}
                    onClose={() => setActiveProject(null)}
                />
            </Suspense>
        );
    }

    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Hero />
                <Services />
                {/* Pass null or no-op as onOpen since it will now be a Link */}
                <GoPedidosShowcase onOpen={() => { }} />
                <ProjectGallery onProjectClick={handleProjectClick} />
                <AboutUs />
            </main>
            <Footer />

            {/* Global Background Glow */}
            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'radial-gradient(circle at 50% 100%, rgba(20, 20, 20, 1) 0%, rgba(5,5,5,1) 50%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>
        </div>
    );
};

export default Home;
