// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-sm flex justify-between items-center px-6 py-4">
      <h1 className="font-bold text-xl">Luxury Cars</h1>
      <div className="flex gap-6 font-medium">
        <Link href="/">Home</Link>
        <Link href="/cars">Cars</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}