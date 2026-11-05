import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Sparkles,
  UserRound,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import AnnouncementBar from "./AnnouncementBar";

const categoriesByMenu = {
  "Living Room": [
    {
      name: "Sofa Beds",
      image:"//au.koala.com/cdn/shop/collections/KSB_4G_OB_Q_12_6371ab10-99f0-4ced-a487-6ec3129ed3ea.png?v=1757981879&width=1880",
      path: "/collections/sofas",
    },
    {
      name: "Sofas",
      image:"//au.koala.com/cdn/shop/collections/TAM_WC_2S_R_01_PRODUCT.webp?v=1779235328&width=3840",
      path: "/collections/sofas",
    },
    {
      name: "Ottomans",
      image:"//au.koala.com/cdn/shop/collections/ByronSB_3rdG_Ottoman_BlushSunset_3_1bff66ed-4c0a-49d5-871e-fe604c6689c5.png?v=1743474738&width=1921",
      path: "/collections/sofas",
    },
    {
      name: "Bundles",
      image:"//au.koala.com/cdn/shop/collections/KoalaSB_4G_Ottoman_ForestDawn_Queen.png?v=1759298946&width=1920",
      path: "/collections/sofas",
    },
    {
      name: "Bookshelves",
      image:"//au.koala.com/cdn/shop/collections/2716e936a2eec1f41bb0afd8f978e802.png?v=1727418508&width=3840",
      path: "/collections/sofas",
    },
    {
      name: "Coffee & Side Tables",
      image:"//au.koala.com/cdn/shop/collections/coffee_table.png?v=1727418664&width=3840",
      path: "/collections/sofas",
    },
    {
      name: "Armchairs",
      image:"//au.koala.com/cdn/shop/collections/bfa60f1787bbaab0c566e5e801a4ce80.png?v=1741828592&width=1920",
      path: "/collections/sofas",
    },
    {
      name: "Homewares",
      image:"//au.koala.com/cdn/shop/collections/9._Copy_of_KENKOA0049_2022_DD_SoftHomewares_Studio_Cushion_BeachBum_SurfersParadise_ForEtch_9219_R1-28QVx7HXwue2lJAKXXfo57.webp?v=1746164533&width=1920",
      path: "/collections/sofas",
    },
    {
      name: "Sofa Sections",
      image:"//au.koala.com/cdn/shop/collections/TAM_FW_MODULE_W_01_PRODUCT_170a285c-a666-4d9a-aec0-23d7b89d31e6.png?v=1780537580&width=1920//au.koala.com/cdn/shop/collections/TAM_FW_MODULE_W_01_PRODUCT_170a285c-a666-4d9a-aec0-23d7b89d31e6.png?v=1780537580&width=1920",
      path: "/collections/sofas",
    },
    {
      name: "Sofa Covers",
      image:"//au.koala.com/cdn/shop/collections/8c19d14e86a86c19ce403b84ad12819c_d621ef82-9feb-4107-a708-0c5c8581212e.png?v=1727418138&width=1920",
      path: "/collections/sofas",
    },
    {
      name: "Living Room Clearance",
      image:"//au.koala.com/cdn/shop/collections/c60ff5ca7c8f773f34fea3f25e0f0048_bbb33ab0-ee83-4276-8b33-2584a14bba2e.png?v=1760917811&width=1921",
      path: "/collections/sofas",
    },
  ],

  Bedroom: [
    {
      name: "Mattresses",
      image:"//au.koala.com/cdn/shop/collections/Collections_Header.png?v=1783299984&width=2048 ",
      path: "/collections/sofas",
    },
    {
      name: "Bed Bases",
      image:"//au.koala.com/cdn/shop/collections/Kirribilli_Bed_Base_Queen_10_1.webp?v=1727055189&width=3840",
      path: "/collections/sofas",
    },
    {
      name: "Bundles",
      image:"//au.koala.com/cdn/shop/collections/KP_KB_BUNDLE_Q_01_PRODUCT_147f370d-58bc-403e-8955-07cc949b6e48.webp?v=1789625850&width=1920",
      path: "/collections/sofas",
    },
    {
      name: "Pillows",
      image:"//au.koala.com/cdn/shop/collections/Pillow2G_Carousel_10_a536ba93-00a7-41fb-8781-585326e256ae-removebg-preview.png?v=1791759255&width=577",
      path: "/collections/sofas",
    },
    {
      name: "Kids",
      image:"//au.koala.com/cdn/shop/collections/119b9239bdbbebbe0e2cad70a251e78e.png?v=1727417795&width=1920",
      path: "/collections/sofas",
    },
    {
      name: "Bedside Tables",
      image:"//au.koala.com/cdn/shop/files/e3ebe3004e7cf22d8ad59e834dcf084b.png?v=1725498266&width=3840",
      path: "/collections/sofas",
    },
    {
      name: "Mattress Protectors",
      image:"//au.koala.com/cdn/shop/collections/protector.png?v=1727417882&width=768",
      path: "/collections/sofas",
    },
    {
      name: "Duvets",
      image:"//au.koala.com/cdn/shop/collections/8215438cc5a02988bff0ac91a9378639_7e68ef1a-fe8c-4386-87f0-84a1b0739112.png?v=1741827014&width=3200",
      path: "/collections/sofas",
    },
  ],

  "Spare Room": [
    {
      name: "Sofa Beds",
      image:"//au.koala.com/cdn/shop/collections/3c60ca59f534d0e816dc3ef0fef01f6797cd2559.png?v=1788741077&width=500",
      path: "/collections/sofas",
    },
    {
      name: "Mattresses",
      image:"//au.koala.com/cdn/shop/collections/Collections_Header.png?v=1783299984&width=2048",
      path: "/collections/sofas",
    },
    {
      name: "Bed Bases",
      image:"//au.koala.com/cdn/shop/collections/Kirribilli_Bed_Base_Queen_10_1.webp?v=1727055189&width=3840",
      path: "/collections/sofas",
    },
    {
      name: "Armchairs",
      image:"//au.koala.com/cdn/shop/collections/bfa60f1787bbaab0c566e5e801a4ce80.png?v=1741828592&width=1920",
      path: "/collections/sofas",
    },
    {
      name: "Bookshelves",
      image:"//au.koala.com/cdn/shop/collections/2716e936a2eec1f41bb0afd8f978e802.png?v=1727418508&width=3840",
      path: "/collections/sofas",
    },
    {
      name: "Coffee & Side Tables",
      image:"//au.koala.com/cdn/shop/collections/coffee_table.png?v=1727418664&width=3840",
      path: "/collections/sofas",
    },
    {
      name: "Bedside Tables",
      image:"//au.koala.com/cdn/shop/files/e3ebe3004e7cf22d8ad59e834dcf084b.png?v=1725498266&width=3840",
      path: "/collections/sofas",
    },
  ],

  Outdoor: [
    {
      name: "Outdoor Lounge Sets",
      image:"//au.koala.com/cdn/shop/files/041d07346266ec3f6edf1a4ee7de14c2.png?v=1725501870&width=1920",
      path: "/collections/sofas",
    },
    {
      name: "Outdoor Dining Sets",
      image:"//au.koala.com/cdn/shop/files/fa13a7cda679550c50817a11d7446ed5.png?v=1725501756&width=1920",
      path: "/collections/sofas",
    },
    {
      name: "Outdoor Loungeg Chairs",
      image:"//au.koala.com/cdn/shop/files/5345895de78485128e31b5c5b46db2f8.png?v=1725501810&width=1920",
      path: "/collections/sofas",
    },
    {
      name: "Outdoor Coffee Tables",
      image:"//au.koala.com/cdn/shop/files/3fe2d629835e65c8e142b4131861db11.png?v=1725501616&width=1920",
      path: "/collections/sofas",
    },
    {
      name: "Outdoor Dining Tables",
      image:"//au.koala.com/cdn/shop/files/66f21938eeec496633b6eda3f524a7e5.png?v=1725501760&width=1920",
      path: "/collections/sofas",
    },
    {
      name: "Outdoor Dining Seating",
      image:"//au.koala.com/cdn/shop/files/e45601cf76481eb8e2b784ddc541d070.png?v=1725501645&width=1920",
      path: "/collections/sofas",
    },
  ],
};

const pantoneProducts = [
  {
    name: "Koala Sofa Bed 4th Gen",
    image:"//au.koala.com/cdn/shop/files/KSB_4G_Pantone_OB_K_5.webp?v=1783297119&width=3840",
    path: "/collections/sofas",
  },
  {
    name: "Torquay Modular Sofa",
    image:"//au.koala.com/cdn/shop/files/TMS_PANTONE_2S_R_6.webp?v=1783304158&width=3840",
    path: "/collections/sofas",
  },
  {
    name: "Wanda Sofa Bed",
    image:"//au.koala.com/cdn/shop/files/Wanda_AU-UK_Pantone_7.webp?v=1783311327&width=3840",
    path: "/collections/sofas",
  },
  {
    name: "Beach Bum Throw",
    image:"//au.koala.com/cdn/shop/files/PANTONE_THROW_4_79c0a611-f05a-4bdf-a4e2-1df6a44db4a7.webp?v=1783910622&width=1920",
    path: "/collections/sofas",
  },
  {
    name: "Beach Bun Cushion",
    image:"//au.koala.com/cdn/shop/files/PANTONE_CUSHION_4.webp?v=1782797866&width=3840",
    path: "/collections/sofas",
  },
];

const blueyProducts = [
  {
    name: "Playtime Collection",
    image: "https://au.koala.com/cdn/shop/collections/KSB_BLUEY_K_Q_1.png?v=1760472410&width=527",
    path: "/collections/sofas",
    limited: false,
  },
  {
    name: "Koala x Bluey Playtime Sofa Bed",
    image: "//au.koala.com/cdn/shop/files/KSB_BLUEY_P_Q_1.png?v=1759895204&width=1920",
    path: "/collections/sofas",
    limited: true,
  },
  {
    name: "Koala x Bluey Snoozytime Mattress",
    image: "//au.koala.com/cdn/shop/files/BLUEY_MATT_F_8.webp?v=1792109473&width=3840",
    path: "/collections/sofas",
    limited: true,
  },
  {
    name: "Koala x Bluey Snoozytime Bed Base",
    image: "//au.koala.com/cdn/shop/files/BLUEY_BED_NOGUARD_F_1.png?v=1760659298&width=1920",
    path: "/collections/sofas",
    limited: true,
  },
  {
    name: "Koala x Bluey Snoozytime Pillow",
    image: "//au.koala.com/cdn/shop/files/BLUEY_PILLOW_FQ_3.webp?v=1792109761&width=3840",
    path: "/collections/sofas",
    limited: true,
  },
  {
    name: "Koala x Bluey Playtime Ottoman",
    image: "//au.koala.com/cdn/shop/files/KSB_BLUEY_O_TC_4.webp?v=1792109815&width=3840",
    path: "/collections/sofas",
    limited: true,
  },
  {
    name: "Koala x Bluey Snuggletime Throw",
    image: "//au.koala.com/cdn/shop/files/BLUEY_THROW_GREENIE_4.webp?v=1792109871&width=3840",
    path: "/collections/sofas",
    limited: true,
  },
  {
    name: "Koala x Bluey Snuggletime Cushion",
    image: "//au.koala.com/cdn/shop/files/BLUEY_CUSHION_GREENIE_1.webp?v=1792109925&width=3840",
    path: "/collections/sofas",
    limited: true,
  },
  {
    name: "Koala x Bluey Playtime Covers",
    image: "//au.koala.com/cdn/shop/files/BLUEY_OTTOCOV_P_5.png?v=1760914415&width=1920",
    path: "/collections/sofas",
    limited: true,
  },
];

const navItems = [
  { name: "Living Room", slug: "living-room" },
  { name: "Bedroom", slug: "bedroom" },
  { name: "Spare Room", slug: "spare-room" },
  { name: "Outdoor", slug: "outdoor" },
];

const getShopAllPath = (menuName) => {
  switch (menuName) {
    case "Living Room":
      return "/collections/livingroom";
    case "Bedroom":
      return "/collections/bedroom";
    case "Spare Room":
      return "/collections/sofa-beds";
    case "Outdoor":
      return "/collections/outdoor";
    default:
      return "/collections/all";
  }
};

export default function Header() {
  const [activeMenu, setActiveMenu] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { count, setOpen } = useCart();
  const navigate = useNavigate();

  function submitSearch(event) {
    event.preventDefault();

    navigate(
      `/collections/all?search=${encodeURIComponent(search.trim())}`
    );

    setSearchOpen(false);
    setMobileOpen(false);
    setActiveMenu("");
  }

  function closeMenus() {
    setActiveMenu("");
    setMobileOpen(false);
  }

  const activeCategories = categoriesByMenu[activeMenu];

  return (
    <header
      className="relative z-50 bg-white text-[#171915]"
      onMouseLeave={() => setActiveMenu("")}
    >
    <AnnouncementBar/>
      {/* 2. Main navigation */}
      <div className="relative flex min-h-[88px] items-center justify-between gap-4 border-b border-gray-100 px-5 sm:px-10">
        <Link
          to="/"
          onClick={closeMenus}
          className="shrink-0 text-4xl font-extrabold tracking-[-3px] text-[#69745e]"
        >
          koala<span className="align-super text-[9px]">®</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="ml-auto lg:hidden"
          onClick={() => setMobileOpen((previous) => !previous)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden h-full items-center justify-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <button
              key={item.name}
              type="button"
              onMouseEnter={() => setActiveMenu(item.name)}
              onClick={() =>
                setActiveMenu((current) =>
                  current === item.name ? "" : item.name
                )
              }
              aria-expanded={activeMenu === item.name}
              className={`flex h-full items-center gap-1 border-b-2 py-8 text-sm font-medium transition hover:text-[#69745e] ${
                activeMenu === item.name
                  ? "border-[#69745e]"
                  : "border-transparent"
              }`}
            >
              {item.name}
              <ChevronDown
                size={15}
                className={`transition-transform ${
                  activeMenu === item.name ? "rotate-180" : ""
                }`}
              />
            </button>
          ))}

          <Link
            to="/collections/all"
            onMouseEnter={() => setActiveMenu("")}
            className="text-sm font-medium hover:text-[#69745e]"
          >
            Offers
          </Link>

          <button
            type="button"
            onMouseEnter={() => setActiveMenu("PANTONE")}
            onClick={() =>
              setActiveMenu((current) =>
                current === "PANTONE" ? "" : "PANTONE"
              )
            }
            className="flex items-center gap-1 text-xs font-extrabold"
          >
            PANTONE® <ChevronDown size={14} />
          </button>

          <button
            type="button"
            onMouseEnter={() => setActiveMenu("Bluey")}
            onClick={() =>
              setActiveMenu((current) =>
                current === "Bluey" ? "" : "Bluey"
              )
            }
            className="flex items-center gap-1 text-xl font-extrabold text-[#5e79a9]"
          >
            Bluey <ChevronDown size={15} />
          </button>
        </nav>

        {/* Right-side icons */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={() => {
              setSearchOpen((previous) => !previous);
              setActiveMenu("");
            }}
            aria-label="Search products"
          >
            <Search size={22} strokeWidth={1.6} />
          </button>

          <Link
            to="/collections/all"
            className="hidden sm:block"
            aria-label="Wishlist"
          >
            <Sparkles size={22} strokeWidth={1.6} />
          </Link>

          <Link
  to="/SignIn"
  className="hidden sm:block"
  aria-label="Account"
>
  <UserRound size={22} strokeWidth={1.6} />
</Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative"
            aria-label="Open shopping cart"
          >
            <ShoppingCart size={23} strokeWidth={1.6} />

            {count > 0 && (
              <span className="absolute -right-2.5 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#193d32] px-1 text-[10px] text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 3. Search panel */}
      {searchOpen && (
        <form
          onSubmit={submitSearch}
          className="flex gap-3 border-b border-gray-200 bg-white p-5 sm:px-10"
        >
          <Search size={21} className="mt-2 shrink-0" />

          <input
            autoFocus
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search sofas, mattresses and more..."
            className="min-w-0 flex-1 py-2 text-sm outline-none"
          />

          <button type="submit" className="text-sm font-semibold">
            Search
          </button>

          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </form>
      )}

      {/* 4. SAME IMAGE-GRID DROPDOWN FOR ALL MAIN CATEGORIES */}
      {activeCategories && (
        <div
          className="absolute left-0 top-full max-h-[75vh] w-full overflow-y-auto border-t border-gray-100 bg-[#f5f6f3] px-5 py-7 shadow-xl sm:px-10 sm:py-8"
          onMouseEnter={() => setActiveMenu(activeMenu)}
        >
          <div className="mb-7 flex items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {activeMenu}
            </h2>

            <Link
              to={getShopAllPath(activeMenu)}
              onClick={closeMenus}
              className="shrink-0 rounded-full bg-[#696d58] px-5 py-3 text-center text-xs font-semibold text-white transition hover:bg-[#555b47] sm:px-8 sm:text-sm"
            >
              Shop all {activeMenu.toLowerCase()}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7">
            {activeCategories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                onClick={closeMenus}
                className="group min-w-0 text-center text-sm"
              >
                <div className="aspect-[1.15/1] overflow-hidden rounded-lg border border-[#e0e0d9] bg-white">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <span className="mt-3 inline-block leading-5 group-hover:underline">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      
{/* 5. PANTONE dropdown - screenshot design */}
{activeMenu === "PANTONE" && (
  <div
    className="absolute left-0 top-full z-50 w-full
      max-h-[80vh] overflow-y-auto
      border-t border-gray-100 bg-[#f7f7f5]
      px-5 pb-9 pt-8 shadow-xl sm:px-8 lg:px-12"
    onMouseEnter={() => setActiveMenu("PANTONE")}
  >
    {/* Heading and button */}
    <div className="mb-7 flex items-center justify-between gap-4">
      <h2 className="text-3xl font-bold text-[#171915]">
        Pantone
      </h2>

      <Link
        to="/collections/all?search=pantone"
        onClick={closeMenus}
        className="flex min-h-[52px] shrink-0 items-center
          justify-center rounded-full bg-[#696d58]
          px-5 text-sm font-semibold text-white
          transition hover:bg-[#555b47]
          sm:min-h-[62px] sm:px-9"
      >
        Explore Collection
      </Link>
    </div>

    {/* Five product image cards */}
    <div className="grid grid-cols-2 gap-x-4 gap-y-6
      sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
      {pantoneProducts.map((product) => (
        <Link
          key={product.name}
          to={product.path}
          onClick={closeMenus}
          className="group min-w-0 text-center"
        >
          <div className="relative aspect-[1.15/1]
            overflow-hidden rounded-lg bg-[#e5e4da]">

            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover
                transition-transform duration-300
                group-hover:scale-105"
            />

            <span className="absolute left-2 top-2
              rounded-full bg-[#bb777c] px-2 py-1
              text-[10px] font-semibold text-white
              sm:left-3 sm:top-3 sm:px-3 sm:py-1.5
              sm:text-xs">
              Limited Edition
            </span>
          </div>

          <span className="mt-3 block text-sm leading-5
            text-[#34352f] group-hover:underline">
            {product.name}
          </span>
        </Link>
      ))}
    </div>
  </div>
)}


      {/* 6. Bluey dropdown - image-card layout inspired by the reference */}
      {activeMenu === "Bluey" && (
        <div
          className="absolute left-0 top-full z-50 max-h-[80vh] w-full
            overflow-y-auto border-t border-gray-100 bg-[#f7f7f5]
            px-5 pb-9 pt-7 shadow-xl sm:px-8 lg:px-12"
          onMouseEnter={() => setActiveMenu("Bluey")}
        >
          <div className="mb-7 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-[#171915] sm:text-3xl">
              Koala x Bluey Collection
            </h2>

            <Link
              to="/collections/all?search=bluey"
              onClick={closeMenus}
              className="shrink-0 rounded-full bg-[#696d58] px-5 py-4
                text-center text-xs font-semibold text-white transition
                hover:bg-[#555b47] sm:px-9 sm:text-sm"
            >
              Shop Koala x Bluey
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-7
            sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
            {blueyProducts.map((product) => (
              <Link
                key={product.name}
                to={product.path}
                onClick={closeMenus}
                className="group min-w-0 text-center"
              >
                <div className="relative aspect-[1.15/1] overflow-hidden
                  rounded-lg bg-[#e5e4da]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover
                      transition-transform duration-300
                      group-hover:scale-105"
                  />

                  {product.limited && (
                    <span className="absolute left-2 top-2 rounded-full
                      bg-[#bb777c] px-2 py-1 text-[10px] font-semibold
                      text-white sm:left-3 sm:top-3 sm:px-3 sm:py-1.5
                      sm:text-xs">
                      Limited Edition
                    </span>
                  )}
                </div>

                <span className="mt-3 block text-sm leading-5
                  text-[#34352f] group-hover:underline">
                  {product.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 7. Country dropdown */}
      {activeMenu === "Country" && (
        <div className="absolute right-5 top-full z-50 bg-white p-5 shadow-xl">
          <p className="mb-3 text-sm font-semibold">
            Choose your region
          </p>

          <button
            type="button"
            onClick={closeMenus}
            className="text-sm hover:underline"
          >
            🇦🇺 Australia
          </button>
        </div>
      )}

      {/* 8. Mobile navigation */}
      {mobileOpen && (
        <nav className="absolute left-0 top-full max-h-[75vh] w-full overflow-y-auto border-t border-gray-100 bg-white px-5 py-4 shadow-xl lg:hidden">
          {navItems.map((item) => {
            const isExpanded = activeMenu === item.name;
            const mobileCategories = categoriesByMenu[item.name] || [];

            return (
              <div key={item.name} className="border-b border-gray-100">
                <div className="flex items-center justify-between py-4">
                  <Link
                    to={getShopAllPath(item.name)}
                    onClick={closeMenus}
                    className="font-medium"
                  >
                    {item.name}
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveMenu((current) =>
                        current === item.name ? "" : item.name
                      )
                    }
                    aria-label={`Toggle ${item.name} submenu`}
                    aria-expanded={isExpanded}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {isExpanded && (
                  <div className="grid grid-cols-2 gap-3 pb-5">
                    {mobileCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        onClick={closeMenus}
                        className="group overflow-hidden rounded border border-gray-200 bg-white text-sm"
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          loading="lazy"
                          className="aspect-[1.3/1] w-full object-cover"
                        />

                        <span className="block p-3 group-hover:underline">
                          {category.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            to="/collections/all"
            onClick={closeMenus}
            className="block border-b border-gray-100 py-4 font-medium"
          >
            Offers
          </Link>

          <Link
  to="/SignIn"
  onClick={closeMenus}
  className="block py-4 font-medium"
>
  My account
</Link>
        </nav>
      )}
    </header>
  );
}
