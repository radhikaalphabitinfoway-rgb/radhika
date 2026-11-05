import { Link } from "react-router-dom";
import { Minus, Plus, X, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

export default function CartDrawer() {
  const { items, open, setOpen, setQty, total, count } = useCart();

  return (
    <>
      <button
        aria-label="Close cart overlay"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <aside
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#fffdf9] shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#e8e5de] p-5">
          <h2 className="text-lg font-semibold">Your bag ({count})</h2>
          <button onClick={() => setOpen(false)} aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-lg font-medium">Your bag is empty.</p>
              <p className="mt-2 text-sm text-gray-500">
                Find something lovely for your home.
              </p>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 bg-[#193d32] px-6 py-3 text-sm text-white"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <article key={item.key} className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 shrink-0 bg-[#f0eee8] object-cover"
                />

                <div className="min-w-0 flex-1">
                  <Link
                    to={`/products/${item.id}`}
                    onClick={() => setOpen(false)}
                    className="text-sm font-semibold hover:underline"
                  >
                    {item.name}
                  </Link>

                  {item.size && (
                    <p className="mt-1 text-xs text-gray-500">
                      Size: {item.size}
                    </p>
                  )}

                  <p className="mt-2 text-sm">
                    {formatPrice(item.price)}
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex items-center border border-[#dedbd2]">
                      <button
                        onClick={() => setQty(item.key, item.qty - 1)}
                        className="p-2"
                        aria-label="Decrease quantity"
                      >
                        {item.qty === 1 ? (
                          <Trash2 size={14} />
                        ) : (
                          <Minus size={14} />
                        )}
                      </button>
                      <span className="min-w-6 text-center text-xs">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => setQty(item.key, item.qty + 1)}
                        className="p-2"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#e8e5de] p-5">
            <div className="flex justify-between text-base font-semibold">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-gray-500">
              Delivery and any applicable charges are calculated separately.
            </p>
            <button
              onClick={() =>
                window.alert(
                  "Demo checkout only. Connect a payment provider to accept real orders."
                )
              }
              className="mt-5 w-full bg-[#193d32] px-5 py-4 text-sm font-semibold text-white hover:bg-[#2b5646]"
            >
              Continue to checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}