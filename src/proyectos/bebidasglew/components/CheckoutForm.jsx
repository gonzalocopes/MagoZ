import { useState } from "react";
import { coupons } from "../data/coupons";

export default function CheckoutForm({ customer, onChange, shippingCost, setDiscount, setCouponName, currentDiscount }) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...customer, [name]: value });
  };

  const applyCoupon = () => {
    setMessage(null);
    const found = coupons.find((c) => c.code.toUpperCase() === code.toUpperCase().trim());

    if (!found) {
      setMessage({ type: "error", text: "Código no encontrado" });
      setDiscount(0);
      setCouponName("");
      return;
    }

    const now = new Date();
    const expires = new Date(found.expires);

    if (now > expires) {
      setMessage({ type: "error", text: "Este código ya venció" });
      setDiscount(0);
      setCouponName("");
      return;
    }

    setDiscount(found.discount);
    setCouponName(found.code);
    setMessage({ type: "success", text: `¡Descuento de ${found.discount * 100}% aplicado!` });
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-secondary text-white">
        Tus datos
      </div>

      <div className="card-body">

        {/* 0. Cupón de descuento */}
        <div className="mb-4 p-3 bg-light rounded border">
          <label className="form-label fw-bold">¿Tenés un cupón?</label>
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Ingresá tu código"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              disabled={currentDiscount > 0}
            />
            <button
              className="btn btn-dark"
              type="button"
              onClick={applyCoupon}
              disabled={currentDiscount > 0}
            >
              Aplicar
            </button>
          </div>
          {currentDiscount > 0 && <div className="form-text text-success mb-2">Cupón aplicado. Para cambiarlo, recarga la página.</div>}
          {message && (
            <div className={`alert py-1 px-2 mb-0 alert-${message.type === "error" ? "danger" : "success"}`}>
              {message.text}
            </div>
          )}
        </div>

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

        {/* 1.1 Zona de envío (Solo para Delivery) */}
        {customer.deliveryMethod === "Delivery" && (
          <div className="mb-3">
            <label className="form-label fw-bold">Zona de envío</label>
            <select
              className="form-select"
              name="deliveryZone"
              value={customer.deliveryZone}
              onChange={handleChange}
            >
              <option value="Glew">Glew ($2000)</option>
              <option value="Guernica">Guernica ($2500)</option>
              <option value="Longchamps">Longchamps ($2500)</option>
            </select>
            <div className="form-text text-success">
              {shippingCost === 0
                ? "¡Envío GRATIS por superar los $40.000!"
                : `Costo de envío: $${shippingCost}`}
            </div>
          </div>
        )}

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
              </select>

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
