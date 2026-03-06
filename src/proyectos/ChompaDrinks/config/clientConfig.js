export const clientConfig = {
  nombre: "Chompa Drinks",
  tipo: "hamburgueseria", // Keeping this as is for now, or could change if app logic uses it

  whatsapp: "+5491126384202",

  logo: "/images/chompa_drinks_logo.png", // Generic

  colores: {
    primario: "#000000", // Black for navbar to make the logo stand out
    secundario: "#1a1a1a",
    textoClaro: "#ffffff",
    acento: "#ff0000", // Red from the logo
  },

  hero: {
    fondo: "/images/custom_banner.png", // New Combos Banner
    slides: [
      {
        titulo: "CHOMPA DRINKS",
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
