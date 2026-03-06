import { clientConfig } from "../config/clientConfig";

export default function WhatsAppButton({ cart, total, subtotal, customer, isClosed }) {
  const buildMessage = () => {
    const lines = [];

    lines.push("🥤 Nuevo pedido:");
    lines.push("");
    lines.push("🥤 Detalle del pedido:");

    // Productos con sus extras anidados
    cart.forEach((item) => {
      // Linea principal del producto (en negrita)
      // Si qty > 1, lo mostramos (aunque con IDs únicos será mayormente 1)
      const qtyStr = item.qty > 1 ? `${item.qty}x ` : "";
      lines.push(`*• ${qtyStr}${item.name}* ($${item.price})`);
      if (item.variant) {
        lines.push(`   > Sabor: ${item.variant}`);
      }

      // Extras del producto
      if (item.extras && item.extras.length > 0) {
        item.extras.forEach((extra) => {
          lines.push(`   + ${extra.name} ($${extra.price})`);
        });
      }

      // Exclusiones (Ingredientes quitados)
      if (item.exclusions && item.exclusions.length > 0) {
        item.exclusions.forEach((ex) => {
          lines.push(`   - SIN ${ex}`);
        });
      }
    });

    lines.push("");
    lines.push(`Subtotal: $${subtotal || total}`);
    lines.push(`💰 Total: $${total}`);
    lines.push("");
    lines.push("👤 Datos del cliente:");
    lines.push(`Nombre: ${customer.name || "-"}`);
    lines.push(`Dirección Y Numeracion: ${customer.address || "-"}`);
    lines.push(`Entre calles: ${customer.address2 || "-"}`);
    lines.push(`Teléfono: ${customer.phone || "-"}`);
    lines.push(`Entrega: ${customer.deliveryMethod || "-"}`);

    if (customer.deliveryMethod === "Delivery") {
      lines.push(`Pago: ${customer.paymentMethod || "-"}`);
      if (customer.paymentMethod === "Efectivo" && customer.payWith) {
        lines.push(`Abona con: ${customer.payWith}`);
      }
    }

    if (customer.comments) {
      lines.push("");
      lines.push("📝 Comentarios:");
      lines.push(customer.comments);
    }

    return lines.join("\n");
  };

  // 👉 Botón VERDE: envía el pedido por WhatsApp
  const handleClickDesktop = () => {
    if (isClosed && clientConfig.horario?.enabled) {
      alert(
        clientConfig.horario.mensajeCerrado ||
        "En este momento el local está cerrado."
      );
      return;
    }

    if (!cart || cart.length === 0) {
      alert("Agregá al menos un producto al pedido 🙂");
      return;
    }

    // --- VALIDACIÓN DE CAMPOS ---
    if (!customer?.name) {
      alert("Por favor completá tu nombre.");
      return;
    }

    if (!customer?.phone) {
      alert("Por favor completá tu teléfono de contacto.");
      return;
    }

    const isDelivery = customer.deliveryMethod === "Delivery";

    if (isDelivery) {
      if (!customer.address) {
        alert("Para Delivery, es necesario completar la Dirección.");
        return;
      }
      if (!customer.address2) {
        // El usuario pidió explícitamente validar "entre calles"
        alert("Para Delivery, por favor indicá las Entre calles.");
        return;
      }
    }

    // Si es retiro, no validamos dirección
    // ----------------------------

    const phoneRaw = clientConfig.whatsapp || "+5491162123307";
    const phone = phoneRaw.replace(/[^\d]/g, "");

    const text = encodeURIComponent(buildMessage());
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
  };

  // 👉 Barra roja (mobile/tablet): solo hace scroll a “Mi pedido” o al menú
  const handleClickMobile = () => {
    if (isClosed && clientConfig.horario?.enabled) return;

    if (!cart || cart.length === 0) {
      const menu = document.getElementById("menu");
      if (menu) {
        menu.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    const cartSection = document.getElementById("cart");
    if (cartSection) {
      cartSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {/* Botón verde: visible en todas las vistas (no fijo) */}
      <button
        className="btn btn-success w-100 btn-lg mb-3"
        onClick={handleClickDesktop}
        disabled={isClosed}
      >
        {isClosed ? "Local cerrado" : "Enviar pedido por WhatsApp"}
      </button>

      {/* Barra fija inferior: mobile + tablet (se oculta en desktop por CSS) */}
      <button
        id="mobile-cart-widget"
        type="button"
        onClick={handleClickMobile}
        disabled={isClosed}
        className="floating-wpp border-0"
      >
        <span className="floating-wpp-label">
          {itemCount === 0 ? "Ver menú" : "Ver mi pedido"}
        </span>
        <span className="floating-wpp-chip">
          <span role="img" aria-label="carrito">
            🛒
          </span>
          <span>
            {itemCount} · ${total}
          </span>
        </span>
      </button>
    </>
  );
}
