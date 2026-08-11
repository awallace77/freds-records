"use client";

import { createContext, useContext, useState } from "react";
import type { RecordItem } from "@/lib/records";

type CartContext = {
  count: number;
  addItem: (record: RecordItem) => void;
};

const CartContext = createContext<CartContext | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <CartContext.Provider
      value={{
        count,
        addItem: () => setCount((current) => current + 1),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}