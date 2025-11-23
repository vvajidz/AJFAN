import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function KidsMealMenuPage() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-white flex flex-col justify-center items-center p-20">

        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Kids Meal Menu</h1>
          <p className="text-gray-600 mt-2 text-lg">
            Fun, tasty & made for little foodies 🎈🍔
          </p>
        </div>

        {/* Desktop Image */}
        <img
          src="/kidsmealpc.jpg"
          alt="Kids Meal Menu Desktop"
          className="hidden md:block w-full max-w-6xl rounded-xl shadow-xl"
        />

        {/* Mobile Image */}
        <img
          src="/kidsmealphone.jpg"
          alt="Kids Meal Menu Mobile"
          className="block md:hidden w-full max-w-sm rounded-xl shadow-lg"
        />
      </div>

      <Contact />
    </div>
  );
}
