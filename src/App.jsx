import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './pages/Home';
import './App.css';

const GoPedidosWrapper = lazy(() => import('./components/GoPedidosWrapper'));
const CrunchyBurgerApp = lazy(() => import('./proyectos/crunchyburger/App'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gopedidos" element={
        <Suspense fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#000', color: '#A4FF00' }}>
            Cargando GoPedidos...
          </div>
        }>
          <GoPedidosWrapper />
        </Suspense>
      } />
      {/* Route for CrunchyBurger Client App */}
      <Route path="/gopedidos/crunchyburger/*" element={
        <Suspense fallback={<div>Cargando Crunchy Burger...</div>}>
          <CrunchyBurgerApp />
        </Suspense>
      } />
    </Routes>
  );
}

export default App;
