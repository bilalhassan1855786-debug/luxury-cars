// src/app/contact/page.tsx
export default function Contact() {
  return (
    <div className="p-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold">Contact Us</h1>

      <form className="flex flex-col gap-4 mt-6">
        <input className="p-3 border rounded" placeholder="Name" />
        <input className="p-3 border rounded" placeholder="Email" />
        <textarea className="p-3 border rounded" placeholder="Message" />

        <button className="bg-black text-white py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}