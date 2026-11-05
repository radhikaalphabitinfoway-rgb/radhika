import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
  ChevronDown,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const navItems = [
  {
    name: "Sofas",
    href: "/shop?category=Sofas",
    links: ["All Sofas", "Modular Sofas", "Armchairs"],
  },
  {
    name: "Bedroom",
    href: "/shop?category=Bedroom",
    links: ["Bed Bases", "Bedside Tables", "Bedding"],
  },
  {
    name: "Mattresses",
    href: "/shop?category=Mattresses",
    links: ["All Mattresses", "Mattress Accessories"],
  },
  {
    name: "Living Room",
    href: "/shop?category=Living%20Room",
    links: ["Side Tables", "Homewares"],
  },
  {
    name: "Outdoor",
    href: "/shop?category=Outdoor",
    links: ["Outdoor Chairs", "Outdoor Furniture"],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { itemCount } = useCart();
  const navigate = useNavigate();

  function submitSearch(event) {
    event.preventDefault();
    navigate(`/shop?search=${encodeURIComponent(search)}`);
    setSearchOpen(false);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e5de] bg-[#fffdf9]">
      <div className="mx-auto flex h-[70px] max-w-[1600px] items-center justify-between gap-5 px-4 sm:px-8 lg:px-12">
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link
          to="/"
          className="text-[32px] font-black tracking-[-2px] text-[#193d32] sm:text-[38px]"
        >
          koala<span className="text-[#b7c69a]">.</span>
        </Link>

        <nav className="hidden h-full items-center gap-6 lg:flex xl:gap-9">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="flex h-full items-center"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu("")}
            >
              <Link
                to={item.href}
                onFocus={() => setActiveMenu(item.name)}
                className="flex h-full items-center gap-1 text-sm font-medium hover:text-[#6c8061]"
              >
                {item.name}
                <ChevronDown size={13} />
              </Link>

              {activeMenu === item.name && (
                <div className="absolute left-0 top-full w-full border-t border-[#e8e5de] bg-[#fffdf9] shadow-lg">
                  <div className="mx-auto flex max-w-[1400px] gap-16 px-12 py-8">
                    <div>
                      <p className="mb-4 text-xs uppercase tracking-[2px] text-gray-500">
                        Explore {item.name}
                      </p>
                      <Link
                        to={item.href}
                        onClick={() => setActiveMenu("")}
                        className="font-semibold underline underline-offset-4"
                      >
                        Shop all {item.name}
                      </Link>
                    </div>

                    <div className="flex gap-8">
                      {item.links.map((label) => (
                        <Link
                          key={label}
                          to={item.href}
                          onClick={() => setActiveMenu("")}
                          className="text-sm hover:underline"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={21} strokeWidth={1.6} />
          </button>

          <Link
            to="/about"
            aria-label="About us"
            className="hidden sm:block"
          >
            <UserRound size={21} strokeWidth={1.6} />
          </Link>

          <Link to="/cart" className="relative" aria-label="Shopping cart">
            <ShoppingBag size={22} strokeWidth={1.6} />
            <span className="absolute -right-2.5 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#193d32] px-1 text-[10px] text-white">
              {itemCount}
            </span>
          </Link>
        </div>
      </div>

      {searchOpen && (
        <form
          onSubmit={submitSearch}
          className="flex gap-3 border-t border-[#e8e5de] px-5 py-4 sm:px-10"
        >
          <Search size={20} className="mt-2 shrink-0" />
          <input
            autoFocus
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="What are you looking for?"
            className="w-full bg-transparent py-2 text-sm outline-none"
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

      {mobileOpen && (
        <nav className="max-h-[75vh] overflow-y-auto border-t border-[#e8e5de] bg-[#fffdf9] px-5 py-4 lg:hidden">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-[#e8e5de]">
              <div className="flex items-center justify-between py-4">
                <Link
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-medium"
                >
                  {item.name}
                </Link>
                <button
                  aria-label={`Toggle ${item.name} links`}
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === item.name ? "" : item.name
                    )
                  }
                >
                  <ChevronDown
                    size={18}
                    className={
                      activeMenu === item.name ? "rotate-180" : ""
                    }
                  />
                </button>
              </div>

              {activeMenu === item.name && (
                <div className="flex flex-col gap-4 pb-5 pl-3">
                  {item.links.map((label) => (
                    <Link
                      key={label}
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-gray-600"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/shop"
            onClick={() => setMobileOpen(false)}
            className="block py-4 font-medium"
          >
            Shop all products
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileOpen(false)}
            className="block py-3 font-medium"
          >
            About us
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block py-3 font-medium"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}