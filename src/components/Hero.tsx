import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-[#07111f] text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/luxury-hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-[#07111f]/90 to-[#07111f]/30" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          {/* Small Heading */}
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#f5b82e]">
            Premium Luxury Cars
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Drive Your{" "}
            <span className="text-[#f5b82e]">
              Dream
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg">
            Explore the world of luxury. Premium cars, unmatched performance,
            and timeless elegance — all in one place.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 rounded-full bg-[#f5b82e] px-7 py-3.5 font-semibold text-black shadow-lg transition duration-300 hover:scale-105 hover:bg-[#ffc94d]"
            >
              Explore Collection
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
