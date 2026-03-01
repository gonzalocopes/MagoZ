export const promos = [
  /*
  {
    id: "promo-gancia-2",
    name: "Promo 2x Gancia",
    category: "Promos",
    description: "Dos vasos de Gancia.",
    price: 6000,
    img: "/images/bebidas/trago_gancia_1l.png",
  },
  {
    id: "promo-fernet-2",
    name: "Promo 2x Fernet",
    category: "Promos",
    description: "Dos vasos de Fernet.",
    price: 8000,
    img: "/images/bebidas/trago_fernet_1l.png",
  },
  {
    id: "promo-pintas-2",
    name: "Promo 2x Pintas",
    category: "Promos",
    description: "Golden, Honey, Scottish o Porter.",
    price: 7000,
    img: "/images/bebidas/cerveza_golden_1l.png",
  },
  */

  // Promo todos los días
  {
    id: "promo-estrella",
    name: "El Producto Estrella",
    category: "Promos",
    description: "4 Cheese burgers, 1Kg de papas y 1L de cerveza (se puede reemplazar por una gaseosa).",
    price: 29990,
    img: "/images/burgas/producto-estrella.png", // ID: producto-estrella
  },

  // Combos del Día
  {
    id: "promo-miercoles",
    name: "Miércoles: BBQ Crunchy",
    category: "Promos",
    description: "Solo Miércoles. Precio regular $16.000.",
    price: 12990,
    img: "/images/burgas/bbq-crunchy.png", // ID: bbq-crunchy
    allowedDays: [3], // Miércoles
  },
  {
    id: "promo-jueves",
    name: "Jueves: Chicken Crunchy",
    category: "Promos",
    description: "Solo Jueves. Precio regular $11.000.",
    price: 7999,
    img: "/images/burgas/chicken-crunchy.png", // ID: chicken-crunchy
    allowedDays: [4], // Jueves
  },
  {
    id: "promo-viernes",
    name: "Viernes: Mega Provo",
    category: "Promos",
    description: "Solo Viernes. Precio regular $16.000.",
    price: 12990,
    img: "/images/burgas/mega-provo.png", // ID: mega-provo
    allowedDays: [5], // Viernes
  },
  {
    id: "promo-sabado",
    name: "Sábado: Clásica Argenta",
    category: "Promos",
    description: "Solo Sábado. Precio regular $16.000.",
    price: 12990,
    img: "/images/burgas/clasica-argenta.png", // ID: clasica-argenta
    allowedDays: [6], // Sábado
  },
  {
    id: "promo-domingo",
    name: "Domingo: Cheese Bacon",
    category: "Promos",
    description: "Solo Domingo. Precio regular $9.500.",
    price: 6990,
    img: "/images/burgas/bacon.jpg", // ID: cheese-bacon-simple
    allowedDays: [0], // Domingo
  },
];


export const hamburguesas = [
  {
    id: "bbq-crunchy",
    name: "BBQ Crunchy",
    category: "Hamburguesas",
    description: "Pan de papa, Salsa barbacoa, Doble medallón de 120grs c/u, MOZZARELLA, Panceta y Cebolla crispy. Incluye papas fritas.",
    price: 16000,
    img: "/images/burgas/bbq-crunchy.png",
  },
  {
    id: "mega-provo",
    name: "Mega Provo",
    category: "Hamburguesas",
    description: "Pan de papa, Doble medallón de carne 120grs c/u, Provoleta, Cebolla Caramelizada, Cheddar liquido y Panceta. Incluye papas fritas.",
    price: 16000,
    img: "/images/burgas/mega-provo.png",
  },
  {
    id: "cheese-simple",
    name: "Cheese Simple",
    category: "Hamburguesas",
    description: "Pan de papa, Medallón de 120grs, Cheddar x2. Incluye papas fritas.",
    price: 8500,
    img: "/images/burgas/cheese-simple.png",
  },
  {
    id: "cheese-simple-sin-papas",
    name: "Hamburguesa simple cheese SIN PAPAS",
    category: "Hamburguesas",
    description: "Pan de papa, Medallón de 120grs, Cheddar x2.",
    price: 4500,
    img: "/images/burgas/cheese-simple.png",
  },
  {
    id: "cheese-doble",
    name: "Cheese Doble",
    category: "Hamburguesas",
    description: "Pan de papa, Doble medallón, Cheddar x4. Incluye papas fritas.",
    price: 12000,
    img: "/images/burgas/cheese-doble-dark.png",
  },
  {
    id: "cheese-triple",
    name: "Cheese Triple",
    category: "Hamburguesas",
    description: "Pan de papa, Triple medallón, Cheddar x6. Incluye papas fritas.",
    price: 15000,
    img: "/images/burgas/cheese-triple-dark.png",
  },
  {
    id: "cheese-bacon-simple",
    name: "Cheese Bacon Simple",
    category: "Hamburguesas",
    description: "Pan de papa, Medallón de 120grs, Cheddar x2, Panceta. Incluye papas fritas.",
    price: 9500,
    img: "/images/burgas/cheese-bacon.png",
  },
  {
    id: "cheese-bacon-doble",
    name: "Cheese Bacon Doble",
    category: "Hamburguesas",
    description: "Pan de papa, Doble medallón, Cheddar x4, Panceta. Incluye papas fritas.",
    price: 12500,
    img: "/images/burgas/cheese-bacon-doble-new.png",
  },
  {
    id: "cheese-bacon-triple",
    name: "Cheese Bacon Triple",
    category: "Hamburguesas",
    description: "Pan de papa, Triple medallón, Cheddar x6, Panceta. Incluye papas fritas.",
    price: 16000,
    img: "/images/burgas/cheese-bacon-triple-new.png",
  },
  {
    id: "oklahoma-simple",
    name: "Oklahoma Simple",
    category: "Hamburguesas",
    description: "Pan de papa, Medallón de 120grs cocinado con cebolla, Doble cheddar. Incluye papas fritas.",
    price: 9900,
    img: "/images/burgas/oklahoma.png",
  },
  {
    id: "oklahoma-doble",
    name: "Oklahoma Doble",
    category: "Hamburguesas",
    description: "Pan de papa, Doble medallón cocinado con cebolla, Doble cheddar. Incluye papas fritas.",
    price: 13900,
    img: "/images/burgas/oklahoma.png",
  },
  {
    id: "oklahoma-triple",
    name: "Oklahoma Triple",
    category: "Hamburguesas",
    description: "Pan de papa, Triple medallón cocinado con cebolla, Doble cheddar. Incluye papas fritas.",
    price: 16000,
    img: "/images/burgas/oklahoma.png",
  },
  {
    id: "clasica-argenta",
    name: "Clásica Argenta",
    category: "Hamburguesas",
    description: "Pan de papa, Doble medallón de 120grs c/u, Cheddar x2, Tomate, Lechuga y Huevo. Incluye papas fritas.",
    price: 16000,
    img: "/images/burgas/clasica-argenta.png",
  },
  {
    id: "big",
    name: "Big",
    category: "Hamburguesas",
    description: "Pan de papa, Salsa big, Doble medallón de 120grs c/u, Cheddar x4, Rodajas de pepino y Lechuga. Incluye papas fritas.",
    price: 15000,
    img: "/images/burgas/big-mac.png",
  },
  {
    id: "chicken-crunchy",
    name: "Chicken Crunchy",
    category: "Hamburguesas",
    description: "Salsa de mayonesa cremosa, Medallon de pollo, Doble cheddar, Tomate, Lechuga, Panceta. Incluye papas fritas.",
    price: 11000,
    img: "/images/burgas/chicken-crunchy.png",
  },
];

export const papas = [
  {
    id: "papas-simples",
    name: "Papas Simples",
    category: "Papas",
    description: "Para compartir.",
    price: 7500,
    img: "/images/papas/papasfritas.png",
  },
  {
    id: "papas-cheddar",
    name: "Papas c/ Cheddar",
    category: "Papas",
    description: "Para compartir. Con salsa cheddar.",
    price: 8500,
    img: "/images/papas/papas-cheddar.png",
  },
  {
    id: "papas-completas",
    name: "Papas Completas",
    category: "Papas",
    description: "Para compartir. Cheddar, Verdeo y Bacon.",
    price: 10500,
    img: "/images/papas/papacompleta.png",
  },
  {
    id: "papas-crunchy-bacon",
    name: "Papas Crunchy Cheese Bacon",
    category: "Papas",
    description: "Para compartir. Papas fritas con Carne, cheddar liquido, panceta y verdeo.",
    price: 15500,
    img: "/images/papas/papas-crunchy.png",
  },
  {
    id: "cremato-crispy",
    name: "Cremato Crispy",
    category: "Papas",
    description: "Para compartir. Cremato (Base de queso crema), Mayonesa, Trozos de Nuggets, Verdeo.",
    price: 15500,
    img: "/images/papas/cremato-crispy.png",
  },
  {
    id: "papas-bondiola",
    name: "Papas Bondiola BBQ",
    category: "Papas",
    description: "Para compartir. Papas fritas + bondiola Desmenuzada, Salsa BBQ, Cebolla Crispy, Verdeo y MOZZARELLA.",
    price: 15500,
    img: "/images/papas/papas-bondiola-bbq.jpg",
  },
  {
    id: "nuggets-8",
    name: "8 Nuggets + Papas",
    category: "Papas",
    description: "Para compartir. Incluye Dip Barbacoa.",
    price: 9000,
    img: "/images/papas/nuggets-papas.png",
  },
];

export const combos = [
  {
    id: "mega-balde-clasico",
    name: "Mega Balde Clásico",
    category: "Combos",
    description: "4 Cheese Burger de 100grs c/u + 1 KILO DE PAPAS FRITAS.",
    price: 26000,
    img: "/images/burgas/mega-balde-clasico.png",
  },
  {
    id: "box-5-mini",
    name: "Box 5 Mini Cheese",
    category: "Combos",
    description: "5 mini Cheese Burger + dip de cheddar + papas fritas.",
    price: 17999,
    img: "/images/burgas/box-5-mini.jpg",
  },
  {
    id: "box-10-mini",
    name: "Box 10 Mini Cheese",
    category: "Combos",
    description: "10 mini Cheese Burger + dip de cheddar + papas fritas.",
    price: 29990,
    img: "/images/burgas/box-10-mini.jpg",
  },
];

export const bebidas = [
  // Cerveza Artesanal 1L
  {
    id: "artesanal-golden",
    name: "Cerveza Artesanal Golden 1L",
    category: "Bebidas",
    description: "Botella de 1 litro.",
    price: 7000,
    img: "/images/bebidas/cervezas_artesanales_new.png",
  },
  {
    id: "artesanal-honey",
    name: "Cerveza Artesanal Honey 1L",
    category: "Bebidas",
    description: "Botella de 1 litro.",
    price: 7000,
    img: "/images/bebidas/cervezas_artesanales_new.png",
  },
  {
    id: "artesanal-scottish",
    name: "Cerveza Artesanal Scottish 1L",
    category: "Bebidas",
    description: "Botella de 1 litro.",
    price: 7000,
    img: "/images/bebidas/cervezas_artesanales_new.png",
  },
  {
    id: "artesanal-ipa",
    name: "Cerveza Artesanal IPA 1L",
    category: "Bebidas",
    description: "Botella de 1 litro.",
    price: 8000,
    img: "/images/bebidas/cervezas_artesanales_new.png",
  },
  {
    id: "artesanal-session-ipa",
    name: "Cerveza Artesanal Session IPA 1L",
    category: "Bebidas",
    description: "Botella de 1 litro.",
    price: 8000,
    img: "/images/bebidas/cervezas_artesanales_new.png",
  },
  {
    id: "artesanal-porter",
    name: "Cerveza Artesanal Porter 1L",
    category: "Bebidas",
    description: "Botella de 1 litro.",
    price: 7000,
    img: "/images/bebidas/cervezas_artesanales_new.png",
  },

  // Tragos de Litro
  {
    id: "trago-fernet",
    name: "Fernet 1L",
    category: "Bebidas",
    description: "Trago de litro.",
    price: 9000,
    img: "/images/bebidas/trago_fernet_1l_new.png",
  },
  {
    id: "trago-gancia",
    name: "Gancia 1L",
    category: "Bebidas",
    description: "Trago de litro.",
    price: 7000,
    img: "/images/bebidas/trago_gancia_1l_new.png",
  },
  {
    id: "trago-sky-speed",
    name: "Sky con Speed 1L",
    category: "Bebidas",
    description: "Trago de litro.",
    price: 9000,
    img: "/images/bebidas/trago_sky_speed_1l.png",
  },
  {
    id: "trago-sky-jugo",
    name: "Sky con Jugo 1L",
    category: "Bebidas",
    description: "Trago de litro.",
    price: 9000,
    img: "/images/bebidas/trago_sky_jugo_1l.png",
  },

  // Cervezas Industriales
  {
    id: "amstel-473",
    name: "Amstel 473ml",
    category: "Bebidas",
    description: "Lata.",
    price: 3000,
    img: "/images/bebidas/amstel_473.png",
  },
  {
    id: "heineken-710",
    name: "Heineken Latón 710ml",
    category: "Bebidas",
    description: "Latón.",
    price: 7500,
    img: "/images/bebidas/heineken_710.png",
  },

  // Sin Alcohol
  {
    id: "agua-500",
    name: "Agua 500ml",
    category: "Bebidas",
    description: "Botella personal.",
    price: 1500,
    img: "/images/bebidas/agua_500.png",
  },
  {
    id: "agua-saborizada-500",
    name: "Agua Saborizada 500ml",
    category: "Bebidas",
    description: "Botella personal.",
    price: 2500,
    img: "/images/bebidas/aquarius_500.png",
  },
  {
    id: "coca-500",
    name: "Coca Cola 500ml",
    category: "Bebidas",
    description: "Botella personal.",
    price: 2700,
    img: "/images/bebidas/coca_500.png",
  },
  {
    id: "sprite-500",
    name: "Sprite 500ml",
    category: "Bebidas",
    description: "Botella personal.",
    price: 2700,
    img: "/images/bebidas/sprite_500.png",
  },
];

export const postres = []; // Vacío o se puede eliminar si se borra en Menu.jsx también

export const extras = [
  { id: "extra-carne", name: "Extra Carne", price: 2500, category: "Extras" },
  { id: "extra-carne-cheddar", name: "Carne + Cheddar x2", price: 3000, category: "Extras" },
  { id: "extra-huevo", name: "Huevo", price: 1000, category: "Extras" },
  { id: "extra-panceta", name: "Panceta", price: 1000, category: "Extras" },
  { id: "extra-cheddar", name: "Cheddar x2", price: 1000, category: "Extras" },
  { id: "dip-cheddar", name: "Dip de Cheddar", price: 3000, category: "Extras" },
  { id: "salsa-cheddar-panceta", name: "Salsa Cheddar + Panceta a las papas", price: 3500, category: "Extras" },

];

// 🌞 Promos Mediodía — disponibles de 11:00 a 18:00 hs
export const promosMedianodia = [
  {
    id: "mediodia-cheese-simple",
    name: "Cheese Simple Mediodía",
    category: "Mediodía",
    description: "Pan de papa, Medallón de 120grs, Cheddar x2. Incluye Papas c/ Cheddar y Bacon + Coca 355ml.",
    price: 8990,
    img: "/images/burgas/cheese-simple.png",
    papasOpciones: ["Cheddar en papas", "Bacon en papas"],
    upsell: true,
  },
  {
    id: "mediodia-cheese-doble",
    name: "Cheese Doble Mediodía",
    category: "Mediodía",
    description: "Pan de papa, Doble medallón, Cheddar x4. Incluye Papas c/ Cheddar y Bacon + Coca 355ml.",
    price: 11990,
    img: "/images/burgas/cheese-doble-dark.png",
    papasOpciones: ["Cheddar en papas", "Bacon en papas"],
    upsell: true,
  },
  {
    id: "mediodia-cheese-triple",
    name: "Cheese Triple Mediodía",
    category: "Mediodía",
    description: "Pan de papa, Triple medallón, Cheddar x6. Incluye Papas c/ Cheddar y Bacon + Coca 355ml.",
    price: 15990,
    img: "/images/burgas/cheese-triple-dark.png",
    papasOpciones: ["Cheddar en papas", "Bacon en papas"],
    upsell: true,
  },
  {
    id: "mediodia-mega-balde",
    name: "Mega Balde Crunchy Mediodía",
    category: "Mediodía",
    description: "4 Cheese Burgers + 1 kilo de papas. Ideal para compartir. Incluye Coca GRATIS.",
    price: 21990,
    img: "/images/burgas/mega-balde-clasico.png",
  },
];
