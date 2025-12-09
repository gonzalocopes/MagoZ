import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import GoPedidosShowcase from './components/GoPedidosShowcase';
import AboutUs from './components/AboutUs';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';
import './App.css';

const ProjectFrame = lazy(() => import('./components/ProjectFrame'));
const GoPedidosWrapper = lazy(() => import('./components/GoPedidosWrapper'));

function App() {
  const [activeProject, setActiveProject] = useState(null);

  // Define the GoPedidos project data for the showcase
  const goPedidosProject = {
    title: 'GoPedidos',
    category: 'App de Pedidos',
    image: '/projects/gopedidos.png',
    link: 'https://gopedidos-psi.vercel.app/',
    internal: true
  };

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleProjectClick = (project) => {
    setActiveProject(project);
    window.scrollTo(0, 0); // Scroll to top when opening
  };

  // Render Active Project (Full Screen Mode)
  if (activeProject) {
    return (
      <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#000', color: '#A4FF00' }}>
          Cargando...
        </div>
      }>
        {activeProject.title === 'GoPedidos' ? (
          <GoPedidosWrapper onBack={() => setActiveProject(null)} />
        ) : (
          <ProjectFrame
            title={activeProject.title}
            url={activeProject.link}
            onClose={() => setActiveProject(null)}
          />
        )}
      </Suspense>
    );
  }

  // Render Main Portfolio
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <GoPedidosShowcase onOpen={() => handleProjectClick(goPedidosProject)} />
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
}

export default App;
