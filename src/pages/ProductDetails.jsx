import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Check, Minus, Plus, Star, Truck } from "lucide-react";
import { products, formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes[0] || ""
  );
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="px-5 py-24 text-center">
        <h1 className="text-3xl font-medium">Product not found</h1>
        <Link to="/shop" className="mt-6 inline-block underline">
          Return to shop
        </Link>
      </main>
    );
  }

  const related = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.category === product.category
    )
    .concat(products.filter((item) => item.id !== product.id))
    .slice(0, 4);

  function handleAddToCart() {
    addToCart(product, quantity, selectedSize);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <main className="mx-auto max-w-[1500px] px-5 py-8 sm:px-10 sm:py-12">
      <div className="mb-8 text-xs text-gray-500">
        <Link to="/">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-[#193d32]">{product.name}</span>
      </div>

      <div className="grid gap-9 md:grid-cols-2 md:gap-14 lg:gap-20">
        <div className="bg-[#f1eee7]">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[4/4.5] h-full w-full object-cover"
          />
        </div>

        <div className="py-2 sm:py-8">
          <p className="text-xs uppercase tracking-[2px] text-[#78866b]">
            {product.category}
          </p>

          <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Star
                size={15}
                className="fill-[#c9a45c] text-[#c9a45c]"
              />
              {product.rating}
            </span>
            <span>({product.reviews} reviews)</span>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-2xl font-semibold">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice > product.price && (
              <span className="text-base text-gray-400 line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          <p className="mt-5 leading-7 text-gray-600">
            {product.description}
          </p>

          <div className="mt-7">
            <label className="mb-3 block text-sm font-semibold">
              Choose your size
            </label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 py-3 text-sm transition ${
                    selectedSize === size
                      ? "border-[#193d32] bg-[#193d32] text-white"
                      : "border-[#dedbd2] hover:border-[#193d32]"
                  }`}
                >
                  {size}
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
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-3"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="min-w-10 text-center text-sm">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-3"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-7 flex w-full items-center justify-center gap-3 bg-[#193d32] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#2b5646]"
          >
            {added ? (
              <>
                <Check size={18} />
                Added to bag
              </>
            ) : (
              <>
                Add to bag — {formatPrice(product.price * quantity)}
              </>
            )}
          </button>

          <div className="mt-5 flex items-start gap-3 border-b border-[#e8e5de] pb-6 text-sm text-gray-600">
            <Truck size={20} className="mt-0.5 shrink-0" />
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
                {product.description} Designed to complement a
                considered, comfortable home.
              </p>
            </details>
            <details className="border-b border-[#e8e5de] pb-4">
              <summary className="cursor-pointer text-sm font-semibold">
                Care and materials
              </summary>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Refer to the product-specific care instructions
                and material specifications before use.
              </p>
            </details>
            <details className="border-b border-[#e8e5de] pb-4">
              <summary className="cursor-pointer text-sm font-semibold">
                Shipping and returns
              </summary>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Shipping costs, delivery times, and return
                conditions should be confirmed at checkout.
              </p>
            </details>
          </div>
        </div>
      </div>

      <section className="mt-20 border-t border-[#e8e5de] pt-12">
        <h2 className="mb-8 text-3xl font-medium sm:text-4xl">
          You might also love
        </h2>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}