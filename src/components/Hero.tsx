// src/components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-[85vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <h1 className="text-6xl font-bold tracking-wide">
        Drive Your Dream
      </h1>
      <p className="mt-4 text-gray-300 max-w-xl">
        Premium luxury cars delivered to your doorstep with elegance.
      </p>
      <Link
        href="/cars"
        className="mt-6 bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition"
      >
        Explore Collection
      </Link>
    </div>
  );
}