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
    price: 34990,
    img: "/images/burgas/producto-estrella.png", // ID: producto-estrella
  },
  {
    id: "combo-cuarto-crunchy",
    name: "Combo Cuarto Crunchy",
    category: "Promos",
    description: "Una pausa completa, rápida y accesible para cortar el día. Incluye papas y bebida.",
    price: 8990,
    img: "/images/burgas/combo-cuarto-crunchy.png",
  },

  // Combos del Día
  {
    id: "promo-martes",
    name: "Martes: BIG CRUNCHY",
    category: "Promos",
    description: "Solo Martes. Precio regular $18.000.",
    price: 14990,
    img: "/images/burgas/promo-big-crunchy.png",
    allowedDays: [2], // Martes
  },
  {
    id: "promo-miercoles",
    name: "Miércoles: BBQ Crunchy",
    category: "Promos",
    description: "Solo Miércoles. Precio regular $18.000.",
    price: 14990,
    img: "/images/burgas/bbq-crunchy.png", // ID: bbq-crunchy
    allowedDays: [3], // Miércoles
  },
  {
    id: "promo-jueves",
    name: "Jueves: Chicken Crunchy",
    category: "Promos",
    description: "Solo Jueves. Precio regular $15.000.",
    price: 11990,
    img: "/images/burgas/chicken-crunchy.png", // ID: chicken-crunchy
    allowedDays: [4], // Jueves
  },
  {
    id: "promo-viernes",
    name: "Viernes: Mega Provo",
    category: "Promos",
    description: "Solo Viernes. Precio regular $18.000.",
    price: 14990,
    img: "/images/burgas/mega-provo.png", // ID: mega-provo
    allowedDays: [5], // Viernes
  },
  {
    id: "promo-sabado",
    name: "Sábado: Clásica Argenta",
    category: "Promos",
    description: "Solo Sábado. Precio regular $18.000.",
    price: 14990,
    img: "/images/burgas/clasica-argenta.png", // ID: clasica-argenta
    allowedDays: [6], // Sábado
  },
  {
    id: "promo-domingo",
    name: "Domingo: Cheese Bacon",
    category: "Promos",
    description: "Solo Domingo. Precio regular $13.000.",
    price: 9990,
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
    price: 18000,
    img: "/images/burgas/bbq-crunchy.png",
  },
  {
    id: "mega-provo",
    name: "Mega Provo",
    category: "Hamburguesas",
    description: "Pan de papa, Doble medallón de carne 120grs c/u, Provoleta, Cebolla Caramelizada, Cheddar liquido y Panceta. Incluye papas fritas.",
    price: 18000,
    img: "/images/burgas/mega-provo.png",
  },
  {
    id: "cheese-simple",
    name: "Cheese Simple",
    category: "Hamburguesas",
    description: "Pan de papa, Medallón de 120grs, Cheddar x2. Incluye papas fritas.",
    price: 12000,
    img: "/images/burgas/cheese-simple.png",
  },
  {
    id: "cheese-simple-sin-papas",
    name: "Hamburguesa simple cheese SIN PAPAS",
    category: "Hamburguesas",
    description: "Pan de papa, Medallón de 120grs, Cheddar x2.",
    price: 7000,
    img: "/images/burgas/cheese-simple.png",
  },
  {
    id: "cheese-doble",
    name: "Cheese Doble",
    category: "Hamburguesas",
    description: "Pan de papa, Doble medallón, Cheddar x4. Incluye papas fritas.",
    price: 15000,
    img: "/images/burgas/cheese-doble-dark.png",
  },
  {
    id: "cheese-triple",
    name: "Cheese Triple",
    category: "Hamburguesas",
    description: "Pan de papa, Triple medallón, Cheddar x6. Incluye papas fritas.",
    price: 17000,
    img: "/images/burgas/cheese-triple-dark.png",
  },
  {
    id: "cheese-bacon-simple",
    name: "Cheese Bacon Simple",
    category: "Hamburguesas",
    description: "Pan de papa, Medallón de 120grs, Cheddar x2, Panceta. Incluye papas fritas.",
    price: 13000,
    img: "/images/burgas/cheese-bacon.png",
  },
  {
    id: "cheese-bacon-doble",
    name: "Cheese Bacon Doble",
    category: "Hamburguesas",
    description: "Pan de papa, Doble medallón, Cheddar x4, Panceta. Incluye papas fritas.",
    price: 16000,
    img: "/images/burgas/cheese-bacon-doble-new.png",
  },
  {
    id: "cheese-bacon-triple",
    name: "Cheese Bacon Triple",
    category: "Hamburguesas",
    description: "Pan de papa, Triple medallón, Cheddar x6, Panceta. Incluye papas fritas.",
    price: 18000,
    img: "/images/burgas/cheese-bacon-triple-new.png",
  },
  {
    id: "oklahoma-simple",
    name: "Oklahoma Simple",
    category: "Hamburguesas",
    description: "Pan de papa, Medallón de 120grs cocinado con cebolla, Doble cheddar. Incluye papas fritas.",
    price: 13000,
    img: "/images/burgas/oklahoma.png",
  },
  {
    id: "oklahoma-doble",
    name: "Oklahoma Doble",
    category: "Hamburguesas",
    description: "Pan de papa, Doble medallón cocinado con cebolla, Doble cheddar. Incluye papas fritas.",
    price: 16000,
    img: "/images/burgas/oklahoma.png",
  },
  {
    id: "oklahoma-triple",
    name: "Oklahoma Triple",
    category: "Hamburguesas",
    description: "Pan de papa, Triple medallón cocinado con cebolla, Doble cheddar. Incluye papas fritas.",
    price: 18000,
    img: "/images/burgas/oklahoma.png",
  },
  {
    id: "clasica-argenta",
    name: "Clásica Argenta",
    category: "Hamburguesas",
    description: "Pan de papa, Doble medallón de 120grs c/u, Cheddar x2, Tomate, Lechuga y Huevo. Incluye papas fritas.",
    price: 18000,
    img: "/images/burgas/clasica-argenta.png",
  },
  {
    id: "big",
    name: "Big",
    category: "Hamburguesas",
    description: "Pan de papa, Salsa big, Doble medallón de 120grs c/u, Cheddar x4, Rodajas de pepino y Lechuga. Incluye papas fritas.",
    price: 18000,
    img: "/images/burgas/big-mac.png",
  },
  {
    id: "chicken-crunchy",
    name: "Chicken Crunchy",
    category: "Hamburguesas",
    description: "Salsa de mayonesa cremosa, Medallon de pollo, Doble cheddar, Tomate, Lechuga, Panceta. Incluye papas fritas.",
    price: 15000,
    img: "/images/burgas/chicken-crunchy.png",
  },
];

export const papas = [
  {
    id: "medio-balde-papas",
    name: "Medio Balde de Papas Simples",
    category: "Papas",
    description: "Ideal para acompañar. ¡Hacé click en agregar para sumarle tu topping favorito!",
    price: 7000,
    img: "/images/papas/medio-balde.png",
  },
  {
    id: "balde-1kg-papas",
    name: "Balde 1Kg de Papas Simples",
    category: "Papas",
    description: "Para compartir. ¡Hacé click en agregar para sumarle tu topping favorito!",
    price: 11000,
    img: "/images/papas/balde-1kg.png",
  },
  {
    id: "nuggets-8",
    name: "8 Nuggets + Papas",
    category: "Papas",
    description: "Para compartir. Incluye Dip Barbacoa.",
    price: 12000,
    img: "/images/papas/nuggets-papas.png",
  },
];

export const combos = [
  {
    id: "mega-balde-clasico",
    name: "Mega Balde Clásico",
    category: "Combos",
    description: "4 Cheese Burger de 100grs c/u + 1 KILO DE PAPAS FRITAS.",
    price: 29990,
    img: "/images/burgas/mega-balde-clasico.png",
  },
  {
    id: "box-5-mini",
    name: "Box 5 Mini Cheese",
    category: "Combos",
    description: "5 mini Cheese Burger + dip de cheddar + papas fritas.",
    price: 19990,
    img: "/images/burgas/box-5-mini.jpg",
  },
  {
    id: "box-10-mini",
    name: "Box 10 Mini Cheese",
    category: "Combos",
    description: "10 mini Cheese Burger + dip de cheddar + papas fritas.",
    price: 34990,
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
    price: 8000,
    img: "/images/bebidas/cervezas_artesanales_new.png",
  },
  {
    id: "artesanal-honey",
    name: "Cerveza Artesanal Honey 1L",
    category: "Bebidas",
    description: "Botella de 1 litro.",
    price: 8000,
    img: "/images/bebidas/cervezas_artesanales_new.png",
  },
  {
    id: "artesanal-scottish",
    name: "Cerveza Artesanal Scottish 1L",
    category: "Bebidas",
    description: "Botella de 1 litro.",
    price: 8000,
    img: "/images/bebidas/cervezas_artesanales_new.png",
  },
  {
    id: "artesanal-ipa",
    name: "Cerveza Artesanal IPA 1L",
    category: "Bebidas",
    description: "Botella de 1 litro.",
    price: 9000,
    img: "/images/bebidas/cervezas_artesanales_new.png",
  },
  {
    id: "artesanal-session-ipa",
    name: "Cerveza Artesanal Session IPA 1L",
    category: "Bebidas",
    description: "Botella de 1 litro.",
    price: 9000,
    img: "/images/bebidas/cervezas_artesanales_new.png",
  },
  {
    id: "artesanal-porter",
    name: "Cerveza Artesanal Porter 1L",
    category: "Bebidas",
    description: "Botella de 1 litro.",
    price: 8000,
    img: "/images/bebidas/cervezas_artesanales_new.png",
  },

  // Tragos de Litro
  {
    id: "trago-fernet",
    name: "Fernet 1L",
    category: "Bebidas",
    description: "Trago de litro.",
    price: 10000,
    img: "/images/bebidas/trago_fernet_1l_new.png",
  },
  {
    id: "trago-gancia",
    name: "Gancia 1L",
    category: "Bebidas",
    description: "Trago de litro.",
    price: 9000,
    img: "/images/bebidas/trago_gancia_1l_new.png",
  },
  {
    id: "trago-sky-speed",
    name: "Sky con Speed 1L",
    category: "Bebidas",
    description: "Trago de litro.",
    price: 10000,
    img: "/images/bebidas/trago_sky_speed_1l.png",
  },
  {
    id: "trago-sky-jugo",
    name: "Sky con Jugo 1L",
    category: "Bebidas",
    description: "Trago de litro.",
    price: 10000,
    img: "/images/bebidas/trago_sky_jugo_1l.png",
  },

  // Cervezas Industriales
  {
    id: "amstel-473",
    name: "Amstel 473ml",
    category: "Bebidas",
    description: "Lata.",
    price: 4000,
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
    price: 2000,
    img: "/images/bebidas/agua_500.png",
  },
  {
    id: "agua-saborizada-500",
    name: "Agua Saborizada 500ml",
    category: "Bebidas",
    description: "Botella personal.",
    price: 3000,
    img: "/images/bebidas/aquarius_500.png",
  },
  {
    id: "coca-500",
    name: "Coca Cola 500ml",
    category: "Bebidas",
    description: "Botella personal.",
    price: 3500,
    img: "/images/bebidas/coca_500.png",
  },
  {
    id: "sprite-500",
    name: "Sprite 500ml",
    category: "Bebidas",
    description: "Botella personal.",
    price: 3500,
    img: "/images/bebidas/sprite_500.png",
  },
  {
    id: "vaso-litro-gaseosa",
    name: "Vaso de Litro Económico de Gaseosa",
    category: "Bebidas",
    description: "Coca cola / Sprite / Tónica.",
    price: 5000,
    img: "/images/bebidas/vaso_litro_gaseosa.png",
  },
];

export const postres = [
  /*
  {
    id: "cheesecake-frutilla",
    name: "Cheesecake de Frutilla",
    category: "Postres",
    description: "",
    price: 7000,
    img: "/images/postres/cheesecake_frutilla.jpg",
  },
  {
    id: "postre-oreo",
    name: "Postre Oreo",
    category: "Postres",
    description: "Oreo, dulce de leche y crema",
    price: 7000,
    img: "/images/postres/postre_oreo.jpg",
  },
  {
    id: "chocotorta",
    name: "Chocotorta",
    category: "Postres",
    description: "",
    price: 7000,
    img: "/images/postres/chocotorta.jpg",
  },
  {
    id: "cheesecake-maracuya",
    name: "Cheesecake de Maracuyá",
    category: "Postres",
    description: "",
    price: 7000,
    img: "/images/postres/cheesecake_maracuya.jpg",
  },
  */
  {
    id: "alfajor-luka",
    name: "Alfajores LUKA",
    category: "Postres",
    description: "Auténticos alfajores artesanales LUKA. Puro chocolate y extra dulce de leche.",
    price: 2000,
    img: "/images/postres/alfajores_luka.png",
  },
];

export const extras = [
  { id: "extra-carne", name: "Extra Carne", price: 3000, category: "Extras" },
  { id: "extra-carne-cheddar", name: "Carne + Cheddar x2", price: 4000, category: "Extras" },
  { id: "extra-huevo", name: "Huevo", price: 1500, category: "Extras" },
  { id: "extra-panceta", name: "Panceta", price: 1500, category: "Extras" },
  { id: "extra-cheddar", name: "Cheddar x2", price: 1500, category: "Extras" },
  { id: "dip-cheddar", name: "Dip de Cheddar", price: 3000, category: "Extras" },
  { id: "salsa-cheddar-panceta", name: "Salsa Cheddar + Panceta a las papas", price: 4000, category: "Extras" },
  { id: "tequenos-x4", name: "Tequeños x4", price: 6000, category: "Extras" },
  { id: "tequenos-x8", name: "Tequeños x8", price: 10990, category: "Extras" },
  { id: "aros-cebolla-x4", name: "Aros de Cebolla x4", price: 4000, category: "Extras" },
  { id: "aros-cebolla-x8", name: "Aros de Cebolla x8", price: 7500, category: "Extras" },
  { id: "muzzarellitas-x4", name: "Muzzarellitas x4", price: 6000, category: "Extras" },
  { id: "muzzarellitas-x8", name: "Muzzarellitas x8", price: 10990, category: "Extras" },
  { id: "nuggets-x4", name: "Nuggets x4", price: 4500, category: "Extras" },
  { id: "nuggets-x8", name: "Nuggets x8", price: 8500, category: "Extras" },
  { id: "combo-bebida-papas", name: "Bebida y Papas Fritas", price: 4900, category: "Extras" },
];

export const papasToppings = [
  { id: "topping-cheddar", name: "Topping: Cheddar Líquido", price: 4000, category: "Toppings", img: "/images/papas/topping-cheddar.png" },
  { id: "topping-cheddar-panceta-verdeo", name: "Topping: Cheddar, Panceta y Verdeo", price: 6000, category: "Toppings", img: "/images/papas/topping-cheddar-panceta-verdeo.png" },
  { id: "topping-cheese-bacon", name: "Topping: Cheese Bacon (Carne, cheddar, panceta y verdeo)", price: 8000, category: "Toppings", img: "/images/papas/topping-cheese-bacon.png" },
  { id: "topping-crematto-crispy", name: "Topping: Crematto Crispy (Nuggets, mayo cremosa, limón y verdeo)", price: 8000, category: "Toppings", img: "/images/papas/topping-crematto-crispy.png" },
  { id: "topping-bondiola-bbq", name: "Topping: Bondiola BBQ (Bondiola, muzzarella, BBQ, cebolla crispy y verdeo)", price: 8000, category: "Toppings", img: "/images/papas/topping-bondiola-bbq.png" },
];

// 🌞 Promos Mediodía — disponibles de 11:00 a 18:00 hs
export const promosMedianodia = [
  /*
  {
    id: "mediodia-mega-balde",
    name: "Mega Balde Crunchy Mediodía",
    category: "Mediodía",
    description: "4 Cheese Burgers + 1 kilo de papas. Ideal para compartir.",
    price: 21990,
    img: "/images/burgas/mega-balde-clasico.png",
  },
  */
];
