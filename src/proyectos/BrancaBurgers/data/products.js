export const promos = [];

export const hamburguesas = [
  {
    id: "branca-simple",
    name: "Simple",
    category: "Hamburguesas",
    description: "Carne, doble cheddar.", // $9800
    price: 9800,
    img: "/images/branca/real_simple.png",
  },
  {
    id: "branca-doble",
    name: "Doble",
    category: "Hamburguesas",
    description: "Doble carne, triple cheddar.", // $10300
    price: 10300,
    img: "/images/branca/real_doble.png",
  },
  {
    id: "branca-triple",
    name: "Triple",
    category: "Hamburguesas",
    description: "Triple carne, Cuádruple cheddar, Bacon.", // $11600
    price: 11600,
    img: "/images/branca/real_triple.png",
  },
  {
    id: "branca-scooby",
    name: "Scooby",
    category: "Hamburguesas",
    description: "Doble carne, triple cheddar, Bacon, huevo, Cebolla caramelizada.", // $11300
    price: 11300,
    img: "/images/branca/real_scooby.png",
  },
  {
    id: "branca-crispy",
    name: "Branca crispy",
    category: "Hamburguesas",
    description: "Doble carne, triple cheddar, cebolla crispy, bacon, salsa barbacoa.", // $11300
    price: 11300,
    img: "/images/branca/real_crispy.png",
  },
  {
    id: "branca-napolitana",
    name: "Napolitana",
    category: "Hamburguesas",
    description: "Doble carne, doble queso, tómate, jamón.", // $11300
    price: 11300,
    img: "/images/branca/real_napolitana.png",
  },
  {
    id: "branca-clasica",
    name: "Clásica",
    category: "Hamburguesas",
    description: "Doble carne, lechuga, tómate, cheddar.", // $11300
    price: 11300,
    img: "/images/branca/real_clasica.png",
  },
  {
    id: "branca-chicken",
    name: "Chicken Burger",
    category: "Hamburguesas",
    description: "Medallón de pollo, cheddar, tomate, lechuga.", // $11300
    price: 11300,
    img: "/images/branca/real_chicken.png",
  },
];

export const milanesas = [
  {
    id: "mila-sandwich",
    name: "Sandwich de Mila Completo",
    category: "Milanesas",
    description: "Jamon, queso, lechuga, tomate, huevos fritos. (Incluye papas)", // $22000
    price: 22000,
    img: "/images/branca/branca_sandwich_mila_1767966753636.png",
  },
  {
    id: "mila-napo",
    name: "Milanesa napolitana de carne al plato",
    category: "Milanesas",
    description: "Con guarnición de papas fritas.", // $13900
    price: 13900,
    img: "/images/branca/branca_mila_napo_1767966768411.png",
  },
  {
    id: "mila-caballo",
    name: "Milanesa a caballo al plato",
    category: "Milanesas",
    description: "Con dos huevos fritos y guarnición de papas.", // $13000
    price: 13000,
    img: "/images/branca/branca_mila_caballo.png",
  },
];

export const pastas = [
  {
    id: "raviolones",
    name: "Raviolones",
    category: "Pastas",
    description: "Sabores: Caprese, Espinaca y pollo, Muzza ricota y nuez, Espinaca y muzzarela.", // $5800
    price: 5800,
    img: "/images/branca/real_raviolones.png",
    upsell: true,
    flavors: [
      { id: "rav-caprese", name: "Caprese", price: 0, category: "Sabores" },
      { id: "rav-esp-pollo", name: "Espinaca y pollo", price: 0, category: "Sabores" },
      { id: "rav-ric-nuez", name: "Muzza, ricota y nuez", price: 0, category: "Sabores" },
      { id: "rav-esp-muzza", name: "Espinaca y muzzarela", price: 0, category: "Sabores" },
    ],
  },
  {
    id: "sorrentinos",
    name: "Sorrentinos",
    category: "Pastas",
    description: "Sabores: Jamón y muzzarela, Ricota y muzzarela, Espinaca y ricota, Espinaca y pollo.", // $5800
    price: 5800,
    img: "/images/branca/real_sorrentinos.png",
    upsell: true,
    flavors: [
      { id: "sor-jam-muzza", name: "Jamón y muzzarela", price: 0, category: "Sabores" },
      { id: "sor-ric-muzza", name: "Ricota y muzzarela", price: 0, category: "Sabores" },
      { id: "sor-esp-ric", name: "Espinaca y ricota", price: 0, category: "Sabores" },
      { id: "sor-esp-pollo", name: "Espinaca y pollo", price: 0, category: "Sabores" },
    ],
  },
  {
    id: "fideos-huevo",
    name: "Fideos al Huevo (1/2 kg)",
    category: "Pastas",
    description: "Pasta fresca artesanal.",
    price: 4000,
    img: "/images/branca/real_fideos.png",
  },
];

export const infantil = [
  {
    id: "kids-nuggets",
    name: "Porción de 6 Nuggets",
    category: "Menú Infantil",
    description: "", // $9200
    price: 9200,
    img: "/images/branca/branca_nuggets_1767966726190.png",
  },
  {
    id: "kids-burger",
    name: "Hamburguesa simple solo carne",
    category: "Menú Infantil",
    description: "Solo carne y pan.", // $9200
    price: 9200,
    img: "/images/branca/real_kids_burger.png",
    upsell: true,
  },
];

export const papas = [
  {
    id: "papas-simple",
    name: "Porción de papas solas",
    category: "Papas",
    description: "Porción de papas fritas.",
    price: 8500,
    img: "/images/branca/branca_papas_simple_1767967527182.png",
  },
  {
    id: "papas-cheddar-bacon",
    name: "Con cheddar y bacon",
    category: "Papas",
    description: "Papas fritas bañadas en cheddar con trocitos de bacon.",
    price: 9500,
    img: "/images/branca/branca_papas_cheddar_bacon_1767967541955.png",
  },
  {
    id: "papas-completa",
    name: "Con cheddar, bacon y verdeo",
    category: "Papas",
    description: "Papas fritas con cheddar, bacon y cebolla de verdeo.",
    price: 9900,
    img: "/images/branca/branca_papas_completa_1767967556175.png",
  },
];

export const combos = [];

export const bebidas = [
  {
    id: "coca-225",
    name: "Coca-Cola 2.25L",
    category: "Bebidas",
    description: "Botella familiar.",
    price: 5000,
    img: "/images/branca/coca_225.png",
  },
  {
    id: "sprite-225",
    name: "Sprite 2.25L",
    category: "Bebidas",
    description: "Botella familiar.",
    price: 5000,
    img: "/images/branca/sprite_225.png",
  },
];

export const postres = [];

export const extras = [
  { id: "extra-lechuga", name: "Lechuga", price: 1000, category: "Extras" },
  { id: "extra-tomate", name: "Tomate", price: 1000, category: "Extras" },
  { id: "extra-huevo", name: "Huevo", price: 1000, category: "Extras" },
  { id: "extra-bacon", name: "Bacon", price: 1000, category: "Extras" },
  { id: "extra-cheddar", name: "Extra cheddar", price: 1000, category: "Extras" },
  { id: "extra-jamon", name: "Jamón", price: 1000, category: "Extras" },
  { id: "extra-carne", name: "Medallón de carne", price: 2500, category: "Extras" },
  { id: "extra-carne-cheddar", name: "Medallón con cheddar", price: 3000, category: "Extras" },
];
