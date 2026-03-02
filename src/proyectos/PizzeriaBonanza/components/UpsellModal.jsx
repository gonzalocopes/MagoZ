// src/components/UpsellModal.jsx
import { useEffect, useMemo, useState } from "react";

export default function UpsellModal({
  show,
  onClose,
  mode = "extras", // "extras" | "mitad" | "pack" | "mitadSabores"
  lastProduct,
  upsellItems = [],
  empanadaFlavors = [],
  requiredCount = 0,
  onToggleExtra,
  activeLine, // la pizza actual del carrito (con extras)
  onConfirmEmpanadaPack,
  mitadFlavors = [],     // 👈 todas las pizzas disponibles para mitad y mitad
  onConfirmMitad,        // 👈 callback(mitad1, mitad2)
}) {
  // packs empanadas
  const [counts, setCounts] = useState({});

  // mitad y mitad
  const [mitadStep, setMitadStep] = useState(1); // 1 = primera mitad, 2 = segunda mitad
  const [mitad1, setMitad1] = useState(null);
  const [mitad2, setMitad2] = useState(null);

  useEffect(() => {
    if (show) setCounts({});
  }, [show, mode]);

  // Resetear mitad al abrir el modal en modo mitadSabores
  useEffect(() => {
    if (show && mode === "mitadSabores") {
      setMitadStep(1);
      setMitad1(null);
      setMitad2(null);
    }
  }, [show, mode]);

  const totalSelected = useMemo(
    () => Object.values(counts).reduce((a, b) => a + (b || 0), 0),
    [counts]
  );

  const inc = (id) => {
    if (totalSelected >= requiredCount) return;
    setCounts((p) => ({ ...p, [id]: (p[id] || 0) + 1 }));
  };

  const dec = (id) => {
    setCounts((p) => ({
      ...p,
      [id]: Math.max((p[id] || 0) - 1, 0),
    }));
  };

  if (!show) return null;

  const selectedExtras = new Set((activeLine?.extras || []).map((e) => e.id));

  // =====================
  // MODO: MITAD Y MITAD
  // =====================
  if (mode === "mitadSabores") {
    const currentStep = mitadStep;
    const flavorsToShow = mitadFlavors.filter((p) => p.id !== "pizza-mitad");

    const handlePickMitad = (pizza) => {
      if (currentStep === 1) {
        setMitad1(pizza);
        setMitadStep(2);
      } else {
        setMitad2(pizza);
      }
    };

    const handleConfirm = () => {
      if (mitad1 && mitad2) {
        onConfirmMitad(mitad1, mitad2);
      }
    };

    return (
      <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,.6)" }}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">

            <div className="modal-header">
              <div>
                <h5 className="modal-title mb-0">
                  {currentStep === 1 ? "🍕 Primera Mitad" : "🍕 Segunda Mitad"}
                </h5>
                <small className="text-muted">
                  {currentStep === 1
                    ? "¿Qué pizza querés para la primera mitad?"
                    : `Primera: ${mitad1?.name} · ¿Y la segunda?`}
                </small>
              </div>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            {/* Indicador de pasos */}
            <div className="d-flex border-bottom">
              <div
                className={`flex-fill text-center py-2 small fw-semibold ${currentStep === 1 ? "bg-dark text-white" : "bg-success text-white"}`}
              >
                {currentStep === 1 ? "Paso 1" : `✓ ${mitad1?.name}`}
              </div>
              <div
                className={`flex-fill text-center py-2 small fw-semibold ${currentStep === 2 ? "bg-dark text-white" : "text-muted"}`}
              >
                {currentStep === 2 && mitad2 ? `✓ ${mitad2?.name}` : "Paso 2"}
              </div>
            </div>

            <div className="modal-body">
              {flavorsToShow.map((pizza) => {
                const isSelected =
                  (currentStep === 1 && mitad1?.id === pizza.id) ||
                  (currentStep === 2 && mitad2?.id === pizza.id);

                return (
                  <button
                    key={pizza.id}
                    type="button"
                    onClick={() => handlePickMitad(pizza)}
                    className={`w-100 d-flex justify-content-between align-items-center border rounded p-2 mb-2 ${
                      isSelected ? "btn btn-success" : "btn btn-outline-secondary"
                    }`}
                  >
                    <div className="text-start">
                      <strong>{pizza.name}</strong>
                      <div className="small text-muted">{pizza.description}</div>
                    </div>
                    <div className="fw-bold ms-2 text-nowrap">
                      {isSelected ? "✓" : `$${pizza.price.toLocaleString()}`}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="modal-footer flex-column gap-2">
              {currentStep === 2 && (
                <>
                  <button
                    className="btn btn-outline-secondary w-100 btn-sm"
                    onClick={() => { setMitadStep(1); setMitad2(null); }}
                  >
                    ← Cambiar primera mitad
                  </button>
                  <button
                    className={`btn w-100 ${mitad1 && mitad2 ? "btn-success" : "btn-secondary"}`}
                    disabled={!mitad1 || !mitad2}
                    onClick={handleConfirm}
                  >
                    {mitad1 && mitad2
                      ? `Confirmar: ½ ${mitad1.name} + ½ ${mitad2.name}`
                      : "Elegí la segunda mitad"}
                  </button>
                </>
              )}
              {currentStep === 1 && (
                <p className="text-muted small mb-0 text-center">
                  Seleccioná el gusto para la primera mitad
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    );
  }

  // =====================
  // MODO: PACK EMPANADAS
  // =====================
  return (
    <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,.6)" }}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              {mode === "pack" ? `Elegí ${requiredCount} empanadas` : "Extras / Preparación"}
            </h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">

            {/* PACK EMPANADAS */}
            {mode === "pack" && (
              <>
                <p className="fw-semibold mb-1">{lastProduct?.name}</p>
                <small className="text-muted">
                  Seleccionadas: {totalSelected}/{requiredCount}
                </small>

                <div className="mt-3">
                  {empanadaFlavors.map((e) => {
                    const qty = counts[e.id] || 0;
                    return (
                      <div
                        key={e.id}
                        className="d-flex justify-content-between align-items-center border rounded p-2 mb-2"
                      >
                        <div>
                          <strong>{e.name}</strong>
                          <div className="text-muted small">{e.description}</div>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => dec(e.id)}
                            disabled={qty === 0}
                          >
                            −
                          </button>
                          <span className="fw-bold">{qty}</span>
                          <button
                            className="btn btn-outline-success btn-sm"
                            onClick={() => inc(e.id)}
                            disabled={totalSelected >= requiredCount}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* EXTRAS */}
            {mode !== "pack" && (
              <>
                <p className="fw-semibold mb-2">Para: {lastProduct?.name}</p>

                {upsellItems.map((item) => {
                  const isSelected = selectedExtras.has(item.id);

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onToggleExtra(item)}
                      className={`w-100 d-flex justify-content-between align-items-center border rounded p-2 mb-2 ${
                        isSelected ? "btn btn-success" : "btn btn-outline-secondary"
                      }`}
                    >
                      <div className="text-start">
                        <strong>{item.name}</strong>
                        {item.price > 0 && (
                          <div className="small">+ ${item.price}</div>
                        )}
                      </div>

                      <div className="fw-bold">
                        {isSelected ? "✓ Seleccionado" : "Seleccionar"}
                      </div>
                    </button>
                  );
                })}
              </>
            )}
          </div>

          <div className="modal-footer">
            {mode === "pack" ? (
              <button
                className="btn btn-success w-100"
                disabled={totalSelected !== requiredCount}
                onClick={() => onConfirmEmpanadaPack(counts)}
              >
                Confirmar
              </button>
            ) : (
              (() => {
                const PREP_IDS = ["al-molde", "ala-piedra", "al-molde-mitad", "ala-piedra-mitad"];
                const hasPrep = PREP_IDS.some((id) => selectedExtras.has(id));

                return (
                  <button
                    className={`btn w-100 ${hasPrep ? "btn-success" : "btn-secondary"}`}
                    onClick={onClose}
                    disabled={!hasPrep}
                  >
                    {hasPrep ? "Listo" : "Seleccioná: Al Molde o A la Piedra"}
                  </button>
                );
              })()
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
