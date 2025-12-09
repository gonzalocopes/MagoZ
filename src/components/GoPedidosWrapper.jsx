import React, { Component } from 'react';
import { HelmetProvider } from 'react-helmet-async';
// Import dependencies from the moved project
import { ThemeProvider } from '../gopedidos/src/context/ThemeContext';
import { LanguageProvider as GoPedidosLanguageProvider } from '../gopedidos/src/context/LanguageContext';
import GoPedidosApp from '../gopedidos/src/App';
// Import the styles for GoPedidos
import '../gopedidos/src/index.css';
import PricingPlans from './PricingPlans';
import { LanguageProvider as MagozLanguageProvider } from '../context/LanguageContext';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("GoPedidos Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: 50, color: 'red', background: '#fff' }}>
                    <h2>Algo salió mal al cargar GoPedidos.</h2>
                    <pre>{this.state.error && this.state.error.toString()}</pre>
                </div>
            );
        }
        return this.props.children;
    }
}

const GoPedidosWrapper = ({ onBack }) => {
    return (
        <div className="gopedidos-root" style={{ position: 'relative', minHeight: '100vh', background: '#fff' }}>
            {/* Back Button Overlay */}
            <button
                onClick={onBack}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 9999,
                    background: '#A4FF00',
                    color: '#000',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '12px 24px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                ← Volver a MagoZ
            </button>

            <ErrorBoundary>
                <HelmetProvider>
                    <GoPedidosLanguageProvider>
                        <ThemeProvider>
                            <GoPedidosApp>
                                {/* PricingPlans depends on MagoZ (Main) Context */}
                                <MagozLanguageProvider>
                                    <div style={{ background: '#111827', paddingBottom: '100px' }}>
                                        <PricingPlans />
                                    </div>
                                </MagozLanguageProvider>
                            </GoPedidosApp>
                        </ThemeProvider>
                    </GoPedidosLanguageProvider>
                </HelmetProvider>
            </ErrorBoundary>
        </div>
    );
};

export default GoPedidosWrapper;
