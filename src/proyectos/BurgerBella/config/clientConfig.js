// src/config/clientConfig.js
export const clientConfig = {
  nombre: "Burger Bella",          // Nombre del local
  tipo: "hamburgueseria",                     // pizzeria | hamburgueseria | heladeria | etc.

  whatsapp: "+5491171206446",           // Teléfono del negocio (formato internacional)

  logo: "/images/burgerbella/burger_bella_logo.png",    // Ruta dentro de /public (ej: public/images/logo-pizzeria.png)

  colores: {
    primario: "#FF2B7A",   // Rosa vibrante / magenta de Burger Bella
    secundario: "#111827", // gris muy oscuro
    textoClaro: "#FFFFFF", // Texto claro para contrastar
  },

  hero: {
    fondo: "/images/burgerbella/burger_bella_banner.png",   // Imagen de fondo de Burger Bella
    slides: [
      {
        titulo: "BURGER BELLA",
        subtitulo: "Las hamburguesas más lindas y sabrosas, hechas con amor.",
      },
      {
        titulo: "Horarios",
        subtitulo: `Martes a Sábados: 19:00hs a 00:30hs\nDomingo: 19:00hs a 23:30hs`,
      },
      {
        titulo: "Encontranos",
        subtitulo: "Av. Hipólito Yrigoyen 14687, Burzaco.",
      },
    ],
  },
  // 🔔 NUEVO: configuración de horario
  //horario: {
  //enabled: true, // si lo ponés en false, se desactiva el modo cerrado
  // apertura: "14:00", // hora de apertura (24 hs)
  //cierre: "23:30",   // hora de cierre  (24 hs)
  //mensajeCerrado:
  //"Ahora estamos cerrados. Nuestro horario: de 19:00 a 23:30 hs.",
  //},
};

