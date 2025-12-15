// src/config/clientConfig.js
export const clientConfig = {
  nombre: "Crunchy Burger",          // Nombre del local
  tipo: "hamburgueseria",                     // pizzeria | hamburgueseria | heladeria | etc.

  whatsapp: "+5491136424020",           // Teléfono del negocio (formato internacional)

  logo: "/images/crunchy-logo-yellow.png",    // Ruta dentro de /public (ej: public/images/logo-pizzeria.png)

  colores: {
    primario: "#FFC107",   // Dorado Crunchy
    secundario: "#111827", // gris muy oscuro
    textoClaro: "#333333", // Texto oscuro para contrastar con el amarillo si se usa de fondo
  },

  hero: {
    fondo: "/images/fondoburga.jpg",   // Imagen de fondo (ponela en /public/images/)
    slides: [
      {
        titulo: "CRUNCHY BURGER",
        subtitulo: "Condenados al éxito desde la primera mordida.",
      },
      {
        titulo: "Horarios",
        subtitulo: "Miércoles a Domingo desde las 19hs.",
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
