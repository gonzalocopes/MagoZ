// src/config/clientConfig.js
export const clientConfig = {
  nombre: "Pizzería Geminis",          // Nombre del local
  tipo: "pizzeria",                     // pizzeria | hamburgueseria | heladeria | etc.

  whatsapp: "5491132935209",           // Teléfono del negocio (formato internacional)

  logo: "/images/geminis_logo.png",    // Ruta dentro de /public (ej: public/images/logo-pizzeria.png)

  colores: {
    primario: "#1a472a", // Verde oscuro (del logo)
    secundario: "#8b1538", // Bordo/Rojo oscuro (del logo)
    textoClaro: "#ffffff",
  },

  hero: {
    fondo: "/images/geminis_banner.png",   // Imagen de fondo (ponela en /public/images/)
    slides: [
      {
        titulo: "PIZZERÍA GEMINIS 🍕",
        subtitulo: "Fundada el 2 de Abril de 1987 - Burzaco",
        descripcion: "Nos avalan más de 20 años de atención a nuestros clientes"
      },
      {
        titulo: "ABIERTO TODOS LOS DÍAS",
        subtitulo: "De 18 HS a 00 HS",
        descripcion: "Viernes y Sábados también al mediodía"
      },
      {
        titulo: "PROMOS ESPECIALES",
        subtitulo: "Combos de pizzas, empanadas y más",
        descripcion: "Consultá nuestras promos del día"
      }
    ]
  },

  // // 🔔 NUEVO: configuración de horario por día
  // //horario: {
  // //enabled: true, // Master switch: si false, ignora horarios
  // //mensajeCerrado: "Ahora estamos cerrados. Consultá nuestros horarios.",
  // //dias: {
  // //lunes: { abierto: false, apertura: "19:00", cierre: "23:30" },
  // //martes: { abierto: false, apertura: "19:00", cierre: "23:30" },
  // //miercoles: { abierto: false, apertura: "19:00", cierre: "23:30" },
  // //jueves: { abierto: false, apertura: "19:00", cierre: "23:30" },
  // //viernes: { abierto: true, apertura: "20:30", cierre: "22:30" }, // hasta medianoche
  // //sabado: { abierto: true, apertura: "20:30", cierre: "22:30" },
  // //domingo: { abierto: true, apertura: "20:30", cierre: "22:30" },
  // // },
  // //},
};
