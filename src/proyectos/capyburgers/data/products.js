export const promos = [
  {
    id: "promo-dos-simples",
    name: "Promo Dos Simples",
    category: "Promos",
    description: "Dos hamburguesas simples con papas.",
    price: 16000,
    img: "/images/promos/dos-simples.png",
  },
  {
    id: "promo-dos-dobles",
    name: "Promo Dos Dobles",
    category: "Promos",
    description: "Dos hamburguesas dobles con papas.",
    price: 18000,
    img: "/images/promos/dos-dobles.png",
  },
  {
    id: "promo-dos-triples",
    name: "Promo Dos Triples",
    category: "Promos",
    description: "Dos hamburguesas triples con papas.",
    price: 24000,
    img: "/images/promos/dos-triples.png",
  },
];

export const hamburguesas = [
  // CLASICAS
  {
    id: "capy-simple",
    name: "Simple",
    category: "Hamburguesas",
    description: "Medallón de 150gr, Doble Cheddar. (Viene con papas fritas)",
    price: 8500,
    img: "/images/burgas/cheese-simple.png",
  },
  {
    id: "capy-doble",
    name: "Doble",
    category: "Hamburguesas",
    description: "Dos medallones de 110gr, Cuádruple Cheddar. (Viene con papas fritas)",
    price: 9500,
    img: "/images/burgas/cheese-doble-dark.png",
  },
  {
    id: "capy-triple",
    name: "Triple",
    category: "Hamburguesas",
    description: "Tres medallones de 110gr, Séxtuple Cheddar. (Viene con papas fritas)",
    price: 12500,
    img: "/images/burgas/cheese-triple-dark.png",
  },
  // ESPECIALES
  {
    id: "capylibra",
    name: "Capylibra",
    category: "Hamburguesas",
    description: "Doble medallón de 110g, Cuádruple Cheddar, Ketchup, Mostaza y Cebolla Brunoise. (Viene con papas fritas)",
    price: 10000,
    img: "/images/burgas/mega-provo.png", // Generic placeholder
  },
  {
    id: "capybbq",
    name: "CapyBBQ",
    category: "Hamburguesas",
    description: "Doble medallón de 110g, Cuádruple Cheddar, Barbacoa y Cebolla en aros. (Viene con papas fritas)",
    price: 10000,
    img: "/images/burgas/bbq-crunchy.png",
  },
  {
    id: "capymelt",
    name: "CapyMelt",
    category: "Hamburguesas",
    description: "Doble medallón de 110g, Quíntuple Cheddar, Mayonesa y Cebolla Grillada. (Viene con papas fritas)",
    price: 10500,
    img: "/images/burgas/oklahoma.png", // Placeholder
  },
  {
    id: "capyfull",
    name: "CapyFull",
    category: "Hamburguesas",
    description: "Doble medallón de 110g, Cuádruple Cheddar, Huevo, Lechuga y Tomate (Opcional Mayonesa). (Viene con papas fritas)",
    price: 11000,
    img: "/images/burgas/clasica-argenta.png",
  },
  {
    id: "capynator",
    name: "CapyNator",
    category: "Hamburguesas",
    description: "Doble medallón de 110g, Cuádruple Cheddar, Mayonesa, Ketchup, y Cuádruple Bacon. (Viene con papas fritas)",
    price: 12000,
    img: "/images/burgas/cheese-bacon-doble-new.png",
  },
  {
    id: "capypower",
    name: "CapyPower",
    category: "Hamburguesas",
    description: "Doble medallón de 110g, Cuádruple Cheddar, Doble Huevo y Cuádruple Bacon (Opcional Mayonesa). (Viene con papas fritas)",
    price: 13000,
    img: "/images/burgas/capypower.png",
  },
  {
    id: "capyaro",
    name: "CapyAro",
    category: "Hamburguesas",
    description: "Salsa Alioli, 3 Aros de Cebolla, Doble medallón, Cheddar. (Viene con papas fritas)",
    price: 11000,
    img: "/images/burgas/capyaro.png",
  },
  {
    id: "doble-bacon-new",
    name: "Doble Bacon",
    category: "Hamburguesas",
    description: "Doble medallón, Doble Cheddar, Abundante Panceta. (Viene con papas fritas)",
    price: 11500,
    img: "/images/burgas/doble-bacon-custom.png",
  },
];

export const papas = [
  // PAPAS
  {
    id: "papas-simple",
    name: "Papas Simple",
    category: "Papas",
    description: "Bandeja de Papas.",
    price: 5500,
    img: "/images/papas/papasfritas.png",
  },
  {
    id: "papas-cheddar",
    name: "Papas Cheddar",
    category: "Papas",
    description: "Bandeja de Papas con Cheddar.",
    price: 7500,
    img: "/images/papas/papas-cheddar.png",
  },
  {
    id: "papas-cheddar-bacon",
    name: "Papas Cheddar & Bacon",
    category: "Papas",
    description: "Bandeja de Papas con Cheddar y Bacon.",
    price: 9500,
    img: "/images/papas/papas-crunchy.png",
  },
  {
    id: "papas-completa",
    name: "Papas Completa",
    category: "Papas",
    description: "Bandeja de Papas con Cheddar, Bacon y Verdeo.",
    price: 10500,
    img: "/images/papas/papacompleta.png",
  },
  // ENTRADAS (Nuggets)
  {
    id: "nuggets-6",
    name: "Nuggets x6",
    category: "Papas", // Keeping in papas category to show in sides/entries section if consistent with previous app
    description: "Nuggets x6, Dip de Salsa.",
    price: 5000,
    img: "/images/papas/nuggets-papas.png",
  },
  {
    id: "nuggets-12",
    name: "Nuggets x12",
    category: "Papas",
    description: "Nuggets x12, Dip de Salsa.",
    price: 8000,
    img: "/images/papas/nuggets-papas.png",
  },
];

export const combos = []; // No combos in menu images

export const bebidas = [
  {
    id: "coca-500",
    name: "Coca-Cola 500cc",
    category: "Bebidas",
    description: "Botella personal.",
    price: 2000,
    img: "/images/bebidas/coca_500.png",
  },
  {
    id: "sprite-500",
    name: "Sprite 500cc",
    category: "Bebidas",
    description: "Botella personal.",
    price: 2000,
    img: "/images/bebidas/sprite_500.png",
  },
];

export const postres = [];

export const extras = [
  { id: "extra-medallon", name: "Medallón de 110g, Doble cheddar", price: 3600, category: "Extras" },
  { id: "extra-salsas", name: "Salsa a elección", price: 1200, category: "Extras" },
  { id: "extra-bacon", name: "Dos tiras de Bacon", price: 2000, category: "Extras" },
  { id: "extra-cheddar", name: "Cheddar líquido (para papas)", price: 2000, category: "Extras" },
  { id: "extra-cebolla", name: "Cebolla en aros", price: 1000, category: "Extras" },
];
