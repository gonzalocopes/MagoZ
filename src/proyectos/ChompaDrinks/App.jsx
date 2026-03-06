// src/App.jsx
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import WhatsAppButton from "./components/WhatsAppButton";
import UpsellModal from "./components/UpsellModal";
import GameSlotMachine from "./components/GameSlotMachine";
// 👉 Usamos solo extras para el upsell
import { extras } from "./data/products";

import { clientConfig } from "./config/clientConfig";

function App() {
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    address2: "",
    phone: "",
    deliveryMethod: "Delivery",
    paymentMethod: "Transferencia",
    comments: "",
  });


  const [showUpsell, setShowUpsell] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [lastProduct, setLastProduct] = useState(null);

  // ⬇️ Ahora las sugerencias del modal son los extras
  const upsellItems = extras;

  // 🔔 Horario
  useEffect(() => {
    if (!clientConfig.horario?.enabled) return;

    const checkClosed = () => {
      const now = new Date();
      const [openH, openM] = clientConfig.horario.apertura
        .split(":")
        .map(Number);
      const [closeH, closeM] = clientConfig.horario.cierre
        .split(":")
        .map(Number);

      const minutesNow = now.getHours() * 60 + now.getMinutes();
      const minutesOpen = openH * 60 + openM;
      const minutesClose = closeH * 60 + closeM;

      let closedNow;

      if (minutesClose > minutesOpen) {
        closedNow =
          minutesNow < minutesOpen || minutesNow >= minutesClose;
      } else {
        closedNow =
          minutesNow < minutesOpen && minutesNow >= minutesClose;
      }

      setIsClosed(closedNow);
    };

    checkClosed();
    const id = setInterval(checkClosed, 60000);
    return () => clearInterval(id);
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // ... (rest of addToCart, etc)

  // ... syncExtrasItem ...

  const subtotal = cart.reduce((sum, item) => {
    const itemTotal = item.price * item.qty;
    const extrasTotal = (item.extras || []).reduce((acc, ext) => acc + ext.price, 0);
    return sum + (itemTotal + extrasTotal * item.qty);
  }, 0);

  const total = subtotal;

  const addToCart = (product, { fromUpsell = false } = {}) => {
    if (isClosed && clientConfig.horario?.enabled) {
      alert(
        clientConfig.horario.mensajeCerrado ||
        "En este momento el local está cerrado."
      );
      return;
    }

    // Generamos un ID único para CADA ítem que se agrega, 
    // así podemos asignarle extras específicos a esa instancia.
    const uniqueId = crypto.randomUUID();
    const defaultVariant = null; // No default flavor, user must choose
    const newItem = { ...product, uuid: uniqueId, qty: 1, extras: [], variant: defaultVariant };

    setCart((prev) => {
      // 1. Agrupamos por ID para categorías que no requieren configuración extra
      if (["Latas", "Latones", "Comida", "Tragos", "Combos"].includes(product.category)) {
        const existingIndex = prev.findIndex((item) => item.id === product.id);
        if (existingIndex >= 0) {
          // Ya existe, aumentamos cantidad
          const newCart = [...prev];
          newCart[existingIndex] = {
            ...newCart[existingIndex],
            qty: newCart[existingIndex].qty + 1
          };
          return newCart;
        }
        // Si no existe, lo agregamos normal
        return [...prev, newItem];
      }

      // 2. Si es otra cosa, comportamiento habitual (items separados)
      return [...prev, newItem];
    });

    const mainCategories = [
      "Combos",
    ];

    const shouldOpenUpsell =
      !fromUpsell &&
      (mainCategories.includes(product.category) || product.upsell === true);

    if (shouldOpenUpsell) {
      setLastProduct(newItem); // Guardamos la instancia con UUID
      setShowUpsell(true);
    }
  };

  const addExtraToItem = (parentUuid, extraProduct) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.uuid === parentUuid) {
          // Agregamos el extra al array de extras de ESTE ítem
          return { ...item, extras: [...(item.extras || []), extraProduct] };
        }
        return item;
      })
    );
  };

  const removeFromCart = (uuid) => {
    setCart((prev) => prev.filter((item) => item.uuid !== uuid));
  };

  // Cambio de cantidad: para ítems únicos, esto es raro (qty siempre 1).
  // Si permitimos subir qty, duplicamos los extras? 
  // Para simplificar: Qty será 1 por ítem único de comida.
  // Bebidas podrían tener qty, pero si usas el mismo botón "Agregar", crea otra línea.
  // Vamos a mantener la fn pero sabiendo que visualmente quizás eliminemos el selector de qty para burgers.
  const changeQty = (uuid, newQty) => {
    if (newQty <= 0) return;
    setCart((prev) =>
      prev.map((item) =>
        item.uuid === uuid ? { ...item, qty: newQty } : item
      )
    );
  };

  // Reemplaza los extras de un ítem por una nueva lista (para el manejo de cantidades en el modal)
  const syncExtrasItem = (uuid, newExtras) => {
    setCart((prev) =>
      prev.map((item) =>
        item.uuid === uuid ? { ...item, extras: newExtras } : item
      )
    );
  };



  // Permite actualizar propiedades de un ítem (ej: exclusiones)
  const updateCartItem = (uuid, changes) => {
    setCart((prev) =>
      prev.map((item) => (item.uuid === uuid ? { ...item, ...changes } : item))
    );

    // 🔥 ACTUALIZAR TAMBIÉN lastProduct para que el Modal refleje los cambios en tiempo real
    if (lastProduct && lastProduct.uuid === uuid) {
      setLastProduct((prev) => ({ ...prev, ...changes }));
    }
  };

  const handleAddFromUpsell = (product) => {
    if (lastProduct?.uuid) {
      addExtraToItem(lastProduct.uuid, product);
    } else {
      // Fallback
      addToCart(product, { fromUpsell: true });
    }
  };

  const handleEditItem = (item) => {
    setLastProduct(item);
    setShowUpsell(true);
  };

  // 🔔 FORZAR CAMBIO DE FAVICON (Solución "bruta" para ganarle al index.html)
  useEffect(() => {
    // 1. Buscamos el link existente
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      // Si no existe, lo creamos
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    // 2. Lo forzamos al nuevo
    link.href = "/images/chompa_drinks_logo.png";
  }, []);

  return (
    <div className="bg-body-tertiary min-vh-100">
      <Helmet>
        <title>Chompa Drinks | Pedidos Online</title>
        <link rel="icon" type="image/png" href="/images/chompa_drinks_logo.png" sizes="16x16" />
      </Helmet>
      <Navbar cartCount={cartCount} />

      {clientConfig.horario?.enabled && isClosed && (
        <div className="bg-dark text-light text-center py-2">
          <small>{clientConfig.horario.mensajeCerrado}</small>
        </div>
      )}

      <HeroCarousel />

      {/* margen top + algo de espacio por la barra flotante */}
      <main
        className="py-3 py-lg-5"
        id="pedido"
        style={{ marginTop: "0px", paddingBottom: "60px" }}
      >
        <div className="container-fluid px-4 px-lg-5">
          <div className="row">
            {/* Menú */}
            <div className="col-12 col-lg-7 mb-4 mb-lg-0">
              <Menu
                onAddToCart={addToCart}
                isClosed={isClosed}
                cart={cart}
                onChangeQty={changeQty}
                onRemove={removeFromCart}
              />
            </div>

            {/* Carrito + datos + botón verde WhatsApp */}
            <section id="cart" className="col-12 col-lg-5">
              <Cart
                cart={cart}
                total={total}
                subtotal={subtotal}
                onRemove={removeFromCart}
                onChangeQty={changeQty}
                onEdit={handleEditItem}
              />
              <CheckoutForm
                customer={customer}
                onChange={setCustomer}
              />
              <WhatsAppButton
                cart={cart}
                total={total}
                subtotal={subtotal}
                customer={customer}
                isClosed={isClosed}
              />
            </section>
          </div>
        </div>
      </main>

      {/* Footer normal */}
      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <small>
          © {new Date().getFullYear()}{" "}
          Desarrollado por{" "}
          <a
            href="https://magozitsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-info"
          >
            MagoZ IT Solutions
          </a>
        </small>
      </footer>

      {/* 🧱 Separador solo mobile para que la barra roja no tape el footer */}
      <div className="d-md-none" style={{ height: "64px" }} />

      {/* Juego Tragamonedas */}
      {/* <GameSlotMachine /> */}

      {/* Modal de sugerencias */}
      <UpsellModal
        show={showUpsell}
        onClose={() => setShowUpsell(false)}
        upsellItems={upsellItems}
        onAdd={handleAddFromUpsell}
        lastProduct={lastProduct}
        onUpdateItem={updateCartItem}
        onSyncExtras={syncExtrasItem}
      />
    </div>
  );
}

export default App;
