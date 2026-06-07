// src/config/clientConfig.js
export const clientConfig = {
  nombre: "Burger Bella",          // Nombre del local
  tipo: "hamburgueseria",                     // pizzeria | hamburgueseria | heladeria | etc.

  whatsapp: "+5491176624706",           // Teléfono del negocio (formato internacional)

  logo: "/images/burgerbella/burger_bella_logo.png",    // Ruta dentro de /public (ej: public/images/logo-pizzeria.png)

  colores: {
    primario: "#43A1D5",   // Celeste AFA (Estilo Mundial)
    secundario: "#111827", // Gris oscuro
    textoClaro: "#FFFFFF", // Texto claro para contrastar
  },

  hero: {
    fondo: "/images/burgerbella/burger_bella_banner.png",   // Imagen de fondo de Burger Bella
    slides: [
      {
        titulo: "BURGER BELLA ⭐⭐⭐",
        subtitulo: "Las hamburguesas más ricas, con calidad de Campeones del Mundo 🏆.",
      },
      {
        titulo: "MUCHACHOS...",
        subtitulo: "Pedí la tuya y festejemos cada bocado como en Qatar.",
      },
      {
        titulo: "Horarios",
        subtitulo: `Martes a Sábados: 19:00hs a 00:30hs\nDomingo: 19:00hs a 23:30hs`,
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

