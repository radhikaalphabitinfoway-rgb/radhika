import { useState,useMemo } from "react";
import { Link } from "react-router-dom";
import {
  CalendarCheck,
  Wrench,
  ShieldCheck,
  Smartphone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import Newsletter from "../components/Newsletter.jsx";

const categories = [
  {
    name: "All Living Room",
    image: "//au.koala.com/cdn/shop/files/All_Living_Room.png?v=1787878746",
    path: "/collections/livingroom",
  },
  {
    name: "Sofas",
    image: "//au.koala.com/cdn/shop/files/Sofas_1.png?v=1787879471",
    path: "/collections/sofas",
  },
  {
    name: "Sofa Beds",
    image: "//au.koala.com/cdn/shop/files/SofaBed_1.png?v=1787879151",
    path: "/collections/sofa-beds",
  },
  {
    name: "Armchairs",
    image: "//au.koala.com/cdn/shop/files/Armchair_1.png?v=1787879707",
    path: "/collections/armchairs",
  },
  {
    name: "Bookshelves",
    image: "//au.koala.com/cdn/shop/files/Bookshelves_1.png?v=1787879881",
    path: "/collections/bookshelves",
  },
  {
    name: "Coffee & Side Tables",
    image: "//au.koala.com/cdn/shop/files/Kirribilli_SiteTable_1-C3ZgqvqvSdYqQ13RgyiYZ.jpg?v=1725432627",
    path: "/collections/coffee-tables",
  },
  {
    name: "Ottomans",
    image: "//au.koala.com/cdn/shop/files/Ottoman_1.png?v=1787880062",
    path: "/collections/ottomans",
  },
  {
    name: "Homewares",
    image: "//au.koala.com/cdn/shop/files/NativeBliss_Cushion_2.jpg?v=1746077196",
    path: "/collections/homewares",
  },
  {
    name: "Sofa Covers",
    image: "//au.koala.com/cdn/shop/files/Lounging_Sofa_Cover_Stormy_Sea_3-3v9GKhvjaHU7yNva1jQOx3.jpg?v=1725432775",
    path: "/collections/sofa-covers",
  },
];

const products = [
  {
    id: 1,
    name: "Tamarama Modular Sofa",
    badge: "New",
    badgeColor: "bg-[#ffdc91]",
    reviews: 24,
    sections: "2 Sections",
    sizes: "3 Sizes",
    price: 2600,
    colorNames: ["White", "Green", "Bronze", "Brown", "Black", "Grey"],
    colors: ["#ded9d0", "#626348", "#b88755", "#795748", "#536154", "#aaa69a"],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
    ],
  },
  {
    id: 2,
    name: "Torquay Modular Sofa",
    badge: "Best seller",
    badgeColor: "bg-[#dce9dd]",
    reviews: 138,
    sections: "2 Sections",
    sizes: "3 Sizes",
    price: 2400,
    colorNames: ["Cream", "Beige", "Bronze", "Brown", "Green", "Grey", "Olive"],
    colors: ["#ddd7c6", "#c7b995", "#ad8054", "#665447", "#8c8c75", "#aaa9a0", "#656a3d"],
    images: [
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
    ],
  },
  {
    id: 3,
    name: "Byron Sofa Bed [3rd Gen]",
    badge: "Living room luxe",
    badgeColor: "bg-[#e2c5c1]",
    reviews: 184,
    sections: "3.5-Seater",
    sizes: "1 Size",
    price: 2390,
    colorNames: ["Bronze", "Olive", "Cream", "Green", "Grey", "Blue", "Beige", "White"],
    colors: ["#ad8054", "#666943", "#ded8c8", "#8b8c72", "#6a6858", "#374f4c", "#c7b4a0", "#d6d2c7"],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
    ],
  },
  {
    id: 4,
    name: "Coastal 3-Seater Sofa",
    badge: "",
    badgeColor: "",
    reviews: 52,
    sections: "3-Seater",
    sizes: "2 Sizes",
    price: 1890,
    colorNames: ["Brown", "Beige", "Grey", "Green"],
    colors: ["#9e6955", "#ded4c4", "#aaa9a0", "#777a65"],
    images: [
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
    ],
  },
  {
    id: 5,
    name: "Everyday Modular Sofa",
    badge: "Best seller",
    badgeColor: "bg-[#ffddc4]",
    reviews: 89,
    sections: "2 Sections",
    sizes: "3 Sizes",
    price: 2200,
    colorNames: ["Green", "Cream", "Brown", "Grey"],
    colors: ["#838778", "#e3ded0", "#98735c", "#a6a69d"],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
    ],
  },
  {
    id: 6,
    name: "Ultimate Sofa Bed",
    badge: "Ultimate sofa bed",
    badgeColor: "bg-[#bfd0d1]",
    reviews: 76,
    sections: "3-Seater",
    sizes: "2 Sizes",
    price: 2490,
    colorNames: ["Bronze", "Green", "Cream", "Grey"],
    colors: ["#a77b52", "#65694a", "#e0d8c6", "#9a9a91"],
    images: [
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
    ],
  },
];

const bottomCategories = [
  {
    name: "Mattresses",
    image:
      "https://au.koala.com/cdn/shop/files/All_Living_Room.png?v=1787878746",
    path: "/collections/mattresses",
  },
  {
    name: "Sofa Beds",
    image:
      "https://au.koala.com/cdn/shop/files/SofaBed_1.png?v=1787879151",
    path: "/collections/sofa-beds",
  },
  {
    name: "Bed Bases",
    image:
      "https://au.koala.com/cdn/shop/files/Bed_Bases.png",
    path: "/collections/bed-bases",
  },
  {
    name: "Sofas & Couches",
    image:
      "https://au.koala.com/cdn/shop/files/Sofas_1.png?v=1787879471",
    path: "/collections/sofas",
  },
];

const recentlyViewedProducts = [
  {
    id: 1,
    name: "Byron Sofa Bed",
    badge: "Living room luxe",
    price: 2390,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=85",
    path: "/products/byron-sofa-bed",
  },
  {
    id: 2,
    name: "Comfort Sofa",
    badge: "Classic comfort",
    price: 1890,
    image:
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=700&q=85",
    path: "/collections/sofas",
  },
  {
    id: 3,
    name: "Modular Sofa",
    badge: "Best seller",
    price: 2400,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=85",
    path: "/collections/sofas",
  },
  {
    id: 4,
    name: "Everyday Sofa",
    badge: "Customer favourite",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=700&q=85",
    path: "/collections/sofas",
  },
];

const colourOptions = [
  {name:"Beige", color:"#e7d9c9"},
  {name:"Black", color:"#000000"},
  {name:"Blue", color:"#8fa4ae"},
  {name:"Bronze", color:"#d18130"},
  {name:"Brown", color:"#9c572f"},
  {name:"Gold", color:"#d9b77f"},
  {name:"Green", color:"#848774"},
  {name:"Grey", color:"#898989"},
  {name:"Navy", color:"#454451"},
  {name:"Pink", color:"#cdb2a5"},
  {name:"Purple", color:"#aa7180"},
  {name:"Red", color:"#9b6254"},
  {name:"Silver", color:"#c0c0c0"},
  {name:"White", color:"#fffefa"},
  {name:"Yellow", color:"#e5d4a1"},
];

const benefits = [
  { name: "120-day trial", Icon: CalendarCheck },
  { name: "Tool-free assembly", Icon: Wrench },
  { name: "5-year warranty", Icon: ShieldCheck },
  { name: "Washable covers", Icon: Smartphone },
];

// const navigation = [
//   "Living Room",
//   "Bedroom",
//   "Spare Room",
//   "Outdoor",
// ];


export default function LivingRoom() {
  const [selected, setSelected] = useState("All Living Room");
  const [helpOpen, setHelpOpen] = useState(false);
  const [searchText] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#171915]">
      {/* LIVING ROOM HERO */}
      <section className="relative h-[350px] overflow-hidden bg-stone-300 sm:h-[420px] lg:h-[348px]">
        <img
          src="//au.koala.com/cdn/shop/files/livingroom-sm.png?v=1776407545&width=402"
          alt="Living room sofa"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-9 z-10 px-5 md:px-10">
          <div className="mb-20 inline-flex rounded-full bg-black/30 px-4 py-2 text-sm text-white">
            <Link to="/">Home</Link>
            <span className="mx-2">/</span>
            <span>Living Room</span>
          </div>

          <h1 className="mb-7 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Living Room
          </h1>

          {/* BENEFITS */}
          <div className="flex max-w-max flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl bg-[#f8f8f4] px-6 py-3 text-sm font-medium text-[#383a32] md:rounded-full md:gap-x-7">
            {benefits.map(({ name, Icon }) => (
              <div
                key={name}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Icon size={21} strokeWidth={1.7} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="px-5 pb-5 pt-5 md:px-10">
        <div className="flex gap-3 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filteredCategories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              onClick={() => setSelected(category.name)}
              className="group w-[220px] shrink-0 text-left md:w-[246px]"
            >
              <div
                className={`aspect-[1.32/1] overflow-hidden rounded-xl bg-stone-200 ${
                  selected === category.name
                    ? "outline outline-2 outline-[#343e2d]"
                    : ""
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h2 className="mt-2 text-base font-medium tracking-tight">
                {category.name}
              </h2>
            </Link>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <p className="py-5 text-sm text-gray-500">
            No matching categories found.
          </p>
        )}
      </section>
      <LivingRoomProducts />
      <LivingRoomFAQ />
      <CategoriesRecentlyViewed />
      <Newsletter />
      {/* HELP BUTTON */}
      <button
        aria-label="Help"
        aria-expanded={helpOpen}
        onClick={() => setHelpOpen((previous) => !previous)}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#626750] shadow-lg"
      >
        <MessageCircle size={23} />
      </button>

      {helpOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-72 rounded-xl border border-[#e2e0d7] bg-white p-5 shadow-xl">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-semibold">Need help?</h2>
            <button
              onClick={() => setHelpOpen(false)}
              aria-label="Close help"
              className="text-xl"
            >
              ×
            </button>
          </div>
          <p className="text-sm text-gray-600">
            How can we help you with your living room furniture?
          </p>
        </div>
      )}
    </main>
  );
}

function LivingRoomProducts() {
  const [sortBy, setSortBy] = useState("featured");

  const [colorOpen, setColorOpen] = useState(true);
  // const [priceOpen, setPriceOpen] = useState(true);

  const [selectedColors, setSelectedColors] = useState([]);
  const [showMoreColors, setShowMoreColors] = useState(false);
  const [maxPrice, setMaxPrice] = useState(5000);

  const [slideIndexes, setSlideIndexes] = useState({});
  const [selectedSwatches, setSelectedSwatches] = useState({});

  // Toggle selected colors
  const toggleColor = (colorName) => {
    setSelectedColors((previous) =>
      previous.includes(colorName)
        ? previous.filter((color) => color !== colorName)
        : [...previous, colorName]
    );
  };

  // Change product image
  const changeSlide = (productId, direction) => {
    const product = products.find((item) => item.id === productId);

    if (!product || product.images.length === 0) return;

    setSlideIndexes((previous) => {
      const currentIndex = previous[productId] ?? 0;
      const nextIndex =
        (currentIndex + direction + product.images.length) %
        product.images.length;

      return {
        ...previous,
        [productId]: nextIndex,
      };
    });
  };

  // Filter and sort products
  const visibleProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesColor =
        selectedColors.length === 0 ||
        selectedColors.some((color) =>
          product.colorNames.includes(color)
        );

      const matchesPrice = product.price <= maxPrice;

      return matchesColor && matchesPrice;
    });

    if (sortBy === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedColors, maxPrice, sortBy]);

  // Reset all filters
  const clearFilters = () => {
    setSelectedColors([]);
    setMaxPrice(5000);
    setSortBy("featured");
  };

  return (
    <section className="bg-[#f5f5f2] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      {/* SORTING */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Living Room Furniture
        </h2>

        <div className="flex items-center gap-3">
          <label htmlFor="sort-products" className="text-sm">
            Sort by:
          </label>

          <select
            id="sort-products"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="w-[190px] rounded-md border border-[#deded6] bg-white px-4 py-3 text-sm outline-none focus:border-[#737963]"
          >
            <option value="featured">Featured</option>
            <option value="name">Best Selling</option>
            <option value="price-low">Price, low to high</option>
            <option value="price-high">Price, high to low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-7">
        {/* FILTER SIDEBAR */}
        <aside className="space-y-5">
          {/* COLOUR FILTER */}
          <div className="overflow-hidden rounded-md">
            <button
              type="button"
              aria-expanded={colorOpen}
              onClick={() => setColorOpen((previous) => !previous)}
              className="flex w-full items-center justify-between border-2 border-[#bdc1b4] bg-white px-5 py-4 text-left text-lg"
            >
              Colour
              {colorOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            {colorOpen && (
              <div className="bg-[#f5f5f2] px-4 py-6">
                <div className="grid grid-cols-3 gap-x-2 gap-y-5 sm:grid-cols-4">
                  {colourOptions
                    .slice(
                      0,
                      showMoreColors ? colourOptions.length : 12
                    )
                    .map((item) => {
                      const isSelected = selectedColors.includes(
                        item.name
                      );

                      return (
                        <button
                          type="button"
                          key={item.name}
                          onClick={() => toggleColor(item.name)}
                          className="flex flex-col items-center gap-2 text-center"
                          aria-pressed={isSelected}
                        >
                          <span
                            className={`h-10 w-10 rounded-[4px] border ${
                              isSelected
                                ? "border-[#343e2d] ring-2 ring-[#69745e] ring-offset-2"
                                : "border-black/10"
                            }`}
                            style={{
                              backgroundColor: item.color,
                            }}
                          />

                          <span className="text-sm">{item.name}</span>
                        </button>
                      );
                    })}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setShowMoreColors((previous) => !previous)
                  }
                  className="mt-5 text-sm underline underline-offset-4"
                >
                  {showMoreColors ? "Show less" : "+ Show more"}
                </button>

                {selectedColors.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSelectedColors([])}
                    className="ml-4 text-sm underline underline-offset-4"
                  >
                    Clear
                  </button>
                )}
              </div>
            )}
          </div>

          {/* PRICE FILTER */}
          {/* <div className="overflow-hidden rounded-md">
            <button
              type="button"
              aria-expanded={priceOpen}
              onClick={() => setPriceOpen((previous) => !previous)}
              className="flex w-full items-center justify-between rounded-md bg-white px-5 py-4 text-left text-lg"
            >
              Price
              {priceOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            {priceOpen && (
              <div className="bg-white px-5 py-5">
                <div className="mb-3 flex justify-between gap-2 text-sm">
                  <span>Maximum price</span>
                  <span className="font-medium">
                    ${maxPrice.toLocaleString("en-AU")}
                  </span>
                </div>

                <input
                  type="range"
                  min="1500"
                  max="5000"
                  step="100"
                  value={maxPrice}
                  onChange={(event) =>
                    setMaxPrice(Number(event.target.value))
                  }
                  className="w-full accent-[#69745e]"
                  aria-label="Maximum product price"
                />

                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>$1,500</span>
                  <span>$5,000</span>
                </div>

                <button
                  type="button"
                  onClick={() => setMaxPrice(5000)}
                  className="mt-4 text-sm underline"
                >
                  Reset price
                </button>
              </div>
            )}
          </div> */}

          {/* CLEAR FILTERS */}
          {/* <button
            type="button"
            onClick={clearFilters}
            className="w-full rounded-full border border-[#bdc1b4] bg-white px-5 py-3 text-sm font-medium hover:bg-[#eeefe9]"
          >
            Clear all filters
          </button> */}
        </aside>

        {/* PRODUCT GRID */}
        <div className="min-w-0">
          <p className="mb-5 text-sm text-gray-600" aria-live="polite">
            {visibleProducts.length}{" "}
            {visibleProducts.length === 1 ? "product" : "products"}
          </p>

          {visibleProducts.length === 0 ? (
            <div className="rounded-xl border border-[#e2e0d7] bg-white p-10 text-center">
              <h2 className="text-xl font-medium">
                No products found
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your colour or price filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 rounded-full border border-gray-300 px-5 py-3 text-sm hover:bg-gray-50"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => {
                const slide = slideIndexes[product.id] ?? 0;
                const selectedSwatch =
                  selectedSwatches[product.id] ?? -1;

                return (
                  <article
                    key={product.id}
                    className="min-w-0 overflow-hidden rounded-[20px] border border-[#e2e0d7] bg-white"
                  >
                    {/* PRODUCT IMAGE */}
                    <div className="relative">
                      <div className="relative flex aspect-[1/0.92] items-center justify-center overflow-hidden bg-white p-5">
                        <img
                          src={product.images[slide]}
                          alt={product.name}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />

                        {product.badge && (
                          <span
                            className={`absolute left-5 top-5 rounded-full px-4 py-2 text-sm font-medium ${product.badgeColor}`}
                          >
                            {product.badge}
                          </span>
                        )}

                        <button
                          type="button"
                          aria-label={`Previous image of ${product.name}`}
                          onClick={() => changeSlide(product.id, -1)}
                          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d9d9d1] bg-white/90 text-[#777b6a] hover:bg-[#f5f5f2]"
                        >
                          <ChevronLeft size={23} />
                        </button>

                        <button
                          type="button"
                          aria-label={`Next image of ${product.name}`}
                          onClick={() => changeSlide(product.id, 1)}
                          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d9d9d1] bg-white/90 text-[#777b6a] hover:bg-[#f5f5f2]"
                        >
                          <ChevronRight size={23} />
                        </button>
                      </div>

                      {/* IMAGE DOTS */}
                      <div className="flex justify-center gap-3 pb-5">
                        {product.images.map((_, index) => (
                          <button
                            type="button"
                            key={index}
                            aria-label={`Show image ${index + 1} of ${product.name}`}
                            aria-pressed={slide === index}
                            onClick={() =>
                              setSlideIndexes((previous) => ({
                                ...previous,
                                [product.id]: index,
                              }))
                            }
                            className={`h-[9px] w-[9px] rounded-full ${
                              slide === index
                                ? "bg-[#69705c]"
                                : "bg-[#b3b5a4]"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* PRODUCT DETAILS */}
                    <div className="px-5 pb-5">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <div
                          className="flex text-[#6d725b]"
                          aria-label="5 out of 5 stars"
                        >
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              size={15}
                              fill="currentColor"
                              strokeWidth={1}
                            />
                          ))}
                        </div>

                        <span className="text-xs text-gray-600">
                          ({product.reviews} reviews)
                        </span>
                      </div>

                      <h2 className="text-lg font-medium leading-snug">
                        {product.name}
                      </h2>

                      <p className="mt-2 text-sm text-gray-500">
                        {product.sections}
                        <span className="mx-3 text-gray-300">•</span>
                        {product.sizes}
                      </p>

                      <p className="mt-3 text-sm">
                        <span className="mr-1 text-gray-500">
                          from ·
                        </span>
                        <span className="font-semibold">
                          ${product.price.toLocaleString("en-AU")}
                        </span>
                      </p>

                      {/* COLOUR SWATCHES */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {product.colors.map((color, index) => (
                          <button
                            type="button"
                            key={`${product.id}-${color}-${index}`}
                            title={product.colorNames[index]}
                            aria-label={`${product.colorNames[index]} colour`}
                            aria-pressed={selectedSwatch === index}
                            onClick={() =>
                              setSelectedSwatches((previous) => ({
                                ...previous,
                                [product.id]: index,
                              }))
                            }
                            className={`h-8 w-8 overflow-hidden rounded-[4px] border-2 ${
                              selectedSwatch === index
                                ? "border-[#69745e] ring-1 ring-[#69745e]"
                                : "border-transparent"
                            }`}
                          >
                            <span
                              className="block h-full w-full"
                              style={{ backgroundColor: color }}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ======================
// LIVING ROOM FAQ SECTION
// ======================

const faqData = [
  {
    question:
      "Are there customisation options available for the living room sets?",
    answer: (
      <>
        <p>
          Yes, many of our living room sets offer customisation options.
          You can choose from a variety of standard and premium fabrics,
          colours, and finishes to match your personal style and home decor.
        </p>

        <p>
          Some pieces, like our sectionals and chaises, also allow for
          modular configurations, enabling you to tailor the layout to fit
          your space perfectly. Whether you prefer a stone-coloured fabric
          sofa or a silver accent chair, we have options to suit your taste.
        </p>
      </>
    ),
  },
  {
    question:
      "What type of assembly is required for your living room furniture?",
    answer: (
      <p>
        Most of our furniture is designed for quick and easy assembly,
        with clear instructions provided. Our intuitive furniture pieces
        are designed to be put together with ease.
      </p>
    ),
  },
  {
    question:
      "What kind of care and maintenance are recommended for your furniture?",
    answer: (
      <p>
        Vacuum upholstery regularly using a soft brush attachment.
        Clean spills promptly with a clean cloth and follow the care
        instructions supplied with your furniture. Avoid harsh chemicals
        and prolonged exposure to direct sunlight.
      </p>
    ),
  },
  {
    question: "More information",
    answer: (
      <p>
        Explore our living room collection to discover sofas, sofa beds,
        armchairs, and modular furniture. Visit each product page for
        details about dimensions, materials, available colours, and delivery.
      </p>
    ),
  },
];

function LivingRoomFAQ() {
  const [openItems, setOpenItems] = useState([]);

  const toggleFAQ = (index) => {
    setOpenItems((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  };

  return (
    <section className="bg-[#f5f5f2] px-5 py-14 md:px-10 md:py-16">
      <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight md:text-5xl">
        FAQs about living room
      </h2>

      <div className="mx-auto max-w-[914px] bg-[#f8f8f5] px-5 py-4 md:px-9 md:py-7">
        {faqData.map((faq, index) => {
          const isOpen = openItems.includes(index);

          return (
            <div
              key={faq.question}
              className="border-b border-[#deded8] last:border-b-0"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-medium md:text-lg"
              >
                <span>{faq.question}</span>

                {isOpen ? (
                  <ChevronUp
                    size={19}
                    className="shrink-0"
                  />
                ) : (
                  <ChevronDown
                    size={19}
                    className="shrink-0"
                  />
                )}
              </button>

              {isOpen && (
                <div className="space-y-5 pb-5 text-sm leading-8 text-[#292929] md:text-[15px]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CategoriesRecentlyViewed() {
  const [recentIndex, setRecentIndex] = useState(0);

  const nextProducts = () => {
    setRecentIndex((previous) =>
      (previous + 1) % recentlyViewedProducts.length
    );
  };

  const previousProducts = () => {
    setRecentIndex((previous) =>
      (previous - 1 + recentlyViewedProducts.length) %
      recentlyViewedProducts.length
    );
  };

  const visibleRecentProducts = Array.from(
    { length: 2 },
    (_, index) =>
      recentlyViewedProducts[
        (recentIndex + index) % recentlyViewedProducts.length
      ]
  );

  return (
    <section className="bg-[#f5f5f2] px-5 pb-16 pt-12 md:px-10 md:pt-16">
      {/* CATEGORIES */}
      <div className="mb-20">
        <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-5xl">
          Categories
        </h2>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 md:gap-x-6">
          {bottomCategories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group min-w-0"
            >
              <div className="aspect-[1.05/0.8] overflow-hidden rounded-md bg-[#f8f8f5]">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-base font-semibold md:text-xl">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/* RECENTLY VIEWED */}
      <div>
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Recently viewed
          </h2>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={previousProducts}
              aria-label="Previous recently viewed products"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#777b6a] hover:bg-[#e9eae3]"
            >
              <ChevronLeft size={23} />
            </button>

            <button
              type="button"
              onClick={nextProducts}
              aria-label="Next recently viewed products"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white hover:bg-[#e9eae3]"
            >
              <ChevronRight size={23} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleRecentProducts.map((product) => (
            <Link
              to={product.path}
              key={product.id}
              className="group overflow-hidden rounded-[20px] border border-[#e2e0d7] bg-white"
            >
              <div className="relative aspect-[1/0.9] overflow-hidden bg-white p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <span className="absolute left-5 top-5 rounded-full bg-[#e3d0cb] px-4 py-2 text-sm font-medium">
                  {product.badge}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-medium">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  from{" "}
                  <span className="font-semibold text-black">
                    ${product.price.toLocaleString("en-AU")}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    
  );
}