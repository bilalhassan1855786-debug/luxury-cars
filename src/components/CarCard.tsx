import Link from "next/link";

export default function CarCard({ car }: any) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden">
      <img
        src={car.image}
        className="h-52 w-full object-cover hover:scale-110 transition"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{car.name}</h2>
        <p className="text-gray-500">{car.brand}</p>
        <p className="font-bold">${car.price}</p>

        <Link href={`/cars/${car.id}`} className="text-blue-600 mt-2 block">
          View Details →
        </Link>
      </div>
    </div>
  );
}