import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './pages/Home';
import './App.css';

const GoPedidosWrapper = lazy(() => import('./components/GoPedidosWrapper'));
const CrunchyBurgerApp = lazy(() => import('./proyectos/crunchyburger/App'));
const CapyBurgersApp = lazy(() => import('./proyectos/capyburgers/App'));
const PizzeriaElMaestroApp = lazy(() => import('./proyectos/PizzeriaElmaestro/App'));
const PizzeriaBonanzaApp = lazy(() => import('./proyectos/PizzeriaBonanza/App'));
const PizzeriaGeminisApp = lazy(() => import('./proyectos/PizzeriaGeminis/App'));
const BrancaBurgersApp = lazy(() => import('./proyectos/BrancaBurgers/App'));
const BuenasBurgasApp = lazy(() => import('./proyectos/BuenasBurgas/App'));
const BebidasGlewApp = lazy(() => import('./proyectos/bebidasglew/App'));

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
      <Route path="/gopedidos/crunchyburger/*" element={
        <Suspense fallback={<div>Cargando Crunchy Burger...</div>}>
          <CrunchyBurgerApp />
        </Suspense>
      } />
      <Route path="/gopedidos/capyburgers/*" element={
        <Suspense fallback={<div>Cargando CapyBurgers...</div>}>
          <CapyBurgersApp />
        </Suspense>
      } />
      {/* Route for Pizzeria Client App */}
      <Route path="/gopedidos/pizzeria-el-maestro/*" element={
        <Suspense fallback={<div>Cargando Pizzería El Maestro...</div>}>
          <PizzeriaElMaestroApp />
        </Suspense>
      } />
      <Route path="/gopedidos/pizzeria-bonanza/*" element={
        <Suspense fallback={<div>Cargando Pizzería Bonanza...</div>}>
          <PizzeriaBonanzaApp />
        </Suspense>
      } />
      <Route path="/gopedidos/pizzeria-geminis/*" element={
        <Suspense fallback={<div>Cargando Pizzería Geminis...</div>}>
          <PizzeriaGeminisApp />
        </Suspense>
      } />
      <Route path="/gopedidos/brancaburgers/*" element={
        <Suspense fallback={<div>Cargando BrancaBurgers...</div>}>
          <BrancaBurgersApp />
        </Suspense>
      } />
      <Route path="/gopedidos/buenasburgas/*" element={
        <Suspense fallback={<div>Cargando Buenas Burgas...</div>}>
          <BuenasBurgasApp />
        </Suspense>
      } />
      <Route path="/gopedidos/bebidasglew/*" element={
        <Suspense fallback={<div>Cargando Bebidas Glew...</div>}>
          <BebidasGlewApp />
        </Suspense>
      } />
    </Routes>
  );
}

export default App;
