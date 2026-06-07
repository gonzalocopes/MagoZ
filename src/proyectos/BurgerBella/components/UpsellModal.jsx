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
  const [papasIngredients, setPapasIngredients] = useState([]);

  // Detectamos ingredientes cada vez que cambia el producto
  useEffect(() => {
    if (show && lastProduct?.description) {
      // 1. Limpiamos frases que no son ingredientes quitables
      let cleanDesc = lastProduct.description
        .replace(/Incluye papas fritas\.?/i, "")
        .replace(/Incluye Papas c\/ Cheddar y Bacon \+ Coca 355ml\.?/i, "")
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
          if (lower.includes("medallon")) return false;
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

      // Inicializamos las opciones de papas (sólo si el producto las tiene)
      const currentPapasExclusiones = lastProduct.papasExclusiones || [];
      if (lastProduct.papasOpciones?.length > 0) {
        setPapasIngredients(
          lastProduct.papasOpciones.map((op) => ({
            name: op,
            checked: !currentPapasExclusiones.includes(op),
          }))
        );
      } else {
        setPapasIngredients([]);
      }
    }
  }, [show, lastProduct]);

  // Manejo de checkboxes de ingredientes de la burger
  const handleToggleIngredient = (ingName) => {
    const newIngredients = ingredients.map((ing) =>
      ing.name === ingName ? { ...ing, checked: !ing.checked } : ing
    );
    setIngredients(newIngredients);
    const exclusions = newIngredients.filter((ing) => !ing.checked).map((ing) => ing.name);
    if (lastProduct?.uuid && onUpdateItem) {
      onUpdateItem(lastProduct.uuid, { exclusions });
    }
  };

  // Manejo de checkboxes de ingredientes de las papas
  const handleTogglePapasIngredient = (ingName) => {
    const newPapas = papasIngredients.map((ing) =>
      ing.name === ingName ? { ...ing, checked: !ing.checked } : ing
    );
    setPapasIngredients(newPapas);
    const papasExclusiones = newPapas.filter((ing) => !ing.checked).map((ing) => ing.name);
    if (lastProduct?.uuid && onUpdateItem) {
      onUpdateItem(lastProduct.uuid, { papasExclusiones });
    }
  };

  if (!show) return null;

  const productName = lastProduct?.name || "tu pedido";
  const category = lastProduct?.category || "";
  const isHamburguesa = category === "Hamburguesas";
  const isMedianodia = category === "Mediodía";

  const icon = isHamburguesa || isMedianodia ? "🍔" : "🍽️";
  const title = isMedianodia
    ? `Personalizá tu combo Mediodía 🌞`
    : isHamburguesa
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
          <div className="modal-header bg-mundial">
            <h5 className="modal-title text-white fw-bold">{title}</h5>
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

            {/* SECCIÓN: Ingredientes de la burger */}
            {ingredients.length > 0 && (
              <div className="mb-3">
                <h6 className="fw-bold mb-2">Ingredientes de la hamburguesa:</h6>
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

            {/* SECCIÓN: Personalización de papas (solo mediodía) */}
            {papasIngredients.length > 0 && (
              <div className="mb-3">
                <h6 className="fw-bold mb-2">🍟 Tus papas incluyen:</h6>
                <div className="card p-2 bg-light border-0">
                  {papasIngredients.map((ing, idx) => (
                    <div className="form-check" key={idx}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={ing.checked}
                        onChange={() => handleTogglePapasIngredient(ing.name)}
                        id={`papas-${idx}`}
                      />
                      <label
                        className={`form-check-label ${!ing.checked ? "text-decoration-line-through text-danger" : ""
                          }`}
                        htmlFor={`papas-${idx}`}
                      >
                        {ing.name}
                      </label>
                    </div>
                  ))}
                </div>
                <small className="text-muted d-block mt-1">
                  Desmarcá lo que NO quieras en tus papas.
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
                          (isAdded ? "btn-outline-mundial" : "btn-mundial")
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
              className="btn btn-mundial w-100 fw-bold"
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
