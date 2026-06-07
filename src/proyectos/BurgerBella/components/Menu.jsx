// src/components/Menu.jsx
import { useState, useRef } from "react";
import { promos, hamburguesas, papas, combos, bebidas, postres, promosMedianodia } from "../data/products";

export default function Menu({ onAddToCart, isClosed }) {
  // Filtrar promos según el día actual
  const currentDay = new Date().getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado

  // Helper para mostrar días
  const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const shortDayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const getAvailabilityInfo = (item) => {
    if (!item.allowedDays) return { isAvailable: true };

    const isAvailable = item.allowedDays.includes(currentDay);
    if (isAvailable) return { isAvailable: true };

    // Construir texto: "Solo Miércoles" o "Solo Lun/Mié"
    const daysStr = item.allowedDays.map(d => item.allowedDays.length > 1 ? shortDayNames[d] : dayNames[d]).join("/");
    return { isAvailable: false, message: `Solo ${daysStr}` };
  };

  // ✅ Detectar si estamos en horario de mediodía (11:00 – 18:00)
  const nowHour = new Date().getHours();
  const isMediodiaTime = nowHour >= 11 && nowHour < 18;

  const categories = [
    { id: "hamburguesas", label: "Hamburguesas 🍔", products: hamburguesas },
    { id: "papas", label: "Papas y Acompañamientos 🍟", products: papas },
    // { id: "combos", label: "Combos y Baldes 🍔🥤", products: combos },
    { id: "promos", label: "Promos 🔥", products: promos },
    ...(promosMedianodia.length > 0
      ? [{ id: "mediodia", label: "Promo Mediodía 🌞", products: promosMedianodia, mediodiaOnly: true }]
      : []),
    { id: "bebidas", label: "Bebidas 🥤", products: bebidas },
    // { id: "postres", label: "Postres 🍰", products: postres },
  ];

  // categoría abierta en MOBILE
  const [openCategory, setOpenCategory] = useState(null);

  // refs para hacer scroll suave a la categoría abierta
  const categoryRefs = useRef({});

  // ref para la barra de categorías (sticky)
  const stripRef = useRef(null);

  const handleToggleCategory = (id) => {
    setOpenCategory((prev) => {
      // si ya está abierta → la cierro, si no → la abro
      const next = prev === id ? null : id;

      // solo hacemos scroll en mobile y si la estamos abriendo
      if (next && typeof window !== "undefined" && window.innerWidth < 768) {
        // esperamos a que funcione la animación CSS de apertura
        setTimeout(() => {
          const el = categoryRefs.current[next];

          if (el) {
            // Altura aproximada del Navbar fijo
            const navbarHeight = 70;
            // Un poco de "aire" extra
            const extraPadding = 15;

            // Offset total solo del navbar y padding (ya no se resta el strip completo)
            const totalOffset = navbarHeight + extraPadding;

            // Posición top del elemento menos el offset arriba
            const topPosition = el.offsetTop - totalOffset;

            window.scrollTo({ top: topPosition, behavior: "smooth" });
          }
        }, 300); // 300ms espera a que el acordeón se despliegue un poco
      }

      return next;
    });
  };

  // 🪄 Animación de volar al carrito
  const triggerFlyAnimation = (e, imgUrl) => {
    // Solo animar si existe el widget mobile (si no está, no animamos)
    const cartWidget = document.getElementById("mobile-cart-widget");
    if (!cartWidget) return;

    // Coordenadas inicio (botón clickeado o el mismo evento)
    const startRect = e.target.getBoundingClientRect();
    const startX = startRect.left + startRect.width / 2;
    const startY = startRect.top + startRect.height / 2;

    // Coordenadas fin (widget carrito mobile)
    const endRect = cartWidget.getBoundingClientRect();
    const endX = endRect.left + endRect.width / 2;
    const endY = endRect.top + endRect.height / 2;

    // Crear elemento volador (clon visual)
    const flyer = document.createElement("img");
    flyer.src = imgUrl;
    flyer.style.position = "fixed";
    flyer.style.left = `${startX}px`;
    flyer.style.top = `${startY}px`;
    flyer.style.width = "50px";
    flyer.style.height = "50px";
    flyer.style.borderRadius = "50%";
    flyer.style.objectFit = "cover";
    flyer.style.zIndex = "9999";
    flyer.style.pointerEvents = "none";
    flyer.style.transition = "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)"; // Efecto "rápido al inicio, suave al final"
    flyer.style.transform = "translate(-50%, -50%) scale(1)";
    flyer.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";

    document.body.appendChild(flyer);

    // Forzar reflow y activar la transición
    requestAnimationFrame(() => {
      flyer.style.left = `${endX}px`;
      flyer.style.top = `${endY}px`;
      flyer.style.transform = "translate(-50%, -50%) scale(0.2)"; // Se achica al llegar
      flyer.style.opacity = "0.7";
    });

    // Limpieza al terminar
    setTimeout(() => {
      if (flyer.parentNode) flyer.parentNode.removeChild(flyer);
    }, 600);
  };

  const renderProductCard = (item, options = {}) => {
    const { isAvailable, message } = getAvailabilityInfo(item);
    const { mediodiaOnly = false } = options;

    // Lógica de disponibilidad horaria mediodía
    const mediodiaBlocked = mediodiaOnly && !isMediodiaTime;

    return (
      <div key={item.id} className="card mb-3 menu-product-card shadow-sm">
        <div className="row g-0 align-items-center">
          {/* FOTO */}
          <div className="col-3">
            <img
              src={item.img}
              alt={item.name}
              className="img-fluid rounded-start"
              style={{
                objectFit: "contain",
                width: "100%",
                height: "80px",
              }}
            />
          </div>

          {/* CONTENIDO */}
          <div className="col-9">
            <div className="card-body py-2 d-flex justify-content-between align-items-start gap-2">
              <div>
                {mediodiaOnly && (
                  <span className="badge-mediodia">
                    {isMediodiaTime ? "🌞 Disponible ahora" : "🕐 Disp. 11-18hs"}
                  </span>
                )}
                <h6 className="card-title mb-1 fw-semibold">{item.name}</h6>
                {item.description && (
                  <p className="card-text mb-1 small text-muted">
                    {item.description}
                  </p>
                )}
                <div className="fw-bold">${item.price.toLocaleString("es-AR")}</div>
              </div>

              <div className="text-end">
                <button
                  className={`btn btn-sm ${mediodiaBlocked
                    ? "btn-secondary"
                    : !isAvailable
                      ? "btn-danger"
                      : "btn-mundial"
                    }`}
                  disabled={isClosed || !isAvailable || mediodiaBlocked}
                  onClick={(e) => {
                    triggerFlyAnimation(e, item.img);
                    onAddToCart(item);
                  }}
                >
                  {isClosed
                    ? "Cerrado"
                    : mediodiaBlocked
                      ? "11-18hs"
                      : !isAvailable
                        ? message
                        : "Agregar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="menu" className="py-4 bg-light">
      <div className="container-fluid px-3 px-lg-4">
        <h2 className="mb-3 text-center user-select-none text-dark">Menú</h2>

        {/* === VISTA MOBILE: ACORDEÓN === */}
        <div className="d-md-none mb-3 menu-category-strip" ref={stripRef}>
          {categories.map((cat) => {
            const isActive = openCategory === cat.id;
            return (
              <div key={cat.id} ref={(el) => (categoryRefs.current[cat.id] = el)} className="mb-2">
                <button
                  type="button"
                  onClick={() => handleToggleCategory(cat.id)}
                  className={`menu-category-pill ${isActive ? "menu-category-pill-active" : ""}`}
                >
                  <span className="flex-grow-1 text-start">
                    <span className="d-block fw-semibold">{cat.label}</span>
                    <small className="text-muted">
                      {cat.products.length} producto
                      {cat.products.length !== 1 ? "s" : ""}
                      {cat.mediodiaOnly && !isMediodiaTime && " · 11-18hs"}
                    </small>
                  </span>
                  <span className="menu-cat-icon">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {/* MOBILE: contenedor con animación, se renderiza JUSTO ABAJO del botón */}
                <div className={`menu-category-collapse ${isActive ? "show mt-3" : ""}`}>
                  {cat.products.map((item) => renderProductCard(item, { mediodiaOnly: !!cat.mediodiaOnly }))}
                </div>
              </div>
            );
          })}
        </div>

        {/* === VISTA DESKTOP: LISTA COMPLETA === */}
        <div className="d-none d-md-block">
          {categories.map((cat) => (
            <div key={cat.id} className="mb-4">
              <div className="d-flex align-items-baseline mb-2">
                <h4 className="me-2 mb-0 text-dark">{cat.label}</h4>
                <small className="text-muted">
                  {cat.products.length} producto
                  {cat.products.length !== 1 ? "s" : ""}
                  {cat.mediodiaOnly && !isMediodiaTime && (
                    <span className="ms-2 badge-mediodia">🕐 Disp. 11-18hs</span>
                  )}
                </small>
              </div>
              <div>
                {cat.products.map((item) => renderProductCard(item, { mediodiaOnly: !!cat.mediodiaOnly }))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
