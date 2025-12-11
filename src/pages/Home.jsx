import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import GoPedidosShowcase from '../components/GoPedidosShowcase';
import AboutUs from '../components/AboutUs';
import TrustedBrands from '../components/TrustedBrands';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <GoPedidosShowcase />
                <TrustedBrands />
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
