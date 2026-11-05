import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";
import { formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    subtotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  return (
    <main className="mx-auto min-h-[60vh] max-w-[1300px] px-5 py-12 sm:px-10 sm:py-16">
      <p className="text-xs uppercase tracking-[2px] text-[#78866b]">
        Your shopping bag
      </p>
      <h1 className="mt-3 text-4xl font-medium sm:text-6xl">
        Your cart
      </h1>
      <p className="mt-3 text-sm text-gray-500">
        {cart.reduce((total, item) => total + item.quantity, 0)} items
      </p>

      {cart.length === 0 ? (
        <div className="py-20 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f1eee7] text-2xl">
            ♡
          </div>
          <h2 className="mt-6 text-2xl font-medium">
            Your bag is taking a little rest.
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Find something lovely for your home.
          </p>
          <Link
            to="/shop"
            className="mt-7 inline-flex items-center gap-3 bg-[#193d32] px-7 py-4 text-sm font-semibold text-white"
          >
            Start shopping <ArrowRight size={17} />
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_350px]">
          <div>
            {cart.map((item) => (
              <article
                key={item.key}
                className="grid grid-cols-[100px_1fr] gap-4 border-b border-[#e8e5de] py-6 first:border-t sm:grid-cols-[150px_1fr_auto]"
              >
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-[4/4.5] w-full bg-[#f1eee7] object-cover"
                  />
                </Link>

                <div>
                  <Link
                    to={`/product/${item.id}`}
                    className="font-semibold"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-2 text-xs text-gray-500">
                    Colour: {item.color}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Size: {item.selectedSize || "Standard"}
                  </p>
                  <p className="mt-3 font-semibold">
                    {formatPrice(item.price)}
                  </p>

                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center border border-[#dedbd2]">
                      <button
                        onClick={() =>
                          updateQuantity(item.key, item.quantity - 1)
                        }
                        className="p-2"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="min-w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.key, item.quantity + 1)
                        }
                        className="p-2"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.key)}
                      className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-600"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>

                <p className="col-span-2 text-sm font-semibold sm:col-span-1 sm:text-right">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </article>
            ))}

            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
            >
              Continue shopping <ArrowRight size={16} />
            </Link>
          </div>

          <aside className="h-fit bg-[#f4f1ea] p-6 sm:p-8">
            <h2 className="text-xl font-medium">Order summary</h2>

            <div className="mt-7 flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-semibold">
                {formatPrice(subtotal)}
              </span>
            </div>

            <div className="mt-4 flex justify-between gap-4 text-sm">
              <span>Delivery</span>
              <span className="text-right text-gray-500">
                Calculated at checkout
              </span>
            </div>

            <p className="mt-5 text-xs leading-5 text-gray-500">
              Taxes and final delivery costs depend on your
              location and order.
            </p>

            <div className="mt-6 flex justify-between border-t border-[#dedbd2] pt-5">
              <span className="font-semibold">Subtotal</span>
              <span className="text-lg font-semibold">
                {formatPrice(subtotal)}
              </span>
            </div>

            <button
              onClick={() =>
                window.alert(
                  "Checkout is a demo. Connect a payment provider to accept orders."
                )
              }
              className="mt-7 flex w-full items-center justify-center gap-2 bg-[#193d32] px-5 py-4 text-sm font-semibold text-white hover:bg-[#2b5646]"
            >
              Continue to checkout <ArrowRight size={17} />
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              Secure checkout integration required
            </p>
          </aside>
        </div>
      )}
    </main>
  );
}