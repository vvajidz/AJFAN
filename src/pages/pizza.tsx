import About from "@/components/About";
import Contactlc from "@/components/lc";
import Navbar from "@/components/Navbar";

export default function PizzaMenuPage() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-white flex flex-col justify-center items-center p-20">

        {/* Heading Section */}
        <div 
          className="text-center mb-8"
          data-aos="fade-up"
          data-aos-delay="600"   
          data-aos-duration="1200"
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Our Pizza Menu
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Explore our delicious handcrafted pizzas 🍕
          </p>
        </div>

        {/* Desktop Image */}
        <img
          src="/pizzapc.jpg"
          alt="Pizza Menu Desktop"
          data-aos="zoom-in"
          data-aos-duration="800"
          className="hidden md:block w-full max-w-8xl rounded-xl shadow-xl"
        />

        {/* Mobile Image */}
        <img
          src="/pizzaphone.jpg"
          alt="Pizza Menu Mobile"
          data-aos="zoom-in"
          data-aos-duration="800"
          className="block md:hidden w-full max-w-sm rounded-xl shadow-lg"
        />
        
      </div>

      <Contactlc />
    </div>
  );
}
