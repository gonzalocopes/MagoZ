
export const combos = [

  {
    id: "stella-pack-6",
    name: "Pack x6 Stella Artois",
    category: "Combos",
    description: "Pack de 6 unidades 330ml.",
    price: 18000,
    img: "/images/pack_stella.png",
  },
  {
    id: "combo-sky-sprite",
    name: "COMBO Skyy + Sprite",
    category: "Combos",
    description: "Skyy Vodka (Sabor a elección) + Sprite 2.25L. Incluye vaso 1lt con hielo.",
    price: 19000,
    img: "/images/combo_skyy_pro.png",
    flavors: ["Skyy Cosmic", "Skyy Raspberry"], // Opciones de sabor
  },
  {
    id: "combo-sky-speed",
    name: "COMBO Skyy + 2 Speed XL",
    category: "Combos",
    description: "Skyy Vodka (Sabor a elección) + 2 Speed XL. Incluye vaso 1lt con hielo.",
    price: 20000,
    img: "/images/combo_skyy_speed_pro.png",
    flavors: ["Skyy Cosmic", "Skyy Raspberry"], // Opciones de sabor
  },
  {
    id: "combo-sky-cepita",
    name: "COMBO Skyy + Cepita",
    category: "Combos",
    description: "Skyy Vodka (Sabor a elección) + Cepita Naranja 1L. Incluye vaso 1lt con hielo.",
    price: 18000,
    img: "/images/combo_skyy_cepita.png",
    flavors: ["Skyy Cosmic", "Skyy Raspberry"],
  },
  {
    id: "combo-fernet-coca-25",
    name: "COMBO Fernet + Coca 2.5L",
    category: "Combos",
    description: "Fernet Branca 750ml + Coca-Cola 2.5L. Incluye vaso 1lt con hielo gratis.",
    price: 25000,
    img: "/images/combo_fernet_pro.png",
  },
  {
    id: "combo-fernet-coca-175",
    name: "COMBO Fernet + 2 Cocas 1.75L",
    category: "Combos",
    description: "Fernet Branca 750ml + 2 Coca-Cola 1.75L. Incluye vaso 1lt con hielo gratis.",
    price: 26000,
    img: "/images/combo_fernet_pro.png",
  },
  {
    id: "combo-trumpeter-sprite",
    name: "COMBO Messi",
    category: "Combos",
    description: "Trumpeter + Sprite. Para que pegue más rápido 🐐. Incluye vaso 1lt con hielo gratis.",
    price: 18500,
    img: "/images/combo_messi.png",
  },
];

export const extras = [
  { id: "extra-stella", name: "Cerveza Stella 330ml", price: 3500, category: "Extras" },
  { id: "extra-coca-175", name: "Coca Cola 1.75L", price: 4800, category: "Extras" },
  { id: "extra-sprite-225", name: "Sprite 2.25L", price: 5500, category: "Extras" },
  { id: "extra-speed", name: "Speed 473ml", price: 5000, category: "Extras" },
  { id: "extra-cepita", name: "Cepita Naranja 1L", price: 3900, category: "Extras" },
  { id: "extra-monster", name: "Monster 473ml", price: 5000, category: "Extras" },
  { id: "extra-vaso", name: "Vaso 1lt (con hielo)", price: 50, category: "Extras" },
  { id: "extra-hielo", name: "Bolsa de Hielo", price: 0, category: "Extras" },
];

export const promos = [];
export const hamburguesas = [];
export const papas = [];
export const productos = [
  { id: "prod-stella", name: "Cerveza Stella 330ml", price: 3500, category: "Productos", img: "/images/stella_bottle.png", description: "Botella de vidrio 330ml." },
  { id: "prod-coca-175", name: "Coca Cola 1.75L", price: 4800, category: "Productos", img: "/images/combo_fernet_coca.png", description: "Botella plástica 1.75L." }, // Using combo image as fallback or placeholder if specific not available, specific would be better but user didn't provide
  { id: "prod-sprite-225", name: "Sprite 2.25L", price: 5500, category: "Productos", img: "/images/combo_skyy_sprite.png", description: "Botella plástica 2.25L." },
  { id: "prod-speed", name: "Speed 473ml", price: 5000, category: "Productos", img: "/images/combo_skyy_speed.png", description: "Lata 473ml." },
  { id: "prod-cepita", name: "Cepita Naranja 1L", price: 3900, category: "Productos", img: "/images/combo_skyy_cepita.png", description: "Botella de vidrio 1L." },
  { id: "prod-monster", name: "Monster 473ml", price: 5000, category: "Productos", img: "/images/logo.png", description: "Lata 473ml." },
  { id: "prod-vaso", name: "Vaso 1lt (con hielo)", price: 50, category: "Productos", img: "/images/logo.png", description: "Vaso de plástico con hielo." },
  { id: "prod-hielo", name: "Bolsa de Hielo", price: 0, category: "Productos", img: "/images/logo.png", description: "Bolsa de hielo." },
];
export const postres = [];
