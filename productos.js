// productos.js — Catálogo central de Satoru Fénix Events
//
// Esto es la ÚNICA fuente de verdad del catálogo. Para cambiar cantidad, precio,
// nombre o agregar un producto nuevo, se edita SOLO acá — el catálogo visual y
// el mensaje de WhatsApp se arman automáticamente a partir de esto.

const WHATSAPP_NUMBER = "5493757626730";

const CATEGORIES = {
  "free-fire":        { subBrand: "SATORU DIMAS",          label: "Diamantes Free Fire" },
  "robux":             { subBrand: "SATO ROBUXS",           label: "Robux" },
  "ig-seguidores":     { subBrand: "INSTAGRAM SEGUIDORES",  label: "Seguidores de Instagram" },
  "ig-likes":          { subBrand: "ME GUSTA ❤️",           label: "Me gusta de Instagram" },
  "bloodstrike-gold":  { subBrand: "SATORU BLOODS",         label: "Gold Blood Strike" },
  "bloodstrike-pass":  { subBrand: "SATORU BLOODS",         label: "Pases Blood Strike" },
};

const PRODUCTS = [
  // ---- Free Fire — Diamantes ----
  { id: "ff-110",   category: "free-fire", name: "110 💎",   quantity: 110,   price: 1700 },
  { id: "ff-341",   category: "free-fire", name: "341 💎",   quantity: 341,   price: 5600 },
  { id: "ff-572",   category: "free-fire", name: "572 💎",   quantity: 572,   price: 6800 },
  { id: "ff-1166",  category: "free-fire", name: "1.166 💎", quantity: 1166,  price: 14500 },
  { id: "ff-2398",  category: "free-fire", name: "2.398 💎", quantity: 2398,  price: 24400 },
  { id: "ff-6160",  category: "free-fire", name: "6.160 💎", quantity: 6160,  price: 60300 },

  // ---- Roblox — Robux ----
  { id: "rbx-100",  category: "robux", name: "100 Robux",  quantity: 100,  price: 1800 },
  { id: "rbx-200",  category: "robux", name: "200 Robux",  quantity: 200,  price: 3100 },
  { id: "rbx-300",  category: "robux", name: "300 Robux",  quantity: 300,  price: 4200 },
  { id: "rbx-400",  category: "robux", name: "400 Robux",  quantity: 400,  price: 6300 },
  { id: "rbx-500",  category: "robux", name: "500 Robux",  quantity: 500,  price: 7400 },
  { id: "rbx-600",  category: "robux", name: "600 Robux",  quantity: 600,  price: 9200,  featured: true },
  { id: "rbx-700",  category: "robux", name: "700 Robux",  quantity: 700,  price: 10000, featured: true },
  { id: "rbx-800",  category: "robux", name: "800 Robux",  quantity: 800,  price: 14400, featured: true },
  { id: "rbx-900",  category: "robux", name: "900 Robux",  quantity: 900,  price: 15500, featured: true },
  { id: "rbx-1000", category: "robux", name: "1.000 Robux", quantity: 1000, price: 17100, featured: true },
  { id: "rbx-2000", category: "robux", name: "2.000 Robux", quantity: 2000, price: 23500, tag: "Pack Pro" },

  // ---- Instagram — Seguidores ----
  { id: "igf-1000",  category: "ig-seguidores", name: "1.000 seguidores",  quantity: 1000,  price: 3700 },
  { id: "igf-2000",  category: "ig-seguidores", name: "2.000 seguidores",  quantity: 2000,  price: 7600 },
  { id: "igf-3000",  category: "ig-seguidores", name: "3.000 seguidores",  quantity: 3000,  price: 7900 },
  { id: "igf-4000",  category: "ig-seguidores", name: "4.000 seguidores",  quantity: 4000,  price: 9800 },
  { id: "igf-5000",  category: "ig-seguidores", name: "5.000 seguidores",  quantity: 5000,  price: 11100 },
  { id: "igf-10000", category: "ig-seguidores", name: "10.000 seguidores", quantity: 10000, price: 20500 },
  { id: "igf-15000", category: "ig-seguidores", name: "15.000 seguidores", quantity: 15000, price: 25000 },
  { id: "igf-20000", category: "ig-seguidores", name: "20.000 seguidores", quantity: 20000, price: 30000 },

  // ---- Instagram — Me gusta ----
  { id: "igl-100",  category: "ig-likes", name: "100 ❤️",   quantity: 100,  price: 1500 },
  { id: "igl-250",  category: "ig-likes", name: "250 ❤️",   quantity: 250,  price: 1650 },
  { id: "igl-500",  category: "ig-likes", name: "500 ❤️",   quantity: 500,  price: 1800 },
  { id: "igl-1000", category: "ig-likes", name: "1.000 ❤️", quantity: 1000, price: 3800 },
  { id: "igl-2500", category: "ig-likes", name: "2.500 ❤️", quantity: 2500, price: 5500 },
  { id: "igl-5000", category: "ig-likes", name: "5.000 ❤️", quantity: 5000, price: 8500 },

  // ---- Blood Strike — Gold ----
  { id: "bsg-51",   category: "bloodstrike-gold", name: "51 Gold",   quantity: 51,   price: 967 },
  { id: "bsg-105",  category: "bloodstrike-gold", name: "105 Gold",  quantity: 105,  price: 1867 },
  { id: "bsg-320",  category: "bloodstrike-gold", name: "320 Gold",  quantity: 320,  price: 4467 },
  { id: "bsg-540",  category: "bloodstrike-gold", name: "540 Gold",  quantity: 540,  price: 7167 },
  { id: "bsg-1100", category: "bloodstrike-gold", name: "1.100 Gold", quantity: 1100, price: 13267 },
  { id: "bsg-2260", category: "bloodstrike-gold", name: "2.260 Gold", quantity: 2260, price: 26567 },
  { id: "bsg-5800", category: "bloodstrike-gold", name: "5.800 Gold", quantity: 5800, price: 67667 },

  // ---- Blood Strike — Pases ----
  { id: "bsp-levelup", category: "bloodstrike-pass", name: "Level-Up Pass",      quantity: 1, price: 3767 },
  { id: "bsp-elite",   category: "bloodstrike-pass", name: "Strike Pass Elite",   quantity: 1, price: 7667 },
  { id: "bsp-premium", category: "bloodstrike-pass", name: "Strike Pass Premium", quantity: 1, price: 14567 },
];

// Plantillas de mensaje de WhatsApp por categoría — cada una arma el mensaje
// según lo que definiste en tu documento original. Robux no pide usuario ni
// contraseña: el canje lo hace el cliente con el código, no nosotros.
const MESSAGE_TEMPLATES = {
  "free-fire": (p) => `Hola Satoru 👋
Quiero realizar una compra.

Producto: ${p.name} de Free Fire
Precio: $${formatPrice(p.price)} ARS

Mi ID de jugador:
[ESCRIBIR ID]

Mi alias/nombre:
[ESCRIBIR ALIAS]

Quedo atento a las instrucciones de pago.
En cuanto realice el pago te envío el comprobante.`,

  "robux": (p) => `Hola Satoru 👋
Quiero realizar una compra.

Producto: ${p.name}
Precio: $${formatPrice(p.price)} ARS

Quedo atento a las instrucciones para canjear el código en mi cuenta.`,

  "ig-seguidores": (p) => `Hola Satoru 👋
Quiero realizar una compra.

Servicio: ${p.name} de Instagram
Precio: $${formatPrice(p.price)} ARS

Mi usuario/perfil de Instagram:
[ESCRIBIR USUARIO O ENLACE]

Quedo atento a las instrucciones para continuar.`,

  "ig-likes": (p) => `Hola Satoru 👋
Quiero realizar una compra.

Servicio: ${p.name} de Instagram
Precio: $${formatPrice(p.price)} ARS

Mi usuario/perfil o el link de la publicación:
[ESCRIBIR USUARIO O LINK]

Quedo atento a las instrucciones para continuar.`,

  "bloodstrike-gold": (p) => `Hola Satoru 👋
Quiero realizar una compra.

Producto: ${p.name} de Blood Strike
Precio: $${formatPrice(p.price)} ARS

Mi ID de jugador:
[ESCRIBIR ID]

Quedo atento a las instrucciones de pago.`,

  "bloodstrike-pass": (p) => `Hola Satoru 👋
Quiero realizar una compra.

Producto: ${p.name}
Precio: $${formatPrice(p.price)} ARS

Mi ID de jugador:
[ESCRIBIR ID]

Quedo atento a las instrucciones de pago.`,
};

function formatPrice(amount) {
  return amount.toLocaleString("es-AR");
}

// Arma el link de WhatsApp listo para usar en el botón "Comprar ahora".
function buildWhatsAppLink(product) {
  const template = MESSAGE_TEMPLATES[product.category];
  const message = template(product);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Devuelve todos los productos de una categoría (para renderizar el catálogo).
function getProductsByCategory(categorySlug) {
  return PRODUCTS.filter((p) => p.category === categorySlug);
   }
    
