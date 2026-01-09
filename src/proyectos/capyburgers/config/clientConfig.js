// src/config/clientConfig.js
export const clientConfig = {
  nombre: "CapyBurgers",          // Nombre del local
  tipo: "hamburgueseria",                     // pizzeria | hamburgueseria | heladeria | etc.

  whatsapp: "+5491136424020",           // Teléfono del negocio (formato internacional)

  logo: "/images/capy-logo.png",    // Ruta dentro de /public (ej: public/images/logo-pizzeria.png)

  colores: {
    primario: "#FF8C00",   // Naranja Capy (Dark Orange)
    secundario: "#2C1810", // Marrón oscuro (Capybara fur dark)
    textoClaro: "#FFFFFF", // Texto blanco para contrastar
  },

  hero: {
    fondo: "/images/capy-banner.png",   // Imagen de fondo (ponela en /public/images/)
    slides: [
      {
        titulo: "CAPYBURGERS",
        subtitulo: "Las mejores CapyBurgers de Glew.",
      },
      {
        titulo: "Horarios",
        subtitulo: "Jueves a Domingos: 19:00hs a 01:00hs",
      },
      {
        titulo: "Encontranos",
        subtitulo: "Juan de garay 2274, Glew.",
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
