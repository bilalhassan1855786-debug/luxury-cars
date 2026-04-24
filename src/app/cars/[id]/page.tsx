"use client";

import { useParams } from "next/navigation";
import { cars } from "@/lib/cars";

export default function CarDetail() {
  const params = useParams();

  // ✅ Safe conversion
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const carId = Number(id);

  const car = cars.find((c) => c.id === carId);

  if (!car) {
    return <div className="p-10 text-red-500">Car Not Found</div>;
  }

  return (
    <div className="p-10 grid md:grid-cols-2 gap-10">
      <img
        src={car.image}
        alt={car.name}
        className="rounded-xl"
      />

      <div>
        <h1 className="text-4xl font-bold">{car.name}</h1>

        <p className="mt-3 text-gray-600">
          {car.description || "No description available"}
        </p>

        <ul className="mt-4 space-y-2">
          {car.features?.map((f: string, i: number) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>

        <p className="mt-6 text-xl font-bold">${car.price}</p>
        <p>Delivery: ${car.deliveryCharge}</p>

        {/* ✅ FIXED BUTTON */}
        <a
          href={`/buy?car=${car.id}`}
          className="bg-black text-white px-6 py-3 mt-6 inline-block rounded"
        >
          Buy Now 🚗
        </a>
      </div>
    </div>
  );
}