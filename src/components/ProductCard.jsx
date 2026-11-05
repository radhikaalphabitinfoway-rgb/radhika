import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

export default function ProductCard({ product }) {
  const { add } = useCart();

  return (
    <article className="group min-w-0">
      <Link to={`/products/${product.id}`} className="block">
        <div
          className="relative aspect-[4/5] overflow-hidden bg-[#f0eee8]"
          style={{
            background: `linear-gradient(135deg, ${product.from}, ${product.to})`,
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 bg-white px-3 py-1 text-[10px] font-semibold sm:text-xs">
            {product.tag}
          </span>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold sm:text-base">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            From {formatPrice(product.price)}
          </p>
        </div>
      </Link>

      <button
        onClick={() => add(product)}
        className="mt-3 flex w-full items-center justify-center gap-2 border border-[#193d32] px-3 py-3 text-xs font-semibold transition hover:bg-[#193d32] hover:text-white sm:text-sm"
      >
        <ShoppingBag size={15} />
        Add to bag
      </button>
    </article>
  );
}