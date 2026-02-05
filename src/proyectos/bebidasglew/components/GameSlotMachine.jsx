import { useState, useEffect } from "react";
import "./GameSlotMachine.css";

// Imágenes para los rodillos
const SYMBOLS = [
  "/images/combo_skyy_pro.png",
  "/images/combo_skyy_speed_pro.png",
  "/images/combo_skyy_cepita.png",
  "/images/combo_skyy_monster.png",
  "/images/combo_fernet_pro.png",
  "/images/combo_messi.png",
  "/images/combo_full_previa.png",
  "/images/pack_stella.png",
];

export default function GameSlotMachine() {
  const [isOpen, setIsOpen] = useState(false);
  const [spinsLeft, setSpinsLeft] = useState(15);
  const [reels, setReels] = useState([SYMBOLS[0], SYMBOLS[1], SYMBOLS[2]]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Verificar si ya pasó el tiempo de espera para recargar tiros
    const nextResetStr = localStorage.getItem("slotNextReset");
    if (nextResetStr) {
      const nextReset = parseInt(nextResetStr, 10);
      if (Date.now() > nextReset) {
        // Pasaron 24hs, reiniciar
        setSpinsLeft(15);
        localStorage.setItem("slotSpinsLeft", 15);
        localStorage.removeItem("slotNextReset");
        return;
      }
    }

    // Cargar intentos restantes del localStorage
    const stored = localStorage.getItem("slotSpinsLeft");
    if (stored !== null) {
      setSpinsLeft(parseInt(stored, 10));
    }
  }, []);

  const saveSpins = (newCount) => {
    setSpinsLeft(newCount);
    localStorage.setItem("slotSpinsLeft", newCount);
  };

  const spin = () => {
    if (spinsLeft <= 0 || isSpinning) return;

    setIsSpinning(true);
    setMessage("");

    // Consumir 1 tiro
    const newSpins = spinsLeft - 1;
    saveSpins(newSpins);
    
    // Si se acaban los tiros, seteamos la fecha de desbloqueo (24hs)
    if (newSpins === 0) {
        const resetTime = Date.now() + 24 * 60 * 60 * 1000; // 24 horas
        localStorage.setItem("slotNextReset", resetTime);
    }

    // Duración del giro
    setTimeout(() => {
      // ⚠️ LÓGICA RIGGED: Nunca ganan (nunca 3 iguales)
      // Generamos indices aleatorios
      let r1 = Math.floor(Math.random() * SYMBOLS.length);
      let r2 = Math.floor(Math.random() * SYMBOLS.length);
      let r3 = Math.floor(Math.random() * SYMBOLS.length);

      // Si por azar salen 3 iguales, cambiamos el último forzosamente
      if (r1 === r2 && r2 === r3) {
        r3 = (r3 + 1) % SYMBOLS.length;
      }

      // "Near Miss" (Casi gano): Forzar A-A-B un 40% de las veces para emocionar
      if (Math.random() < 0.4) {
        r2 = r1; // Dos iguales
        // Asegurar que el tercero sea distinto
        while (r3 === r1) {
            r3 = Math.floor(Math.random() * SYMBOLS.length);
        }
      }

      setReels([SYMBOLS[r1], SYMBOLS[r2], SYMBOLS[r3]]);
      setIsSpinning(false);

      if (newSpins === 0) {
        setMessage("¡Se acabaron los tiros! 😢 Probá de nuevo en 24 horas.");
      } else {
        // Mensajes aleatorios según "casi gano"
        if (r1 === r2 || r2 === r3 || r1 === r3) {
          setMessage("¡UUUY! ¡Estuviste RE cerca! 😱");
        } else {
          setMessage("¡Seguí intentando! 🍀");
        }
      }
    }, 2000); // 2 segundos de giro
  };

  if (spinsLeft <= 0 && !isOpen) return null; // Opcional: Ocultar botón si ya no hay tiros (o dejarlo para que vean que perdieron)

  return (
    <>
      {/* Botón Flotante */}
      {!isOpen && spinsLeft > 0 && (
        <button
          onClick={() => setIsOpen(true)}
          className="btn-slot-floating"
        >
          🎰 ¡Probá tu suerte!
          <span className="badge bg-danger ms-1">{spinsLeft}</span>
        </button>
      )}

      {/* Modal / Overlay */}
      {isOpen && (
        <div className="slot-overlay">
          <div className="slot-container">
            <button className="slot-close" onClick={() => setIsOpen(false)}>
              ✖
            </button>
            
            <h2 className="slot-title">🎰 TRAGAMONEDAS 🎰</h2>
            <p className="slot-subtitle">¡Sacá 3 combos iguales y GANÁ ese combo gratis!</p>
            
            <div className={`slot-machine ${isSpinning ? "spinning" : ""}`}>
              <div className="slot-reel">
                <img src={reels[0]} alt="slot" />
              </div>
              <div className="slot-reel">
                <img src={reels[1]} alt="slot" />
              </div>
              <div className="slot-reel">
                <img src={reels[2]} alt="slot" />
              </div>
              
              {/* Línea ganadora visual */}
              <div className="slot-payline"></div>
            </div>

            <div className="slot-controls">
              <p className="slot-status">
                {message || "¡Vamos que sale!"}
              </p>
              
              <button 
                className="btn btn-warning btn-lg w-100 fw-bold shadow-sm"
                onClick={spin}
                disabled={isSpinning || spinsLeft <= 0}
              >
                {isSpinning ? "GIRANDO..." : spinsLeft > 0 ? `¡GIRAR! (${spinsLeft})` : "FIN DEL JUEGO"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
