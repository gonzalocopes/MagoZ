// src/config/clientConfig.js
export const clientConfig = {
  nombre: "BRANCA BURGERS",          // Nombre del local
  tipo: "hamburgueseria",                     // pizzeria | hamburgueseria | heladeria | etc.

  whatsapp: "+5491136424020",           // Teléfono del negocio (formato internacional)

  logo: "/images/branca_logo.png",
  colores: {
    primario: "#000000", // Black branding
    secundario: "#ff6600", // Orange accent
    textoClaro: "#ffffff",
    textoOscuro: "#333333",
  },

  hero: {
    fondo: "/images/branca/branca_custom_banner.png",   // Imagen de fondo (ponela en /public/images/)
    slides: [
      {
        titulo: "BRANCA BURGERS",
        subtitulo: "100% CASERO Elaboramos nuestro propio pan y carne.",
      },
      {
        titulo: "Horarios",
        subtitulo: "Viernes a Lunes: 19:30hs a 00:00hs",
      },
      {
        titulo: "Encontranos",
        subtitulo: "Calle 9 N°1063 Guernica",
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
