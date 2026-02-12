// PIZZAS
export const pizzas = [
  {
    id: "pizza-muzarella",
    name: "Muzza",
    category: "Pizzas",
    description: "Salsa de tomate, muzza, aceitunas y orégano.",
    price: 9500,
    img: "/images/pizzas/muzza_real.png",
  },
  {
    id: "pizza-doble-muzza",
    name: "Doble Muzza",
    category: "Pizzas",
    description: "Doble carga de muzzarella.",
    price: 11500,
    img: "/images/pizzas/doble_muzza_real.png",
  },
  {
    id: "pizza-bonanza",
    name: "Pizza La Bonanza",
    category: "Pizzas",
    description: "Muzza, papas fritas, salchicha, huevo frito, cheddar, bacon.",
    price: 20000,
    img: "/images/pizzas/la_bonanza_real.png",
  },
  {
    id: "pizza-roquefort",
    name: "Muzza Roque Fort",
    category: "Pizzas",
    description: "Salsa de tomate, muzza, roquefort.",
    price: 13000,
    img: "/images/pizzas/roquefort.jpg",
  },
  {
    id: "pizza-rucula",
    name: "Rúcula, Jamón Crudo y Parmesano",
    category: "Pizzas",
    description: "Rúcula, Jamón Crudo y Parmesano.",
    price: 16500,
    img: "/images/pizzas/rucula_jamon_parmesano.jpg",
  },
  {
    id: "pizza-napolitana",
    name: "Napolitana",
    category: "Pizzas",
    description: "Tomate en rodajas, muzza, ajo y orégano.",
    price: 11500,
    img: "/images/pizzas/pizza-napo.png",
  },
  {
    id: "pizza-calabresa",
    name: "Calabresa",
    category: "Pizzas",
    description: "Muzza, longaniza calabresa y aceitunas.",
    price: 15500,
    img: "/images/pizzas/calabresa_real.png",
  },
  {
    id: "pizza-jamon-morron",
    name: "Jamon y Morron",
    category: "Pizzas",
    description: "Salsa de tomate, muzza, jamon y morron.",
    price: 13500,
    img: "/images/pizzas/jamon_morron_real.png",
  },
  {
    id: "pizza-jamon",
    name: "Jamon",
    category: "Pizzas",
    description: "Salsa de tomate, muzza, jamon.",
    price: 12000,
    img: "/images/pizzas/Pizza-Jamon.png",
  },
  {
    id: "pizza-fugazzeta",
    name: "Fugazzeta",
    category: "Pizzas",
    description: "Cebolla caramelizada, muzza y orégano.",
    price: 10000,
    img: "/images/pizzas/fugazzeta_real.jpg",
  },
  {
    id: "pizza-fugazzeta-rellena",
    name: "Fugazzeta Rellena",
    category: "Pizzas",
    description: "Jamón, tomate, huevo, calabresa, morron, muzzarella y cebolla.", // User puso "Calabreza", dejo calabresa standard
    price: 26000,
    img: "/images/pizzas/fugazzeta_rellena_real.png",
  },
  {
    id: "pizza-panceta-huevo",
    name: "Panceta y Huevo",
    category: "Pizzas",
    description: "Panceta y Huevo Frito.",
    price: 15500,
    img: "/images/pizzas/panceta_huevo_real.png",
  },
  {
    id: "pizza-jamon-huevo",
    name: "Jamón y Huevo",
    category: "Pizzas",
    description: "Salsa de tomate, muzza, jamón y huevo.",
    price: 13500,
    img: "/images/pizzas/Pizza-Jamon.png",
  },
  {
    id: "pizza-jamon-tomate-huevo",
    name: "Jamón, Tomate y Huevo",
    category: "Pizzas",
    description: "Salsa de tomate, muzza, jamón, tomate y huevo.",
    price: 15500,
    img: "/images/pizzas/napoconjamon.jpg",
  },
  {
    id: "pizza-muzarella-huevo",
    name: "Muzza + Huevo",
    category: "Pizzas",
    description: "Salsa de tomate, muzza, huevo picado.",
    price: 12000,
    img: "/images/pizzas/muzza_huevo_real.png",
  },
  // {
  //   id: "pizza-mitad",
  //   name: "Mitad y Mitad",
  //   category: "Pizzas",
  //   description: "Selceccione las pizzas mitad y mitad que tenemos para ofrecer.",
  //   price: 0,
  //   img: "/images/pizzas/mitad.png",
  // },
];

// EMPANADAS
export const empanadas = [
  {
    id: "emp-docena",
    name: "Docena de empanadas",
    category: "Empanadas",
    description: "12 empanadas a elección.",
    price: 22000,
    img: "/images/empanadas/doce.jpg",
    upsell: true, // abre el modal
  },
  {
    id: "emp-media-docena",
    name: "Media docena de empanadas",
    category: "Empanadas",
    description: "6 empanadas a elección.",
    price: 12000,
    img: "/images/empanadas/media.png",
    upsell: true, // abre el modal
  },
  {
    id: "emp-carne",
    name: "Empanada de Carne",
    category: "Empanadas",
    description: "Carne picada condimentada.",
    price: 2200,
    img: "/images/empanadas/empanadacarne.png",
  },
  {
    id: "emp-jyq",
    name: "Empanada de jamón y queso",
    category: "Empanadas",
    description: "Jamón y queso.",
    price: 2200,
    img: "/images/empanadas/empanada-jyq.png",
  },
  {
    id: "emp-pollo",
    name: "Empanada de Pollo",
    category: "Empanadas",
    description: "Pollo trozado y condimentos.",
    price: 2200,
    img: "/images/empanadas/empanadapollo.jpg",
  },
  {
    id: "emp-humita",
    name: "Empanada de Humita",
    category: "Empanadas",
    description: "Choclo y salsa blanca.",
    price: 2200,
    img: "/images/empanadas/empanada-humita.png",
  },
  {
    id: "emp-cebolla-queso",
    name: "Empanada de Cebolla y Queso",
    category: "Empanadas",
    description: "Cebolla y queso.",
    price: 2200,
    img: "/images/empanadas/cebolla_queso.jpg",
  },
  {
    id: "emp-calabresa",
    name: "Empanada de Calabresa",
    category: "Empanadas",
    description: "Calabresa.",
    price: 2200,
    img: "/images/empanadas/calabresa.jpg",
  },

  {
    id: "emp-roquefort",
    name: "Empanada de Roquefort",
    category: "Empanadas",
    description: "Roquefort",
    price: 2200,
    img: "/images/empanadas/roqu.jpg",
  },
  {
    id: "emp-cheeseburger",
    name: "Empanada Chesse burger",
    category: "Empanadas",
    description: "Carne, cheddar y panceta.",
    price: 2200,
    img: "/images/empanadas/empanada-cheeseburger.png",
  },
];

//Milanesas
export const milanesas = [
  // Platos XXL y Para dos
  {
    id: "mila-caballo-xxl",
    name: "Mila a Caballo XXL",
    description: "Milanesa con huevos fritos y papas fritas. Comen 3/4 personas.",
    price: 22000,
    img: "/images/mila/mila_caballo_real.png",
  },
  {
    id: "mila-caballo-2",
    name: "Mila a Caballo (Para dos)",
    description: "Milanesa con huevos fritos y papas fritas. Para dos personas.",
    price: 19000,
    img: "/images/mila/mila_caballo_real.png",
  },
  {
    id: "mila-super-bonanza-xxl",
    name: "Mila Súper Bonanza XXL",
    description: "La especial de la casa. Incluye papas fritas. Comen 3/4 personas.",
    price: 28500,
    img: "/images/mila/mila_super_bonanza_real.png",
  },
  {
    id: "mila-super-bonanza-2",
    name: "Mila Súper Bonanza (Para dos)",
    description: "La especial de la casa. Incluye papas fritas. Para dos personas.",
    price: 26000,
    img: "/images/mila/mila_super_bonanza_real.png",
  },
  {
    id: "mila-napo-xxl",
    name: "Mila Napolitana XXL",
    description: "Salsa de tomate, jamón, queso y orégano. Incluye papas fritas. Comen 3/4 personas.",
    price: 25000,
    img: "/images/mila/mila_napo_real.png",
  },
  {
    id: "mila-napo-2",
    name: "Mila Napolitana (Para dos)",
    description: "Salsa de tomate, jamón, queso y orégano. Incluye papas fritas. Para dos personas.",
    price: 22000,
    img: "/images/mila/mila_napo_real.png",
  },
  {
    id: "mila-napo-huevo-xxl",
    name: "Mila Napo con Huevo Frito XXL",
    description: "Napolitana con huevo frito e incluye papas fritas. Comen 3/4 personas.",
    price: 26000,
    img: "/images/mila/napoalplato.jpg",
  },
  {
    id: "mila-napo-huevo-2",
    name: "Mila Napo con Huevo Frito (Para dos)",
    description: "Napolitana con huevo frito e incluye papas fritas. Para dos personas.",
    price: 24000,
    img: "/images/mila/napoalplato.jpg",
  },
  {
    id: "mila-cheddar-bacon-xxl",
    name: "Mila con Cheddar y Bacon XXL",
    description: "Cheddar y bacon crocante. Incluye papas fritas. Comen 3/4 personas.",
    price: 26000,
    img: "/images/mila/chedarypanceta.png",
  },
  {
    id: "mila-fugazzeta-xxl",
    name: "Mila Fugazzeta XXL",
    description: "Cebolla y queso. Incluye papas fritas. Comen 3/4 personas.",
    price: 23000,
    img: "/images/mila/milaalplato.png",
  },

  // Sándwiches
  {
    id: "sand-mila-napo",
    name: "Sándwich Napolitano",
    description: "Sándwich de milanesa napolitana con papas fritas.",
    price: 16000,
    img: "/images/mila/sanwichlt.jpg",
  },
  {
    id: "sand-mila-fugazzeta",
    name: "Sándwich Fugazzeta",
    description: "Sándwich de milanesa fugazzeta con papas fritas.",
    price: 13500,
    img: "/images/mila/sanwichlt.jpg",
  },
  {
    id: "sand-mila-completo",
    name: "Sándwich Completo",
    description: "Lechuga, tomate, jamón, queso y huevo. Con papas fritas.",
    price: 18000,
    img: "/images/mila/sandwich_completo.jpg",
  },
  {
    id: "sand-mila-bonanza",
    name: "Sándwich Bonanza",
    description: "Especial Bonanza. Con papas fritas.",
    price: 18500,
    img: "/images/mila/milacomp.jpg",
  },


  // Papas Fritas
  {
    id: "papas-simples",
    name: "Papas Simples",
    description: "Porción de papas fritas clásicas.",
    price: 6000,
    img: "/images/mila/papas.jpg",
  },
  {
    id: "papas-completas",
    name: "Papas Completas",
    description: "Cheddar, verdeo y bacon.",
    price: 8000,
    img: "/images/mila/chedarypanceta.png",
  },
];

// POSTRES
export const postres = [
  // {
  //  id: "flan-casero",
  // name: "Flan casero",
  // category: "Postres",
  //description: "Flan casero con dulce de leche o crema.",
  //price: 2000,
  //img: "/images/postres/flan.png",
  //},
  //{
  //id: "helado-1k",
  //name: "Helado 1kg",
  //category: "Postres",
  //description: "Varios sabores a elección.",
  //price: 4500,
  //img: "/images/postres/helado.png",
  //},
];


//PROMOS
export const promos = [
  {
    id: "promo-3",
    name: "3 Muzzas",
    description: "Pizza muzza grande x3.",
    price: 23000,
    img: "/images/promo.png",
  },
];

// Agregados
// Extras para pizzas
export const extrasPizza = [
  {
    id: "al-molde",
    name: "Al Molde 🍕🟫",
    price: 0,
    category: "Extras",
  },
  {
    id: "ala-piedra",
    name: "A la Piedra 🔥🍕",
    price: 0,
    category: "Extras",
  },
  {
    id: "extra-anchoas-cmp",
    name: "Extra Anchoas Completa 🍤",
    price: 2000,
    category: "Extras",
  },
  {
    id: "extra-anchoas-mit",
    name: "Extra Anchoas Mitad 🍤",
    price: 1000,
    category: "Extras",
  },
  {
    id: "huevo",
    name: "Extra Huevo 🍳",
    price: 1500,
    category: "Extras",
  }
];

// 🔥 NUEVO: extras especiales para la pizza "Mitad y Mitad"
export const extrasMitad = [
  // Mantiene molde / piedra
  {
    id: "al-molde-mitad",
    name: "Al Molde 🍕🟫",
    price: 0,
    category: "Extras Mitad",
  },
  {
    id: "ala-piedra-mitad",
    name: "A la Piedra 🔥🍕",
    price: 0,
    category: "Extras Mitad",
  },

  // Combos de mitad y mitad (podés agregar todos los que quieras)
  {
    id: "mitad-muzza-jm",
    name: "1/2 Muzza + 1/2 Jamón y Morrón",
    price: 15000,
    category: "Mitad y Mitad",
  },
  {
    id: "mitad-muzza-napo",
    name: "1/2 Muzza + 1/2 Napolitana",
    price: 15000,
    category: "Mitad y Mitad",
  },
  {
    id: "mitad-napo-jm",
    name: "1/2 Napolitana + 1/2 Jamón y Morrón",
    price: 15000,
    category: "Mitad y Mitad",
  },
  {
    id: "mitad-calabresa-muzza",
    name: "1/2 Calabresa + 1/2 Muzza",
    price: 15000,
    category: "Mitad y Mitad",
  },
  // …seguí agregando las combinaciones que quieras
];
