import { motion } from 'framer-motion';

const GoPedidosIntro = ({ onStart, onBack }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#050505',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/projects/gopedidos.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.3,
                filter: 'blur(10px)',
                transform: 'scale(1.1)'
            }}></div>

            {/* Content Card */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                background: 'rgba(20, 20, 20, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px',
                padding: '60px',
                maxWidth: '800px',
                width: '90%',
                textAlign: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
            }}>
                <button
                    onClick={onBack}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: 'transparent',
                        border: 'none',
                        color: '#888',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        padding: '10px'
                    }}
                >
                    ✕
                </button>

                <img
                    src="/projects/gopedidos.png"
                    alt="GoPedidos Logo"
                    style={{
                        width: '120px',
                        height: '120px',
                        objectFit: 'cover',
                        borderRadius: '20px',
                        marginBottom: '30px',
                        boxShadow: '0 0 30px rgba(0,0,0,0.5)'
                    }}
                />

                <h1 style={{
                    fontSize: '3rem',
                    marginBottom: '10px',
                    background: 'linear-gradient(to right, #fff, #aaa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '800'
                }}>
                    GoPedidos
                </h1>

                <p style={{
                    color: '#A4FF00',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '25px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Gestión de Pedidos para Gastronomía
                </p>

                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: '#ccc',
                    marginBottom: '40px',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Una solución integral que permite a los negocios gastronómicos gestionar sus pedidos directamente hacia WhatsApp.
                    Incluye panel de administración, catálogo digital, carrito de compras y métricas en tiempo real.
                    Sin comisiones, diseñado para potenciar emprendedores.
                </p>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <button
                        onClick={onStart}
                        style={{
                            background: '#A4FF00',
                            color: '#000',
                            padding: '16px 40px',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            boxShadow: '0 0 20px rgba(164, 255, 0, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 0 40px rgba(164, 255, 0, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(164, 255, 0, 0.3)';
                        }}
                    >
                        Ver Demo Interactiva
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoPedidosIntro;
