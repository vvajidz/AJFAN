import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function BurgerMenuPage() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-white flex flex-col justify-center items-center p-20">

        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Burger Menu</h1>
          <p className="text-gray-600 mt-2 text-lg">
            Juicy, fresh, and crafted to perfection 🍔
          </p>
        </div>

        {/* Desktop Image */}
        <img
          src="/burgerpc.jpg"
          alt="Burger Menu Desktop"
          className="hidden md:block w-full max-w-6xl rounded-xl shadow-xl"
        />

        {/* Mobile Image */}
        <img
          src="/burgerphone.jpg"
          alt="Burger Menu Mobile"
          className="block md:hidden w-full max-w-sm rounded-xl shadow-lg"
        />
      </div>

      <Contact />
    </div>
  );
}
