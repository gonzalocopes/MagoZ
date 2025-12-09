import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './pages/Home';
import './App.css';

const GoPedidosWrapper = lazy(() => import('./components/GoPedidosWrapper'));

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
    </Routes>
  );
}

export default App;
