// app/page.tsx
import Hero from "@/components/Hero";
import CarCard from "@/components/CarCard";
import { cars } from "@/lib/cars";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="grid md:grid-cols-3 gap-6 p-10">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}