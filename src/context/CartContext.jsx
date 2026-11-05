import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("koala-cart")) || [];
    } catch {
      return [];
    }
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("koala-cart", JSON.stringify(items));
  }, [items]);

  function add(product, size = null, quantity = 1) {
    const key = `${product.id}-${size || "standard"}`;

    setItems((previous) => {
      const existing = previous.find((item) => item.key === key);

      if (existing) {
        return previous.map((item) =>
          item.key === key
            ? { ...item, qty: item.qty + quantity }
            : item
        );
      }

      return [
        ...previous,
        { ...product, key, size, qty: quantity },
      ];
    });

    setOpen(true);
  }

  function setQty(key, qty) {
    setItems((previous) =>
      qty <= 0
        ? previous.filter((item) => item.key !== key)
        : previous.map((item) =>
            item.key === key ? { ...item, qty } : item
          )
    );
  }

  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        total,
        open,
        setOpen,
        add,
        setQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}