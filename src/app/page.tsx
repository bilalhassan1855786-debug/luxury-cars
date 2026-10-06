import Link from "next/link";
import Hero from "@/components/Hero";
import CarCard from "@/components/CarCard";
import { cars } from "@/lib/cars";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Featured Cars Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="border-l-4 border-[#f5b82e] pl-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Cars
            </h2>

            <p className="mt-1 text-gray-600">
              Discover our handpicked collection of luxury vehicles.
            </p>
          </div>

          <Link
            href="/cars"
            className="group inline-flex items-center gap-2 font-semibold text-gray-900 transition hover:text-[#d99d15]"
          >
            View All Cars
            <span className="text-xl transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </main>
  );
}
