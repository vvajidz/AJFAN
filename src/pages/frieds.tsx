import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function FriesMenuPage() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-white flex flex-col justify-center items-center p-20">

        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Fries Menu</h1>
          <p className="text-gray-600 mt-2 text-lg">
            Crispy, golden, and loaded with flavor 🍟
          </p>
        </div>

        {/* Desktop Image */}
        <img
          src="/friespc.jpg"
          alt="Fries Menu Desktop"
          className="hidden md:block w-full max-w-6xl rounded-xl shadow-xl"
        />

        {/* Mobile Image */}
        <img
          src="/friesphone.jpg"
          alt="Fries Menu Mobile"
          className="block md:hidden w-full max-w-sm rounded-xl shadow-lg"
        />
      </div>

      <Contact />
    </div>
  );
}
