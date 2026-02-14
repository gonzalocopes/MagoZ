// src/components/HeroCarousel.jsx
import { clientConfig } from "../config/clientConfig";

export default function HeroCarousel() {
  const { hero, nombre } = clientConfig;

  // Imagen de fondo: si no hay en config, usamos la de Pexels
  const imageSrc =
    hero?.fondo ||
    "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg";

  // Textos con fallback: si no hay en config, usamos los que ya tenías
  const slide1Title = hero?.slides?.[0]?.titulo || `${nombre} 🍕`;
  const slide1Subtitle =
    hero?.slides?.[0]?.subtitulo ||
    "Pedí tus pizzas favoritas y mandá el pedido por WhatsApp.";

  const slide2Title = hero?.slides?.[1]?.titulo || "Horno a la piedra";
  const slide2Subtitle =
    hero?.slides?.[1]?.subtitulo ||
    "Masa casera, ingredientes frescos, sabor brutal.";

  const slide3Title = hero?.slides?.[2]?.titulo || "Promos todos los días";
  const slide3Subtitle =
    hero?.slides?.[2]?.subtitulo ||
    "2x1, combos individuales, familiares y mucho más.";

  return (
    <section id="hero" className="bg-dark">
      <div className="container-fluid px-0">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active" style={{ backgroundColor: "#000" }}>
              <img
                src={imageSrc}
                className="d-block w-100"
                alt="Slide 1"
                style={{ maxHeight: "520px", objectFit: "cover", opacity: 0.6 }}
              />
              <div className="carousel-caption d-block">
                <div className="hero-caption-glass">
                  <h2 className="hero-title">{slide1Title}</h2>
                  <p className="hero-subtitle">{slide1Subtitle}</p>
                  <p className="hero-description">{hero?.slides?.[0]?.descripcion || ""}</p>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item" style={{ backgroundColor: "#000" }}>
              <img
                src={imageSrc}
                className="d-block w-100"
                alt="Slide 2"
                style={{ maxHeight: "520px", objectFit: "cover", opacity: 0.6 }}
              />
              <div className="carousel-caption d-block">
                <div className="hero-caption-glass">
                  <h2 className="hero-title">{slide2Title}</h2>
                  <p className="hero-subtitle">{slide2Subtitle}</p>
                  <p className="hero-description">{hero?.slides?.[1]?.descripcion || ""}</p>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item" style={{ backgroundColor: "#000" }}>
              <img
                src={imageSrc}
                className="d-block w-100"
                alt="Slide 3"
                style={{ maxHeight: "520px", objectFit: "cover", opacity: 0.6 }}
              />
              <div className="carousel-caption d-block">
                <div className="hero-caption-glass">
                  <h2 className="hero-title">{slide3Title}</h2>
                  <p className="hero-subtitle">{slide3Subtitle}</p>
                  <p className="hero-description">{hero?.slides?.[2]?.descripcion || ""}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controles */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </section>
  );
}
