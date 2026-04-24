// src/app/cart/page.tsx
"use client";

import { useEffect, useState } from "react";

// ✅ Type define karo
type Car = {
  name: string;
  image: string;
  price: number;
  deliveryCharge: number;
};

export default function CartPage() {
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");

    if (cartData) {
      try {
        const parsed: Car = JSON.parse(cartData);
        setCar(parsed);
      } catch (error) {
        console.error("Invalid cart data");
      }
    }
  }, []);

  const handleCancel = () => {
    localStorage.removeItem("cart");
    setCar(null);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {car ? (
        <div className="bg-white p-6 rounded-xl shadow max-w-md">
          <p className="font-bold text-lg mb-2">{car.name}</p>

          <img
            src={car.image}
            alt={car.name}
            className="w-full h-48 object-cover rounded mb-4"
          />

          <p>Price: ${car.price}</p>
          <p>Delivery: ${car.deliveryCharge}</p>

          <button
            className="bg-red-600 text-white px-4 py-2 mt-4 rounded"
            onClick={handleCancel}
          >
            Cancel Order
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is currently empty.</p>
      )}
    </div>
  );
}
