import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Check, Minus, Plus, Truck } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";

const SIZES = ["Single", "Double", "Queen", "King"];

export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCTS.find((item) => item.id === id);
  const { add } = useCart();

  const [size, setSize] = useState("Queen");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="px-5 py-24 text-center">
        <h1 className="text-3xl font-medium">Product not found</h1>
        <Link
          to="/collections/all"
          className="mt-6 inline-block underline underline-offset-4"
        >
          Return to shopping
        </Link>
      </main>
    );
  }

  const related = PRODUCTS.filter(
    (item) =>
      item.id !== product.id && item.category === product.category
  ).concat(PRODUCTS.filter((item) => item.id !== product.id)).slice(0, 4);

  function handleAdd() {
    add(product, size, quantity);
    setAdded(true);
  }

  return (
    <main className="mx-auto max-w-[1500px] px-5 py-8 sm:px-10 sm:py-12">
      <div className="mb-8 text-xs text-gray-500">
        <Link to="/">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/collections/${product.category}`}>
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#193d32]">{product.name}</span>
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-14 lg:gap-20">
        <div
          className="aspect-[4/4.5] overflow-hidden bg-[#f0eee8]"
          style={{
            background: `linear-gradient(135deg, ${product.from}, ${product.to})`,
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <section className="py-2 sm:py-8">
          <span className="inline-block bg-[#e8eadd] px-3 py-1 text-xs font-semibold text-[#193d32]">
            {product.tag}
          </span>

          <h1 className="mt-5 text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl font-semibold">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            {product.desc}
          </p>

          <div className="mt-7">
            <label className="mb-3 block text-sm font-semibold">
              Choose size
            </label>

            <div className="flex flex-wrap gap-2">
              {SIZES.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setSize(item);
                    setAdded(false);
                  }}
                  className={`border px-4 py-3 text-sm transition ${
                    size === item
                      ? "border-[#193d32] bg-[#193d32] text-white"
                      : "border-[#dedbd2] hover:border-[#193d32]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <label className="mb-3 block text-sm font-semibold">
              Quantity
            </label>

            <div className="flex w-fit items-center border border-[#dedbd2]">
              <button
                onClick={() => {
                  setQuantity((value) => Math.max(1, value - 1));
                  setAdded(false);
                }}
                className="p-3"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>

              <span className="min-w-10 text-center text-sm">
                {quantity}
              </span>

              <button
                onClick={() => {
                  setQuantity((value) => value + 1);
                  setAdded(false);
                }}
                className="p-3"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="mt-7 flex w-full items-center justify-center gap-3 bg-[#193d32] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#2b5646]"
          >
            {added ? (
              <>
                <Check size={18} /> Added to bag
              </>
            ) : (
              <>Add to bag — {formatPrice(product.price * quantity)}</>
            )}
          </button>

          <div
            id="delivery"
            className="mt-6 flex gap-3 border-b border-[#e8e5de] pb-6 text-sm text-gray-600"
          >
            <Truck size={20} className="shrink-0" />
            <div>
              <p className="font-semibold text-[#193d32]">
                Delivery information
              </p>
              <p className="mt-1 leading-6">
                Delivery options and availability depend on your location.
              </p>
            </div>
          </div>

          <div className="space-y-4 py-6">
            <details className="border-b border-[#e8e5de] pb-4">
              <summary className="cursor-pointer text-sm font-semibold">
                Product description
              </summary>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {product.desc}
              </p>
            </details>

            <details className="border-b border-[#e8e5de] pb-4">
              <summary className="cursor-pointer text-sm font-semibold">
                Care and materials
              </summary>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Refer to the final product specifications for material
                details and care instructions.
              </p>
            </details>

            <details id="faq" className="border-b border-[#e8e5de] pb-4">
              <summary className="cursor-pointer text-sm font-semibold">
                Shipping and returns
              </summary>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Check the applicable delivery and return terms before placing
                an order.
              </p>
            </details>
          </div>
        </section>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-[#e8e5de] pt-12">
          <h2 className="text-3xl font-medium sm:text-4xl">
            You might also love
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}