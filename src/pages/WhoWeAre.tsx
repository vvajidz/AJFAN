import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const WhoWeAre = () => (
  <>
    <Helmet>
      <title>Who We Are — Ajfan Pizza</title>
      <meta name="description" content="Who we are at Ajfan Pizza: our values, team and dedication to fresh, delicious pizza." />
    </Helmet>

    <div className="min-h-screen">
      <Navbar />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Ajfan Pizza is a family-driven pizzeria focused on fresh ingredients,
              authentic flavors, and a friendly local experience. We bake our dough
              fresh every day and use high-quality toppings sourced from trusted
              suppliers. Our small team cares about every order — from the first
              dough stretch to the final slice.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're picking up a quick lunch or ordering for a family
              celebration, we aim to deliver hot, delicious pizza and a smile. Follow
              us on social media to see behind-the-scenes stories and new menu
              drops.
            </p>
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  </>
);

export default WhoWeAre;
