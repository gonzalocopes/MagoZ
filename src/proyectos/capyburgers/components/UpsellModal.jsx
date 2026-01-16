// src/components/UpsellModal.jsx
import { useState, useEffect } from "react";

export default function UpsellModal({
  show,
  onClose,
  upsellItems,
  onAdd,
  lastProduct,
  onUpdateItem, // Función para actualizar el producto (exclusions)
}) {
  const [addedIds, setAddedIds] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  // Detectamos ingredientes cada vez que cambia el producto
  useEffect(() => {
    if (show && lastProduct?.description) {
      // 1. Limpiamos la frase de las papas (si existe) y punto final
      let cleanDesc = lastProduct.description
        .replace(/\s*\(?(?:Viene con|Incluye) papas(?: fritas)?\)?\.?/gi, "")
        .replace(/\.$/, ""); // sacar punto final

      // 2. Separamos por comas
      let rawParts = cleanDesc.split(",");

      // 3. Procesamos " y " en cada parte (ej: "Panceta y Cebolla")
      let finalIngredients = [];
      rawParts.forEach((part) => {
        if (part.includes(" y ")) {
          const subParts = part.split(" y ");
          finalIngredients.push(...subParts);
        } else {
          finalIngredients.push(part);
        }
      });

      // 4. Limpieza final de espacios y capitalización
      finalIngredients = finalIngredients
        .map((i) => i.trim())
        .map((i) => i.trim())
        .filter((i) => {
          if (i.length === 0) return false;
          const lower = i.toLowerCase();
          // Excluir Pan y Medallones (la carne no suele quitarse así nomás)
          if (lower.includes("pan de papa")) return false;
          if (lower.includes("medallón")) return false;
          if (lower.includes("doble medallón")) return false;
          if (lower.includes("triple medallón")) return false;
          return true;
        });

      // Mapeamos a objetos con estado "checked" (inicialmente true)
      // Usamos el nombre original, pero chequeamos si ya estaba excluido en lastProduct.exclusions
      const currentExclusions = lastProduct.exclusions || [];

      setIngredients(
        finalIngredients.map((ing) => ({
          name: ing,
          checked: !currentExclusions.includes(ing),
        }))
      );

      setAddedIds([]); // Reseteamos extras agregados
    }
  }, [show, lastProduct]);

  // Manejo de checkboxes de ingredientes
  const handleToggleIngredient = (ingName) => {
    const newIngredients = ingredients.map((ing) =>
      ing.name === ingName ? { ...ing, checked: !ing.checked } : ing
    );
    setIngredients(newIngredients);

    // Calculamos la lista de EXCLUSIONES (los unchecked)
    const exclusions = newIngredients
      .filter((ing) => !ing.checked)
      .map((ing) => ing.name);

    // Actualizamos el producto padre en el carrito
    if (lastProduct?.uuid && onUpdateItem) {
      onUpdateItem(lastProduct.uuid, { exclusions });
    }
  };

  if (!show) return null;

  const productName = lastProduct?.name || "tu pedido";
  const category = lastProduct?.category || "";
  const isHamburguesa = category === "Hamburguesas";

  const icon = isHamburguesa ? "🍔" : "🍽️";
  const title = isHamburguesa
    ? `Personalizá tu Hamburguesa ${icon}`
    : `¿Le sumamos algo a tu pedido? ${icon}`;

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
          <div className="modal-header bg-warning">
            <h5 className="modal-title text-dark fw-bold">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Cerrar"
            ></button>
          </div>

          {/* BODY */}
          <div className="modal-body upsell-scroll-area">
            <p className="small text-muted mb-3">
              Estás armando <strong>{productName}</strong>.
            </p>

            {/* SECCIÓN DE INGREDIENTES (Solo si hay detectados) */}
            {ingredients.length > 0 && (
              <div className="mb-4">
                <h6 className="fw-bold mb-2">Ingredientes:</h6>
                <div className="card p-2 bg-light border-0">
                  {ingredients.map((ing, idx) => (
                    <div className="form-check" key={idx}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={ing.checked}
                        onChange={() => handleToggleIngredient(ing.name)}
                        id={`ing-${idx}`}
                      />
                      <label
                        className={`form-check-label ${!ing.checked ? "text-decoration-line-through text-danger" : ""
                          }`}
                        htmlFor={`ing-${idx}`}
                      >
                        {ing.name}
                      </label>
                    </div>
                  ))}
                </div>
                <small className="text-muted d-block mt-1">
                  Desmarcá lo que NO quieras incluír.
                </small>
              </div>
            )}

            <hr />

            <h6 className="fw-bold mb-2">¿Querés agregar algo más?</h6>
            {itemsToShow.length === 0 ? (
              <p>No hay extras disponibles.</p>
            ) : (
              <ul className="list-group">
                {itemsToShow.map((item) => {
                  const isAdded = addedIds.includes(item.id);

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
                      <button
                        className={
                          "btn btn-sm " +
                          (isAdded ? "btn-outline-success" : "btn-success")
                        }
                        disabled={isAdded}
                        onClick={() => {
                          if (!isAdded) {
                            onAdd(item);
                            setAddedIds((prev) => [...prev, item.id]);
                          }
                        }}
                      >
                        {isAdded ? "Agregado ✓" : "Agregar"}
                      </button>
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
              className="btn btn-warning w-100 fw-bold"
              onClick={onClose}
            >
              Confirmar y Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
