import { useState } from 'react';

const ProjectFrame = ({ title, url, onClose }) => {
    const [loading, setLoading] = useState(true);

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
            flexDirection: 'column'
        }}>
            {/* Header */}
            <div style={{
                height: '60px',
                borderBottom: '1px solid #333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                background: '#111'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <button
                        onClick={onClose}
                        style={{
                            color: '#fff',
                            background: 'transparent',
                            border: '1px solid #444',
                            borderRadius: '50%',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '1.2rem'
                        }}
                    >
                        ←
                    </button>
                    <h2 style={{ fontSize: '1rem', margin: 0, color: '#fff' }}>{title}</h2>
                </div>

                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        fontSize: '0.85rem',
                        color: 'var(--color-primary)',
                        textDecoration: 'none'
                    }}
                >
                    Abrir en nueva pestaña ↗
                </a>
            </div>

            {/* Frame Content */}
            <div style={{ flex: 1, position: 'relative' }}>
                {loading && (
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#888'
                    }}>
                        Cargando vista previa...
                    </div>
                )}
                <iframe
                    src={url}
                    title={title}
                    onLoad={() => setLoading(false)}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        background: '#fff'
                    }}
                />
            </div>
        </div>
    );
};

export default ProjectFrame;
