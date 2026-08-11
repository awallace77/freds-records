"use client";

import { useCart } from "./cart-provider";
import type { RecordItem } from "@/lib/records";

export function AddToCartButton({ record }: { record: RecordItem }) {
  const { addItem, count } = useCart();

  const addItemToCart = function (record: RecordItem) {
    addItem(record);
    console.log("Added Record: " + record);
    console.log("Cart count: " + count);
  };

  return (
    <button
      onClick={() => addItemToCart(record)}
      className="rounded-full bg-[#f3efe6] px-7 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#171512] transition hover:scale-105 cursor-pointer"
    >
      Add to cart
    </button>
  );
}
