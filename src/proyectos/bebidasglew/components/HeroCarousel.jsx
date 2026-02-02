import { clientConfig } from "../config/clientConfig";
import { useEffect } from "react";
import { Carousel } from "bootstrap";

export default function HeroCarousel() {
  const { hero, nombre } = clientConfig;

  // SPA Fix: Initialize Carousel manually because DOMContentLoaded already fired
  useEffect(() => {
    const carouselElement = document.getElementById('heroCarousel');
    if (carouselElement) {
      const myCarousel = new Carousel(carouselElement, {
        interval: 3000,
        ride: 'carousel'
      });
      myCarousel.cycle();
    }
  }, []);

  // Imagen de fondo: si no hay en config, usamos la de Pexels
  const imageSrc =
    hero?.fondo ||
    "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg";



  return (
    <section id="hero" className="bg-dark">
      <div className="container-fluid px-0">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {(hero?.slides || []).map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={imageSrc}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                  style={{ maxHeight: "520px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-block">
                  <div className="hero-caption-glass">
                    <h2 className="hero-title">{slide.titulo}</h2>
                    <p className="hero-subtitle" style={{ whiteSpace: 'pre-line' }}>{slide.subtitulo}</p>
                  </div>
                </div>
              </div>
            ))}
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
