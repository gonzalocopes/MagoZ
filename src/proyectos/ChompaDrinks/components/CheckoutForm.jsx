import { useState } from "react";

export default function CheckoutForm({ customer, onChange }) {
  const [isCalculating, setIsCalculating] = useState(false);
  const [calcError, setCalcError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updates = { [name]: value };
    // Si cambia a retiro, limpiamos el costo de envío
    if (name === "deliveryMethod" && value === "Retiro personalmente") {
      updates.shippingCost = 0;
    }
    onChange({ ...customer, ...updates });
  };

  const calculateShipping = async () => {
    if (!customer.address) {
      setCalcError("Por favor ingresá tu Dirección y Numeración.");
      return;
    }
    if (!customer.localidad) {
      setCalcError("Por favor ingresá tu Localidad (ej: Bernal, Quilmes).");
      return;
    }
    setIsCalculating(true);
    setCalcError("");

    try {
      // Normalizamos abreviaciones comunes para que Nominatim lo entienda mejor
      const cleanAddress = customer.address
        .toLowerCase()
        .replace(/\bav\.?|\bavenida\b/g, 'Avenida')
        .replace(/\bcalle\b/g, '') // A veces poner "calle" confunde al buscador
        .replace(/\bpje\.?|\bpasaje\b/g, 'Pasaje')
        .replace(/\bbv\.?|\bbulevar\b/g, 'Bulevar')
        .trim();

      // Localidad es obligatoria
      const localidadQuery = customer.localidad.trim();
      const query = encodeURIComponent(`${cleanAddress}, ${localidadQuery}, Buenos Aires, Argentina`);
      const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`);
      const geoData = await geoRes.json();

      if (!geoData || geoData.length === 0) {
        setCalcError("No encontramos la dirección exacta. Asegurate de poner calle y número válidos.");
        setIsCalculating(false);
        return;
      }

      const { lat, lon } = geoData[0];

      // Coordenadas del local (Calle 196 1040, Bernal)
      const localLon = -58.3367623;
      const localLat = -34.7468570;

      const routeRes = await fetch(`https://router.project-osrm.org/route/v1/driving/${localLon},${localLat};${lon},${lat}?overview=false`);
      const routeData = await routeRes.json();

      if (routeData.code !== 'Ok' || !routeData.routes || routeData.routes.length === 0) {
        setCalcError("No se pudo calcular la ruta de envío. ¡Consultanos por WhatsApp!");
        setIsCalculating(false);
        return;
      }

      const distanceMeters = routeData.routes[0].distance;
      // Mínimo $1000, 100m = $100 -> costo = cuadras * 100
      const blocks = Math.ceil(distanceMeters / 100);
      const cost = Math.max(1000, blocks * 100);

      onChange({ ...customer, shippingCost: cost });

    } catch (error) {
      setCalcError("Error al comunicarse con el mapa. ¡Consultanos por WhatsApp!");
    }
    setIsCalculating(false);
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-secondary text-white">
        Tus datos
      </div>

      <div className="card-body">



        {/* 1. Entrega (Primero, para definir qué campos mostrar) */}
        <div className="mb-3">
          <label className="form-label fw-bold">Entrega</label>
          <select
            className="form-select"
            name="deliveryMethod"
            value={customer.deliveryMethod}
            onChange={handleChange}
          >
            <option value="Delivery">Delivery (Envío a domicilio)</option>
            <option value="Retiro personalmente">Retiro personalmente</option>
          </select>
        </div>



        {/* 2. Nombre (Siempre obligatorio) */}
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={customer.name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
          />
        </div>

        {/* 3. Dirección y Entre calles (Solo si es Delivery) */}
        {customer.deliveryMethod === "Delivery" && (
          <>
            <div className="mb-3">
              <label className="form-label">Dirección y Numeración</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={customer.address}
                onChange={handleChange}
                placeholder="Calle y altura"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Localidad</label>
              <input
                type="text"
                className="form-control"
                name="localidad"
                value={customer.localidad || ""}
                onChange={handleChange}
                placeholder="Ej: Bernal, Quilmes, Wilde"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Entre calles</label>
              <input
                type="text"
                className="form-control"
                name="address2"
                value={customer.address2}
                onChange={handleChange}
                placeholder="Ej: Av. San Martín y Belgrano"
              />
            </div>

            {/* Calculador de Envío */}
            <div className="mb-3 p-3 border rounded bg-light">
              <h6 className="fw-bold mb-2">Costo de Envío</h6>
              {customer.shippingCost > 0 ? (
                <div className="d-flex justify-content-between align-items-center mb-0">
                  <span className="text-success fw-bold">
                    Costo calculado: ${customer.shippingCost.toLocaleString("es-AR")}
                  </span>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={calculateShipping}
                    disabled={isCalculating}
                  >
                    {isCalculating ? "Calculando..." : "Recalcular"}
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary w-100"
                    onClick={calculateShipping}
                    disabled={isCalculating}
                  >
                    {isCalculating ? "Calculando..." : "Calcular Envío"}
                  </button>
                  <small className="text-muted d-block mt-1">Escribí tu dirección arriba para poder calcularlo.</small>
                </div>
              )}
              {calcError && <div className="text-danger small mt-2">{calcError}</div>}
            </div>
          </>
        )}

        {/* 4. Teléfono (Siempre visible) */}
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            placeholder="Ej: 11 1234-5678"
          />
        </div>

        {/* 5. Medio de pago (Solo para Delivery) */}
        {customer.deliveryMethod === "Delivery" && (
          <>
            <div className="mb-3">
              <label className="form-label fw-bold">Medio de pago</label>
              <select
                className="form-select"
                name="paymentMethod"
                value={customer.paymentMethod}
                onChange={handleChange}
              >
                <option value="Transferencia">Transferencia</option>
                <option value="Mercado Pago">Mercado Pago</option>
                <option value="Efectivo">Efectivo</option>
              </select>

              {(customer.paymentMethod === "Transferencia" || customer.paymentMethod === "Mercado Pago") && (
                <div className="mt-2 p-2 bg-light border rounded small">
                  <strong>Alias:</strong> Chompa.drinkss <br />
                  <strong>A nombre de:</strong> Walter Joel Ruiz <br />
                  <span className="text-muted fst-italic">Aboná y envianos el comprobante por WhatsApp al confirmar el pedido.</span>
                </div>
              )}
            </div>
          </>
        )}

        {/* 6. Comentarios */}
        <div className="mb-3">
          <label className="form-label">Comentarios (opcional)</label>
          <textarea
            className="form-control"
            name="comments"
            rows="2"
            placeholder="Ej: Botella bien fría, timbre no anda..."
            value={customer.comments}
            onChange={handleChange}
          ></textarea>
        </div>

      </div>
    </div>
  );
}
