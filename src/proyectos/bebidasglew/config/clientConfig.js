export const clientConfig = {
  nombre: "Bebidas Glew",
  tipo: "hamburgueseria", // Keeping this as is for now, or could change if app logic uses it

  whatsapp: "+5491136424020",

  logo: "/images/bebidas_logo.png", // Generic

  colores: {
    primario: "#000000",
    secundario: "#212529",
    textoClaro: "#ffffff",
  },

  hero: {
    fondo: "/images/combos_banner.png", // New Combos Banner
    slides: [
      {
        titulo: "BEBIDAS GLEW",
        subtitulo: "Los mejores combos para la previa.",
      },
      {
        titulo: "Combos",
        subtitulo: "Armá tu combo ideal.",
      },
      {
        titulo: "Envios",
        subtitulo: "Glew, Guernica y Longchamps",
      },
      {
        titulo: "Envios Gratis",
        subtitulo: "Envios gratis con compras mas de $40.000",
      },
    ],
  },

  /*
  horario: {
    enabled: false, // Local siempre abierto
    apertura: "19:00",
    cierre: "23:59",
    mensajeCerrado: "Abrimos de 19:00 a 00:00 hs.",
  },
  */
};
