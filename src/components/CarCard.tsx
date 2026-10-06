import Link from "next/link";

export default function CarCard({ car }: any) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Car Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900">
          {car.name}
        </h2>

        <p className="mt-1 text-sm font-medium text-gray-500">
          {car.brand}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">
            ${car.price.toLocaleString()}
          </p>
        </div>

        {/* View Details */}
        <Link
          href={`/cars/${car.id}`}
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:border-[#f5b82e] hover:bg-[#f5b82e] hover:text-black"
        >
          View Details
          <span className="text-lg transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
