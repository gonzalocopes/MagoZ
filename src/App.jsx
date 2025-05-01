// src/App.jsx
import { useState, useEffect } from 'react';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import icons from './data/icons';
import './App.css';

function App() {
  const [openWindows, setOpenWindows] = useState([]);
  const [closingWindows, setClosingWindows] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());
  const [menuVisible, setMenuVisible] = useState(false);
  const [zIndexMap, setZIndexMap] = useState({});
  const [zIndexCounter, setZIndexCounter] = useState(100);
  const [loading, setLoading] = useState(true);
  const [positions, setPositions] = useState({});
  const [iconPositions, setIconPositions] = useState(() => {
    const spacing = 100;
    return icons.reduce((acc, icon, index) => {
      acc[icon.title] = { x: 20 + index * spacing, y: 20 };
      return acc;
    }, {});
  });

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const bringToFront = (title) => {
    setZIndexCounter(prev => prev + 1);
    setZIndexMap(prev => ({ ...prev, [title]: zIndexCounter + 1 }));
  };

  const openWindow = (title) => {
    const exists = openWindows.find(w => w.title === title);
    if (exists) {
      setOpenWindows(openWindows.map(w =>
        w.title === title ? { ...w, minimized: false } : w
      ));
    } else {
      setOpenWindows([...openWindows, { title, minimized: false }]);
      setZIndexMap(prev => ({ ...prev, [title]: zIndexCounter + 1 }));
      setZIndexCounter(prev => prev + 1);
    }
  };

  const closeWindow = (title) => {
    setClosingWindows(prev => [...prev, title]);
    setTimeout(() => {
      setOpenWindows(wins => wins.filter(w => w.title !== title));
      setClosingWindows(prev => prev.filter(t => t !== title));
    }, 300);
  };

  const toggleMinimize = (title) => {
    setOpenWindows(openWindows.map(w =>
      w.title === title ? { ...w, minimized: !w.minimized } : w
    ));
  };

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const updatePosition = (title, pos) => {
    setPositions(prev => ({ ...prev, [title]: pos }));
  };

  const updateIconPosition = (title, pos) => {
    setIconPositions(prev => ({ ...prev, [title]: pos }));
  };

  const color = '#A4FF00';

  const windowContent = {
    'Nosotros': (
      <div style={{ fontFamily: 'Segoe UI, sans-serif', color: '#dcdcdc', padding: '10px' }}>
        <h2 style={{ color }}>¿Quiénes somos?</h2>
        <p>En <strong style={{ color }}>MaGoz IT Solutions</strong> somos un equipo apasionado por la tecnología 💻. Desarrollamos soluciones digitales modernas y a medida, combinando creatividad, innovación y experiencia técnica.</p>
        <p>Nos especializamos en <span style={{ color }}>diseño web</span>, <span style={{ color }}>software a medida</span> y <span style={{ color }}>estrategias digitales</span> para ayudar a nuestros clientes a destacar en el mundo digital.</p>
        <p style={{ fontStyle: 'italic', color: '#bbb' }}>Transformamos ideas en soluciones reales, con compromiso y profesionalismo.</p>
      </div>
    ),
    'Proyectos': (
      <div style={{ fontFamily: 'Segoe UI, sans-serif', color: '#dcdcdc', padding: '10px' }}>
        <h2 style={{ color }}>Proyectos destacados</h2>
        <ul>
          <li><strong style={{ color }}>E-commerce personalizado:</strong> Plataforma de ventas para una tienda local.</li>
          <li><strong style={{ color }}>Sistema de reservas:</strong> Gestión de turnos online para un consultorio médico.</li>
          <li><strong style={{ color }}>Panel administrativo:</strong> Backend a medida para un negocio de logística.</li>
        </ul>
        <p style={{ fontStyle: 'italic', color: '#bbb' }}>Cada proyecto es una oportunidad para innovar y mejorar la experiencia digital del cliente.</p>
      </div>
    ),
    'Servicios': (
      <div style={{ fontFamily: 'Segoe UI, sans-serif', color: '#dcdcdc', padding: '10px' }}>
        <h2 style={{ color }}>Nuestros servicios</h2>
        <ul>
          <li><strong style={{ color }}>Diseño Web:</strong> Sitios visualmente atractivos, funcionales y responsive.</li>
          <li><strong style={{ color }}>Desarrollo a medida:</strong> Software adaptable a las necesidades de tu negocio.</li>
          <li><strong style={{ color }}>Marketing Digital:</strong> Posicionamiento SEO, campañas SEM y redes sociales.</li>
        </ul>
        <p style={{ fontStyle: 'italic', color: '#bbb' }}>Brindamos soluciones técnicas con visión creativa y estratégica.</p>
      </div>
    ),
    'Contacto': (
      <div style={{ fontFamily: 'Segoe UI, sans-serif', color: '#dcdcdc', padding: '10px' }}>
        <h2 style={{ color }}>Contacto</h2>
        <p>Podés comunicarte con nosotros a través de:</p>
        <ul>
          <li>Email: <span style={{ color }}>contacto@magozit.com</span></li>
          <li>WhatsApp: <a href="https://wa.me/541112345678" target="_blank" style={{ color }}>+54 11 1234 5678</a></li>
          <li>Instagram: <a href="https://instagram.com/magoz.it" target="_blank" style={{ color }}>@magoz.it</a></li>
        </ul>
        <p style={{ fontStyle: 'italic', color: '#bbb' }}>Estamos disponibles para ayudarte en lo que necesites.</p>
      </div>
    ),
    'Portafolio': (
      <div style={{
        fontFamily: 'Segoe UI, sans-serif',
        color: '#dcdcdc',
        padding: '10px',
        background: '#1f1f1f',
        borderRadius: '8px'
      }}>
        <h2 style={{ color, marginTop: 0 }}>Portafolio</h2>
        <div style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {[
            {
              title: 'De Copas Café & Bar',
              description: 'Plataforma de ventas online moderna con carrito de compras y pasarela de pago integrada.',
              image: '/projects/proyecto1.png',
              link: 'https://decopas.netlify.app'
            },
            {
              title: 'Sistema de Reservas',
              description: 'Aplicación para gestionar turnos médicos, recordatorios automáticos y administración de horarios.',
              image: '/proyectos/reservas.png',
              link: '#'
            },
            {
              title: 'Panel de Administración',
              description: 'Sistema interno para empresas de logística con control de stock y usuarios.',
              image: '/proyectos/admin.png',
              link: '#'
            },
            {
              title: 'Bienes Raices',
              description: 'Este proyecto está diseñado para facilitar la compra, venta y alquiler de propiedades de manera eficiente y segura.',
              image: '/projects/proyecto2.png',
              link: 'https://bienesraicesbymagoz.netlify.app/'
            }
          ].map(({ title, description, image, link }) => (
            <div key={title} style={{
              background: '#2a2a2a',
              padding: '15px',
              borderRadius: '10px',
              width: '280px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.4)';
              }}
            >
              <img src={image} alt={title} style={{
                width: '100%',
                height: '160px',
                objectFit: 'cover',
                borderRadius: '6px',
                marginBottom: '10px',
                transition: 'transform 0.3s ease'
              }} />
              <h3 style={{ color, margin: '10px 0 5px' }}>{title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '15px' }}>{description}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" style={{
                backgroundColor: '#A4FF00',
                color: '#000',
                padding: '8px 16px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block'
              }}>Ver Proyecto</a>
            </div>
          ))}
        </div>
      </div>
    )
  };

  if (loading) {
    return (
      <div className="terminal-loader">
        <div className="terminal-text">Iniciando MaGoz IT Solutions...<span className="dots"></span></div>
      </div>
    );
  }

  return (
    <div className="desktop">
      {icons.map(icon => (
        <DesktopIcon
          key={icon.title}
          {...icon}
          onClick={() => openWindow(icon.title)}
          position={iconPositions[icon.title]}
          onPositionChange={updateIconPosition}
        />
      ))}

      {openWindows.map(({ title, minimized }) => (
        !minimized && (
          <Window
            key={title}
            title={title}
            onClose={() => closeWindow(title)}
            onMinimize={() => toggleMinimize(title)}
            onFocus={() => bringToFront(title)}
            zIndex={zIndexMap[title] || 100}
            isClosing={closingWindows.includes(title)}
            initialPos={positions[title] || { x: 100, y: 100 }}
            onDragEnd={(pos) => updatePosition(title, pos)}
          >
            {windowContent[title] || <p>Contenido no disponible.</p>}
          </Window>
        )
      ))}

      <div className="taskbar">
        <button className="start-btn" onClick={toggleMenu}>
          <img src="/icons/windows-icon.png" alt="Inicio" className="start-icon" />
        </button>

        {menuVisible && (
          <div className="start-menu">
            <p>Inicio</p>
            <ul>
              {['Nosotros', 'Proyectos', 'Servicios', 'Contacto', 'Portafolio'].map(item => (
                <li key={item} onClick={() => openWindow(item)}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="task-buttons">
          {openWindows.map(({ title, minimized }) => (
            <button
              key={title}
              className={`task-button ${minimized ? 'minimized' : ''}`}
              onClick={() => toggleMinimize(title)}
            >
              {title}
            </button>
          ))}
        </div>

        <div className="clock">
          {dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}<br />
          {dateTime.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}

export default App;
