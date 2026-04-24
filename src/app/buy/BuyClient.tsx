// src/app/buy/BuyClient.tsx

"use client";

import { useSearchParams } from "next/navigation";
import { cars } from "@/lib/cars";

export default function BuyClient() {
  const params = useSearchParams();
  const carId = Number(params.get("car"));

  const car = cars.find((c) => c.id === carId);

  if (!car) {
    return <div className="p-10">No Car Selected</div>;
  }

  const total = car.price + car.deliveryCharge;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Checkout</h1>

      <div className="mt-6 bg-white p-6 rounded-xl shadow max-w-md">
        <p>{car.name}</p>
        <p>Price: ${car.price}</p>
        <p>Delivery: ${car.deliveryCharge}</p>
        <h2 className="mt-4 text-xl font-bold">Total: ${total}</h2>

        <button className="bg-black text-white px-4 py-2 mt-4 rounded">
          Confirm Order
        </button>
      </div>
    </div>
  );
}