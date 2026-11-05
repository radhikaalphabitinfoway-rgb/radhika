export const COLLECTIONS = [
  { slug: "all", label: "All products" },
  { slug: "sofa-beds", label: "Sofa Beds" },
  { slug: "sofas", label: "Sofas" },
  { slug: "mattresses", label: "Mattresses" },
  { slug: "bedroom", label: "Bedroom" },
  { slug: "outdoor", label: "Outdoor" },
];

export const PRODUCTS = [
  {
    id: "koala-sofa-bed",
    name: "Koala Sofa Bed",
    price: 1999,
    category: "sofa-beds",
    tag: "Bestseller",
    from: "#d7e1d5",
    to: "#91aa8c",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",
    desc: "A versatile sofa bed designed for relaxing, lounging and overnight guests.",
  },
  {
    id: "wanda-sofa-bed",
    name: "Wanda Sofa Bed",
    price: 1499,
    category: "sofa-beds",
    tag: "Small spaces",
    from: "#e5dcef",
    to: "#b7a4d0",
    image:
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=1000&q=85",
    desc: "A compact, comfortable sofa bed for spare rooms and smaller homes.",
  },
  {
    id: "torquay-modular",
    name: "Torquay Modular Sofa",
    price: 2299,
    category: "sofas",
    tag: "Popular",
    from: "#ead9c5",
    to: "#bba083",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",
    desc: "A welcoming modular sofa for your everyday living space.",
  },
  {
    id: "koala-mattress",
    name: "Koala Mattress",
    price: 899,
    category: "mattresses",
    tag: "Sleep better",
    from: "#dce7ef",
    to: "#91aec4",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85",
    desc: "A comfortable mattress for a restful night and a relaxed morning.",
  },
  {
    id: "kirribilli-base",
    name: "Kirribilli Bed Base",
    price: 699,
    category: "bedroom",
    tag: "New",
    from: "#e8e1d7",
    to: "#a99a85",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85",
    desc: "A simple, sturdy bed base that complements a thoughtfully styled bedroom.",
  },
  {
    id: "torakina-dining",
    name: "Torakina Outdoor Set",
    price: 1299,
    category: "outdoor",
    tag: "Outdoor",
    from: "#d5e3d0",
    to: "#8eaa83",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    desc: "Create a welcoming space for outdoor meals and relaxed gatherings.",
  },
];

export const formatPrice = (price) =>
  new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(price);