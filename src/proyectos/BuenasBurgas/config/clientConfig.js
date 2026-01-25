// src/config/clientConfig.js
export const clientConfig = {
  nombre: "Buenas Burgas",          // Nombre del local
  tipo: "hamburgueseria",                     // pizzeria | hamburgueseria | heladeria | etc.

  whatsapp: "+5491136424020",           // Teléfono del negocio (formato internacional)

  logo: "/images/buenas/logo_buenas.png",
  colores: {
    primario: "#000000", // Black branding
    secundario: "#ff6600", // Orange accent
    textoClaro: "#ffffff",
    textoOscuro: "#333333",
  },

  hero: {
    fondo: "/images/buenas/buenas_banner.png",   // Imagen de fondo (ponela en /public/images/)
    slides: [
      {
        titulo: "Buenas Burgas",
        subtitulo: "Si aún no encuentras la felicidad nosotros te la llevamos",
      },
      {
        titulo: "Horarios",
        subtitulo: "Viernes a Lunes: 19:30hs a 00:00hs",
      },
      {
        titulo: "Encontranos",
        subtitulo: "Dirreción",
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
