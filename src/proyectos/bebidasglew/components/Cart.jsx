export default function Cart({ cart, total, onRemove, onChangeQty, onEdit }) {
  return (
    <div className="card mb-4">
      <div className="card-header bg-dark text-white">Mi pedido</div>
      <div className="card-body">
        {cart.length === 0 ? (
          <p className="text-muted mb-0">
            Todavía no agregaste productos 🥤
          </p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cart.map((item) => (
                <li
                  key={item.uuid}
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.name}</div>
                    <small className="text-muted d-block">
                      ${item.price}
                    </small>
                    {item.variant && (
                      <small className="d-block fw-bold" style={{ color: "#da00ff" }}>
                        Sabor: {item.variant}
                      </small>
                    )}

                    {/* Exclusiones (Ingredientes quitados) */}
                    {item.exclusions && item.exclusions.length > 0 && (
                      <div className="text-danger small mt-1">
                        {item.exclusions.map((ex, i) => (
                          <div key={i}>🚫 Sin {ex}</div>
                        ))}
                      </div>
                    )}

                    {/* Renderizamos los extras si existen */}
                    {item.extras && item.extras.length > 0 && (
                      <ul className="list-unstyled mt-1 mb-0 ms-2 border-start ps-2">
                        {item.extras.map((extra, idx) => (
                          <li key={idx} className="small text-secondary">
                            + {extra.name} (${extra.price})
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="d-flex align-items-center">

                    {/* Botón EDITAR (Para todos los items) */}
                    <button
                      className="btn btn-sm btn-outline-warning me-2"
                      onClick={() => onEdit && onEdit(item)}
                      title="Editar ingredientes"
                    >
                      ✏️
                    </button>

                    {/* Cantidad siempre visible, pero sin botones +/- para simplificar la personalización única */}
                    {item.qty > 1 && <span className="badge bg-secondary rounded-pill me-2">{item.qty}</span>}

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => onRemove(item.uuid)}
                      aria-label="Eliminar"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between">
              <span className="fw-bold">Total</span>
              <span className="fw-bold">${total}</span>
            </div>
          </>
        )}
      </div>
    </div >
  );
}
