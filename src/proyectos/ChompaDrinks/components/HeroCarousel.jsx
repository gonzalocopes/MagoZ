import { clientConfig } from "../config/clientConfig";

export default function HeroCarousel() {
  const { hero, logo } = clientConfig;

  // Imagen de fondo 
  const imageSrc =
    hero?.fondo ||
    "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg";

  return (
    <section
      id="hero"
      className="position-relative bg-dark d-flex align-items-center justify-content-center overflow-hidden w-100"
      style={{ minHeight: "55vh" }}
    >
      {/* Background Image */}
      <img
        src={imageSrc}
        alt="Fondo Hero"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0, opacity: 0.5 }}
      />

      {/* Degradez overlay for readability */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(13,13,13,0.9) 100%)",
          zIndex: 1
        }}
      ></div>

      {/* Main Content inside Hero */}
      <div className="position-relative d-flex flex-column align-items-center text-center px-3" style={{ zIndex: 2, paddingBottom: "2rem", paddingTop: "5rem" }}>

        {logo && (
          <img
            src={logo}
            alt="Chompa Drinks"
            className="img-fluid mb-4 responsive-hero-logo"
            style={{
              filter: "drop-shadow(0px 10px 25px rgba(255, 0, 222, 0.4))"
            }}
          />
        )}

        {/* Caption */}
        {hero?.slides && hero.slides.length > 0 && (
          <div className="hero-caption-glass mx-auto shadow-lg" style={{ minWidth: "280px" }}>
            <h2 className="hero-title mb-2 text-white" style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}>
              {hero.slides[0].titulo}
            </h2>
            <p className="hero-subtitle mb-0 text-white" style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}>
              {hero.slides[0].subtitulo}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
