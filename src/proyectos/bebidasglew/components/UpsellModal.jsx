// src/components/UpsellModal.jsx
import { useState, useEffect } from "react";

export default function UpsellModal({
  show,
  onClose,
  upsellItems,
  onAdd,
  lastProduct,
  onUpdateItem,
  onSyncExtras,
}) {
  const [addedIds, setAddedIds] = useState([]);
  // Local state for counts: { [extraId]: quantity }
  const [extraCounts, setExtraCounts] = useState({});

  // Detectamos ingredientes cada vez que cambia el producto
  useEffect(() => {
    if (show && lastProduct?.description) {
      // Initialize extra counts based on what's already in the product
      const currentExtras = lastProduct.extras || [];
      const counts = {};
      currentExtras.forEach(ext => {
        counts[ext.id] = (counts[ext.id] || 0) + 1;
      });
      setExtraCounts(counts);
    }
  }, [show, lastProduct]);

  const handleUpdateExtraQty = (extraItem, change) => {
    setExtraCounts(prev => {
      const currentQty = prev[extraItem.id] || 0;
      const newQty = Math.max(0, currentQty + change);

      const nextCounts = { ...prev, [extraItem.id]: newQty };

      // Sync with parent immediately
      if (lastProduct?.uuid && onSyncExtras) {
        // Reconstruct array of extras based on counts
        const newExtrasList = [];
        Object.entries(nextCounts).forEach(([id, qty]) => {
          // Find the original item object
          const itemObj = upsellItems.find(u => u.id === id);
          if (itemObj) {
            for (let i = 0; i < qty; i++) {
              newExtrasList.push(itemObj);
            }
          }
        });
        onSyncExtras(lastProduct.uuid, newExtrasList);
      }
      return nextCounts;
    });
  };

  if (!show) return null;

  const productName = lastProduct?.name || "tu pedido";

  // Icono modificado a bebidas
  const icon = "🥤";
  const title = `¿Le sumamos algo a tu pedido? ${icon}`;

  const itemsToShow = upsellItems || [];

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* HEADER */}
          <div
            className="modal-header"
            style={{
              background: "linear-gradient(135deg, #da00ff, #9d00ff)",
              borderBottom: "none",
            }}
          >
            <h5 className="modal-title text-white fw-bold">{title}</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Cerrar"
            ></button>
          </div>

          {/* BODY */}
          <div className="modal-body upsell-scroll-area">
            <p className="small text-muted mb-3">
              Estás armando <strong>{productName}</strong>.
            </p>

            {/* SECCIÓN DE INGREDIENTES ELIMINADA */}

            <h6 className="fw-bold mb-2">¿Querés agregar algo más? Bebidas</h6>
            {itemsToShow.length === 0 ? (
              <p>No hay extras disponibles.</p>
            ) : (
              <ul className="list-group">
                {itemsToShow.map((item) => {
                  const qty = extraCounts[item.id] || 0;

                  return (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <div className="fw-semibold">{item.name}</div>
                        <small className="text-muted">
                          +${item.price.toLocaleString("es-AR")}
                        </small>
                      </div>

                      {/* Control de Cantidad (+ / -) */}
                      <div className="d-flex align-items-center gap-2">
                        {qty > 0 && (
                          <>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleUpdateExtraQty(item, -1)}
                              style={{ width: "30px", padding: "0" }}
                            >
                              -
                            </button>
                            <span className="fw-bold">{qty}</span>
                          </>
                        )}
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => handleUpdateExtraQty(item, 1)}
                          style={{ width: "30px", padding: "0" }}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* FOOTER */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn w-100 fw-bold text-white"
              onClick={onClose}
              style={{
                background: "linear-gradient(135deg, #da00ff, #9d00ff)",
                border: "none",
                boxShadow: "0 4px 15px rgba(218, 0, 255, 0.4)",
              }}
            >
              Confirmar y Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
