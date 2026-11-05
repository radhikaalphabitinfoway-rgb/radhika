import { Link, useParams, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import ProductCard from "../components/ProductCard";
import { COLLECTIONS, PRODUCTS } from "../data/products";

export default function Collection() {
  const { slug = "all" } = useParams();
  const [params, setParams] = useSearchParams();

  const current = COLLECTIONS.find((item) => item.slug === slug);
  const search = params.get("search") || "";

  const filtered = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCollection =
        slug === "all" || product.category === slug;

      const matchesSearch =
        `${product.name} ${product.category} ${product.desc}`
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCollection && matchesSearch;
    });
  }, [slug, search]);

  function updateSearch(value) {
    const next = new URLSearchParams(params);

    if (value) {
      next.set("search", value);
    } else {
      next.delete("search");
    }

    setParams(next);
  }

  return (
    <main className="mx-auto min-h-[60vh] max-w-[1600px] px-5 py-10 sm:px-10 sm:py-16">
      <div className="text-xs text-gray-500">
        <Link to="/">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-[#193d32]">
          {current?.label || "Collection"}
        </span>
      </div>

      <section className="mt-7 border-b border-[#e8e5de] pb-9">
        <p className="text-xs uppercase tracking-[3px] text-[#78866b]">
          Made for your everyday
        </p>

        <h1 className="mt-3 text-4xl font-medium sm:text-6xl">
          {current?.label || "Our collection"}
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
          Find thoughtful furniture that brings comfort, character and
          a little more joy to your home.
        </p>
      </section>

      <div className="mt-7 flex flex-wrap gap-2">
        {COLLECTIONS.map((item) => (
          <Link
            key={item.slug}
            to={`/collections/${item.slug}`}
            className={`rounded-full border px-4 py-2 text-xs transition sm:text-sm ${
              item.slug === slug
                ? "border-[#193d32] bg-[#193d32] text-white"
                : "border-[#dedbd2] hover:border-[#193d32]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-gray-500">
          {filtered.length} products
        </p>

        <input
          value={search}
          onChange={(event) => updateSearch(event.target.value)}
          placeholder="Search products..."
          aria-label="Search collection products"
          className="w-full border border-[#dedbd2] bg-transparent px-4 py-3 text-sm outline-none focus:border-[#193d32] sm:max-w-xs"
        />
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <h2 className="text-2xl font-medium">No products found</h2>
          <p className="mt-3 text-sm text-gray-500">
            Try another search or browse the full collection.
          </p>
          <button
            onClick={() => updateSearch("")}
            className="mt-6 bg-[#193d32] px-6 py-3 text-sm text-white"
          >
            Clear search
          </button>
        </div>
      )}
    </main>
  );
}