import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products, formatPrice } from "../data/products";
import ProductCard from "../components/ProductCard";

const categoryOptions = [
  "All",
  "Sofas",
  "Mattresses",
  "Bedroom",
  "Living Room",
  "Outdoor",
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "All";
  const initialSearch = params.get("search") || "";

  const [search, setSearch] = useState(initialSearch);
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(2000);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch = `${product.name} ${product.category} ${product.color}`
        .toLowerCase()
        .includes(search.toLowerCase());

      return (
        matchesCategory &&
        matchesSearch &&
        product.price <= maxPrice
      );
    });

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [category, search, maxPrice, sort]);

  function chooseCategory(nextCategory) {
    const next = new URLSearchParams(params);

    if (nextCategory === "All") {
      next.delete("category");
    } else {
      next.set("category", nextCategory);
    }

    setParams(next);
  }

  return (
    <main className="mx-auto max-w-[1600px] px-5 py-9 sm:px-10 sm:py-14">
      <div className="mb-8 text-xs text-gray-500">
        <Link to="/">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-[#193d32]">
          {category === "All" ? "Shop all" : category}
        </span>
      </div>

      <div className="border-b border-[#e8e5de] pb-8 sm:pb-10">
        <p className="mb-3 text-xs uppercase tracking-[2px] text-[#78866b]">
          Made for your everyday
        </p>
        <h1 className="text-4xl font-medium tracking-tight sm:text-6xl">
          {category === "All" ? "Shop all furniture" : category}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
          Find thoughtful pieces that bring comfort, character,
          and a little more joy to your home.
        </p>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {categoryOptions.map((option) => (
          <button
            key={option}
            onClick={() => chooseCategory(option)}
            className={`rounded-full border px-4 py-2 text-xs transition sm:text-sm ${
              category === option
                ? "border-[#193d32] bg-[#193d32] text-white"
                : "border-[#dedbd2] hover:border-[#193d32]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[220px_1fr]">
        <aside
          className={`${
            filtersOpen ? "block" : "hidden"
          } border-b border-[#e8e5de] pb-6 lg:block lg:border-0`}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Filters</h2>
            <button
              className="text-xs underline"
              onClick={() => {
                setSearch("");
                setMaxPrice(2000);
                setSort("featured");
                chooseCategory("All");
              }}
            >
              Clear all
            </button>
          </div>

          <div className="mt-7">
            <h3 className="text-sm font-semibold">Category</h3>
            <div className="mt-4 space-y-3">
              {categoryOptions.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-3 text-sm text-gray-600"
                >
                  <input
                    type="radio"
                    name="category"
                    checked={category === option}
                    onChange={() => chooseCategory(option)}
                    className="accent-[#193d32]"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-[#e8e5de] pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Maximum price</h3>
              <span className="text-xs text-gray-500">
                {formatPrice(maxPrice)}
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="2000"
              step="50"
              value={maxPrice}
              onChange={(event) =>
                setMaxPrice(Number(event.target.value))
              }
              className="mt-5 w-full accent-[#193d32]"
            />
            <div className="mt-1 flex justify-between text-xs text-gray-500">
              <span>$100</span>
              <span>$2,000</span>
            </div>
          </div>
        </aside>

        <section>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-gray-500">
              {filtered.length} products
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex items-center gap-2 border border-[#dedbd2] px-3 py-2 text-sm lg:hidden"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products"
                className="w-36 border border-[#dedbd2] bg-transparent px-3 py-2 text-sm outline-none focus:border-[#193d32] sm:w-48"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}

              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-[#dedbd2] bg-[#fffdf9] px-3 py-2 text-sm outline-none"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </div>
          </div>

          {filtered.length ? (
            <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 sm:gap-y-12 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <h2 className="text-2xl font-medium">
                No products found
              </h2>
              <p className="mt-3 text-sm text-gray-500">
                Try another search or change your filters.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setMaxPrice(2000);
                  chooseCategory("All");
                }}
                className="mt-6 bg-[#193d32] px-6 py-3 text-sm text-white"
              >
                View all products
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}