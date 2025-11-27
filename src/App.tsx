import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import AboutPage from "./pages/About";
import WhoWeAre from "./pages/WhoWeAre";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PizzaMenuPage from "./pages/pizza";
import BurgerMenuPage from "./pages/burger";
import FriesMenuPage from "./pages/frieds";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Initialize AOS (animations) once for the app */}
        {typeof window !== "undefined" && (
          <AOSInit />
        )}




        <Helmet>
  {/* 🔹 Title */}
  <title>
    Ajfan Pizza | Best Pizza Delivery in Abu Arish, Saudi Arabia | Freshly Baked Happiness
  </title>

  {/* 🔹 Meta Description */}
  <meta
    name="description"
    content="Ajfan Pizza in Abu Arish serves oven-fresh, cheesy pizzas with fast delivery across Saudi Arabia. Order all types of pizzas — veg, non-veg, classic, and specialty — baked with love and premium ingredients."
  />

  {/* 🔹 Keywords */}
  <meta
    name="keywords"
    content="Ajfan Pizza, pizza Abu Arish, pizza delivery Saudi Arabia, best pizza Abu Arish, online pizza order, fast pizza delivery, cheesy pizza, non veg pizza, veg pizza, Ajfan pizza delivery, order pizza near me, pizza takeaway Abu Arish, pizza restaurant Saudi Arabia, Ajfan Pizza Saudi Arabia, Italian pizza Abu Arish, oven fresh pizza"
  />

  {/* 🔹 Open Graph (for Facebook, WhatsApp, etc.) */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Ajfan Pizza - Best Pizza Delivery in Abu Arish, Saudi Arabia" />
  <meta
    property="og:description"
    content="Delicious, oven-fresh pizzas delivered fast across Abu Arish. Try Ajfan Pizza — where every slice is happiness!"
  />
  <meta property="og:url" content="https://ajfanpizza.in" />
  <meta property="og:image" content="/pizza-preview.png" />

  {/* 🔹 Twitter Card (for X/Twitter previews) */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ajfan Pizza | Best Pizza Delivery in Abu Arish" />
  <meta
    name="twitter:description"
    content="Order from Ajfan Pizza for fast delivery and fresh, cheesy pizzas in Abu Arish, Saudi Arabia."
  />
  <meta name="twitter:image" content="/pizza-preview.png" />

  {/* 🔹 Canonical Link */}
  <link rel="canonical" href="https://ajfanpizza.in" />

  {/* 🔹 Local Business Schema */}
  <script type="application/ld+json">{`{
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Ajfan Pizza",
    "url": "https://ajfanpizza.in",
    "logo": "https://ajfanpizza.in/pizza-preview.png",
    "image": "https://ajfanpizza.in/pizza-preview.png",
    "description": "Ajfan Pizza in Abu Arish offers fast pizza delivery with oven-fresh, cheesy pizzas across Saudi Arabia.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Abu Arish",
      "addressRegion": "Jazan",
      "addressCountry": "Saudi Arabia"
    },
    "servesCuisine": ["Pizza", "Italian", "Fast Food"],
    "priceRange": "$$",
    "telephone": "+966503146050",
    "sameAs": [
      "https://instagram.com/ajfanpizza",
      "https://facebook.com/ajfanpizza"
    ]
  }`}</script>
</Helmet>






        {/* Toast & Notifications */}
        <Toaster />
        <Sonner />

        {/* App Routes */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pizza" element={<PizzaMenuPage/>} />
            <Route path="/burger" element={<BurgerMenuPage/>} />
            <Route path="/fries" element={<FriesMenuPage/>} />
            <Route path="/kidsmeal" element={<KidsMealMenuPage/>} />

            {/* ADD CUSTOM ROUTES ABOVE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

function AOSInit() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);
  return null;
}
