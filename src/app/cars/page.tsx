// src/app/cars/page.tsx
"use client";

import { useState } from "react";
import { cars } from "@/lib/cars";
import CarCard from "@/components/CarCard";

// ✅ Type define karo (VERY IMPORTANT)
type Car = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  deliveryCharge: number;
};

export default function CarsPage() {
  const [search, setSearch] = useState<string>("");
  const [brand, setBrand] = useState<string>("All");

  // ✅ Proper typing
  const filteredCars = (cars as Car[]).filter((car) => {
    return (
      car.name.toLowerCase().includes(search.toLowerCase()) &&
      (brand === "All" || car.brand === brand)
    );
  });

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Luxury Collection</h1>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search car..."
          className="p-2 border rounded w-full"
          value={search} // ✅ controlled input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />

        <div className="flex flex-col">
          <label htmlFor="brand-select" className="mb-1 text-sm font-medium">Brand</label>
          <select
            id="brand-select"
            className="p-2 border rounded"
            value={brand} // ✅ controlled select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setBrand(e.target.value)
            }
          >
            <option value="All">All</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Rolls Royce">Rolls Royce</option>
            <option value="Bugatti">Bugatti</option>
            <option value="BMW">BMW</option>
            <option value="Audi">Audi</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Porsche">Porsche</option>
            <option value="Tesla">Tesla</option>
            <option value="McLaren">McLaren</option>
          </select>
        </div>
      </div>

      {/* Cars */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))
        ) : (
          <p className="text-gray-500">No cars found 😕</p>
        )}
      </div>
    </div>
  );
}